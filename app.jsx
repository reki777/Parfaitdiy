/* eslint-disable */
const { useState, useRef, useEffect, useMemo, useCallback } = React;

const CATS = [
  { id: "base", jp: "杯内・ベース",     zh: "杯内 / 基底" },
  { id: "top",  jp: "飾り・トッピング", zh: "顶部 / 装饰" },
  { id: "ice",  jp: "アイス",           zh: "冰激凌球"    },
];

/* Fixed design canvas dimensions */
const CANVAS_W = 480;
const CANVAS_H = 640;
const LAYER_H  = 34;

/* Bowl bounds helpers — derived from the active cup */
const bowlBounds = (cup) => ({
  top:    cup.bowlTop,
  bottom: cup.bowlBottom,
  halfAt: (y) => cup.halfWidthAt(
    Math.max(0, Math.min(1, (y - cup.bowlTop) / (cup.bowlBottom - cup.bowlTop)))
  ),
  inside: (x, y) => {
    if (y < cup.bowlTop || y > cup.bowlBottom) return false;
    const hw = cup.halfWidthAt((y - cup.bowlTop) / (cup.bowlBottom - cup.bowlTop));
    return Math.abs(x - CUP_CX) <= hw;
  },
  clampY: (y) =>
    Math.max(cup.bowlTop + LAYER_H/2, Math.min(cup.bowlBottom - LAYER_H/2, y)),
});

/* ------------------------------------------------------------- */
/* Cup selector tabs                                              */
/* ------------------------------------------------------------- */
function CupSelector({ cupId, onChange }) {
  return (
    <div className="mb-4">
      <div className="flex items-end justify-between mb-2">
        <div className="text-[10px] tracking-[0.4em] text-inkSoft uppercase">Step 00 — グラスを選ぶ</div>
        <div className="text-[10px] text-inkSoft tracking-[0.2em]">
          現在 · <span className="text-ink font-mincho">{CUPS[cupId].zh}</span> &nbsp;/&nbsp; {CUPS[cupId].en}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 bg-milk border border-ink/15 p-1">
        {Object.values(CUPS).map(cup => {
          const on = cup.id === cupId;
          return (
            <button
              key={cup.id}
              onClick={() => onChange(cup.id)}
              title={cup.zh}
              className={"flex flex-col items-center gap-1 px-2 py-2 transition " + (on ? "bg-ink text-cream" : "text-inkSoft hover:bg-paper hover:text-ink")}
            >
              <div className="h-12 flex items-end justify-center">
                <CupIcon cupId={cup.id} size={32} />
              </div>
              <div className="font-mincho text-[10px] leading-none">{cup.jp}</div>
              <div className="text-[8px] tracking-[0.25em] uppercase opacity-70 leading-none">{cup.en}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- */
/* Stage                                                          */
/* ------------------------------------------------------------- */
function Stage({
  cupId, baseLayers, decor, stageRef,
  onPlacedPointerDown, onResizePointerDown, onRotatePointerDown,
  selectedIid, onBgPointerDown,
  hint, bringFront, sendBack, deleteItem, setScale, resetRot,
}) {
  const cup = CUPS[cupId];
  const selected = decor.find(d => d.iid === selectedIid);
  const sortedBase = [...baseLayers].sort((a,b) => a.y - b.y);

  return (
    <div
      ref={stageRef}
      className="relative grain"
      style={{ width: CANVAS_W, height: CANVAS_H, overflow: "hidden" }}
      onPointerDown={onBgPointerDown}
    >
      <CornerMarks />

      {/* Top header inside canvas */}
      <div className="absolute top-6 left-8 right-8 flex items-start justify-between z-10 pointer-events-none">
        <div>
          <div className="font-mincho text-[10px] tracking-[0.4em] text-inkSoft">N° 01 · STUDIO</div>
          <div className="font-mincho text-2xl mt-2 leading-none">あなたの一杯</div>
          <div className="text-[10px] tracking-[0.3em] text-inkSoft mt-1 uppercase">Your Parfait</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-[0.3em] text-inkSoft uppercase">Items</div>
          <div className="font-mincho text-3xl leading-none mt-1">
            {String(baseLayers.length + decor.length).padStart(2,"0")}
          </div>
          <div className="text-[10px] text-inkSoft mt-1">
            {baseLayers.length} base · {decor.length} decor
          </div>
        </div>
      </div>

      {/* Cup name vertical caption */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 vertical-jp font-mincho text-[10px] text-inkSoft pointer-events-none">
        {cup.jp} <span className="opacity-70">の グラス</span>
      </div>

      {/* Cup SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <CupGlass cupId={cupId} />
      </div>

      {/* Base layer bands — each band's top/bottom edges align with the bowl
          inner wall at those y's, via a trapezoid clip-path. */}
      {sortedBase.map(p => {
        const ing = findIng(p.ingId);
        if (!ing) return null;
        const range = cup.bowlBottom - cup.bowlTop;
        const tTop = Math.max(0, Math.min(1, (p.y - LAYER_H/2 - cup.bowlTop) / range));
        const tBot = Math.max(0, Math.min(1, (p.y + LAYER_H/2 - cup.bowlTop) / range));
        const topHW = cup.halfWidthAt(tTop);
        const botHW = cup.halfWidthAt(tBot);
        const maxHW = Math.max(topHW, botHW);
        const W    = maxHW * 2;
        const left = CUP_CX - maxHW;
        const top  = p.y - LAYER_H/2;
        // trapezoid corners as percentages of W
        const tlx = ((maxHW - topHW) / W) * 100;
        const trx = ((maxHW + topHW) / W) * 100;
        const blx = ((maxHW - botHW) / W) * 100;
        const brx = ((maxHW + botHW) / W) * 100;
        return (
          <div
            key={p.iid}
            className="absolute placed"
            style={{
              left, top, width: W, height: LAYER_H,
              cursor: "grab",
              clipPath: `polygon(${tlx}% 0, ${trx}% 0, ${brx}% 100%, ${blx}% 100%)`,
            }}
            onPointerDown={(e) => onPlacedPointerDown(e, { ...p, type: "base" })}
          >
            <BaseLayer ing={ing} w={W} h={LAYER_H} />
          </div>
        );
      })}

      {/* Free decor */}
      {decor.map(p => {
        const ing = findIng(p.ingId);
        if (!ing) return null;
        const isSel = p.iid === selectedIid;
        return (
          <div
            key={p.iid}
            className="absolute placed"
            style={{
              left: p.x,
              top:  p.y,
              transform: "translate(-50%, -50%)",
              zIndex: p.z,
              cursor: "grab",
            }}
            onPointerDown={(e) => onPlacedPointerDown(e, { ...p, type: "free" })}
          >
            <Sticker id={ing.id} size={ing.size} rotation={p.rot} scale={p.scale}/>
            {isSel && <SelectionFrame size={ing.size * p.scale} />}
          </div>
        );
      })}

      {/* Edit handles + panel for selected decor */}
      {selected && (
        <SelectionUI
          item={selected}
          onResizePointerDown={onResizePointerDown}
          onRotatePointerDown={onRotatePointerDown}
          bringFront={bringFront}
          sendBack={sendBack}
          deleteItem={deleteItem}
          setScale={setScale}
          resetRot={resetRot}
        />
      )}

      {/* Empty hint */}
      {baseLayers.length === 0 && decor.length === 0 && (
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none" style={{ paddingBottom: 40 }}>
          <div className="text-center bg-cream/85 backdrop-blur-sm px-5 py-3 border border-ink/15 mb-[88px]">
            <div className="font-mincho text-sm tracking-[0.3em]">空のグラス</div>
            <div className="text-[10px] text-inkSoft mt-1 tracking-[0.25em] uppercase">
              base ⇒ snaps inside bowl &nbsp;·&nbsp; decor ⇒ drag freely
            </div>
          </div>
        </div>
      )}

      {hint && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-ink/85 text-cream text-[10px] tracking-[0.3em] uppercase px-4 py-2">
            {hint}
          </div>
        </div>
      )}
    </div>
  );
}

function SelectionFrame({ size }) {
  const pad = 10;
  const s = size + pad * 2;
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: -pad, top: -pad, width: s, height: s,
        border: "1px dashed rgba(58,42,31,0.65)",
      }}
    >
      <span className="absolute -top-0.5 -left-0.5 w-2 h-2 border-l border-t border-ink"/>
      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 border-r border-t border-ink"/>
      <span className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l border-b border-ink"/>
      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-ink"/>
    </div>
  );
}

function SelectionUI({
  item, onResizePointerDown, onRotatePointerDown,
  bringFront, sendBack, deleteItem, setScale, resetRot,
}) {
  const ing = findIng(item.ingId);
  if (!ing) return null;
  const bbox = ing.size * item.scale + 20;
  const halfBox = bbox / 2;

  // Clamp panel position so it never escapes the canvas
  const panelW = 360;
  const panelTop = Math.max(8, item.y + halfBox + 14);
  const panelLeft = Math.max(panelW/2 + 8, Math.min(CANVAS_W - panelW/2 - 8, item.x));

  return (
    <>
      {/* Rotate handle — above bbox */}
      <div
        onPointerDown={(e) => onRotatePointerDown(e, item)}
        className="absolute z-40 flex items-center justify-center"
        title="拖动旋转 · drag to rotate"
        style={{
          left: item.x - 11,
          top:  item.y - halfBox - 30,
          width: 22, height: 22,
          background: "#FBF5EC",
          border: "1.5px solid #3A2A1F",
          borderRadius: "50%",
          cursor: "grab",
          boxShadow: "0 2px 6px rgba(58,42,31,0.3)",
          touchAction: "none",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 14 14">
          <path d="M11 6 A 4 4 0 1 1 7 2" fill="none" stroke="#3A2A1F" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M11 1.5 L 11 5 L 7.5 5" fill="none" stroke="#3A2A1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* tether line rotate handle → bbox */}
      <svg className="absolute z-30 pointer-events-none"
           style={{ left: item.x - 0.5, top: item.y - halfBox - 12, width: 1, height: 12 }}>
        <line x1="0.5" y1="0" x2="0.5" y2="12" stroke="#3A2A1F" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>

      {/* SE resize handle */}
      <div
        onPointerDown={(e) => onResizePointerDown(e, item)}
        className="absolute z-40"
        title="拖动缩放 · drag to resize"
        style={{
          left: item.x + halfBox - 11,
          top:  item.y + halfBox - 11,
          width: 22, height: 22,
          background: "#FBF5EC",
          border: "1.5px solid #3A2A1F",
          borderRadius: "50%",
          cursor: "nwse-resize",
          boxShadow: "0 2px 6px rgba(58,42,31,0.3)",
          touchAction: "none",
        }}
      >
        <span style={{
          position: "absolute", left: 5, top: 5, width: 11, height: 11,
          borderRight: "1.5px solid #3A2A1F", borderBottom: "1.5px solid #3A2A1F",
        }}/>
      </div>

      {/* Floating action panel — below the bbox */}
      <div
        className="absolute z-40 bg-ink text-cream shadow-[0_10px_30px_-6px_rgba(58,42,31,0.5)] flex items-center"
        style={{
          left: panelLeft,
          top:  panelTop,
          transform: "translate(-50%, 0)",
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <PanelBtn onClick={bringFront} title="置于顶层 · bring to front">↑ Front</PanelBtn>
        <Sep/>
        <PanelBtn onClick={sendBack} title="置于底层 · send to back">↓ Back</PanelBtn>
        <Sep/>
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="text-[9px] tracking-[0.25em] uppercase text-cream/70">Scale</span>
          <input
            type="range" min="0.4" max="2.4" step="0.05"
            value={item.scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="parfait-slider"
            style={{ width: 86 }}
          />
          <span className="font-mincho text-[11px] w-9 text-right tabular-nums">
            {Math.round(item.scale * 100)}%
          </span>
        </div>
        <Sep/>
        <PanelBtn onClick={resetRot} title="復位 · reset rotation">↺ 0°</PanelBtn>
        <Sep/>
        <PanelBtn onClick={deleteItem} title="删除" danger>×</PanelBtn>
      </div>
    </>
  );
}

function PanelBtn({ children, onClick, title, danger }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={"px-3 py-2 text-[10px] tracking-[0.25em] uppercase hover:bg-cream hover:text-ink transition " + (danger ? "text-rose/90" : "")}
    >
      {children}
    </button>
  );
}
function Sep() { return <div className="w-px h-5 bg-cream/20"/>; }

function CornerMarks() {
  const arm  = "absolute w-4 h-px bg-ink/40";
  const armV = "absolute w-px h-4 bg-ink/40";
  return (
    <>
      <div className={arm}  style={{ top: 14, left: 14 }} />
      <div className={armV} style={{ top: 14, left: 14 }} />
      <div className={arm}  style={{ top: 14, right: 14 }} />
      <div className={armV} style={{ top: 14, right: 14 }} />
      <div className={arm}  style={{ bottom: 14, left: 14 }} />
      <div className={armV} style={{ bottom: 14, left: 14, marginTop: -16 }} />
      <div className={arm}  style={{ bottom: 14, right: 14 }} />
      <div className={armV} style={{ bottom: 14, right: 14, marginTop: -16 }} />
    </>
  );
}

/* ------------------------------------------------------------- */
/* Picker                                                         */
/* ------------------------------------------------------------- */
function PickerCard({ ing, onPointerDown }) {
  return (
    <div
      onPointerDown={(e) => onPointerDown(e, ing)}
      className="picker-card group relative bg-milk border border-ink/10 hover:border-ink/40 transition rounded-sm p-3 flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(58,42,31,0.35)]"
    >
      <div className="absolute top-1.5 left-1.5 text-[8px] tracking-[0.2em] font-mincho px-1.5 py-0.5 bg-cream/90 text-inkSoft border border-ink/10">
        {ing.id.split("-").map(s => s[0]).join("").toUpperCase()}
      </div>
      <div className="w-full aspect-square flex items-center justify-center bg-paper/60 rounded-sm">
        <Sticker id={ing.id} size={ing.size * 0.78} />
      </div>
      <div className="text-center mt-0.5">
        <div className="font-mincho text-[13px] leading-tight">{ing.jp}</div>
        <div className="text-[10px] text-inkSoft mt-0.5">{ing.zh}</div>
      </div>
    </div>
  );
}

function Picker({ onCardPointerDown, count }) {
  const [active, setActive] = useState("base");
  const items = useMemo(() => INGREDIENTS.filter(i => i.cat === active), [active]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="text-[10px] tracking-[0.4em] text-inkSoft uppercase">Step 02 — 素材棚</div>
          <h2 className="font-mincho text-2xl mt-1.5">食材の棚</h2>
          <div className="text-[11px] text-inkSoft mt-1 leading-relaxed">
            基底入杯 ⇒ 自动随杯型铺层<br/>
            顶饰 / 冰激凌 ⇒ 单击编辑 · 旋转 · 缩放 · 层级
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-[0.3em] text-inkSoft uppercase">In cup</div>
          <div className="font-mincho text-2xl leading-none mt-1">
            {String(count).padStart(2,"0")}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 border-b border-ink/15 mb-5">
        {CATS.map(c => {
          const on = c.id === active;
          const n  = INGREDIENTS.filter(i => i.cat === c.id).length;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={"relative px-4 py-3 text-left transition " + (on ? "text-ink" : "text-inkSoft hover:text-ink")}
            >
              <div className="font-mincho text-[15px]">{c.jp}</div>
              <div className="text-[9px] tracking-[0.3em] mt-0.5 uppercase">{c.zh} · {n}</div>
              {on && <div className="absolute left-0 right-0 -bottom-px h-px bg-ink" />}
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar scroll-fade pr-2">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 pb-6">
          {items.map(ing => (
            <PickerCard key={ing.id} ing={ing} onPointerDown={onCardPointerDown} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- */
/* Main App                                                       */
/* ------------------------------------------------------------- */
function App() {
  const [cupId,       setCupId]      = useState("wine");
  const [baseLayers,  setBaseLayers] = useState([]);
  const [decor,       setDecor]      = useState([]);
  const [selected,    setSelected]   = useState(null);
  const [drag,        setDrag]       = useState(null);
  const [resize,      setResize]     = useState(null);
  const [rotate,      setRotate]     = useState(null);
  const [hint,        setHint]       = useState(null);

  const stageRef = useRef(null);
  const zRef     = useRef(10);

  const cup    = CUPS[cupId];
  const bounds = bowlBounds(cup);

  /* Switch cup: clamp base layers to the new bowl range */
  const changeCup = useCallback((newId) => {
    setCupId(newId);
    const nc = CUPS[newId];
    setBaseLayers(prev => prev.map(p => ({
      ...p,
      y: Math.max(nc.bowlTop + LAYER_H/2, Math.min(nc.bowlBottom - LAYER_H/2, p.y)),
    })));
  }, []);

  /* drop commit */
  const commitDrop = useCallback((d, clientX, clientY) => {
    const stage = stageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    const inside = clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom;
    const x = clientX - r.left;
    const y = clientY - r.top;
    const b = bowlBounds(CUPS[cupId]);

    if (d.cat === "base") {
      const okY = inside && y >= b.top - 8 && y <= b.bottom + 8;
      if (d.source === "panel") {
        if (okY) {
          setBaseLayers(prev => [...prev, {
            iid: newIid(), ingId: d.ingId, y: b.clampY(y),
          }]);
        }
      } else {
        if (okY) {
          setBaseLayers(prev => prev.map(p => p.iid === d.iid ? { ...p, y: b.clampY(y) } : p));
        } else {
          setBaseLayers(prev => prev.filter(p => p.iid !== d.iid));
        }
      }
    } else {
      if (d.source === "panel") {
        if (inside) {
          zRef.current += 1;
          setDecor(prev => [...prev, {
            iid: newIid(), ingId: d.ingId,
            x, y, rot: d.rot, scale: d.scale,
            z: zRef.current,
          }]);
        }
      } else {
        if (inside) {
          setDecor(prev => prev.map(p => p.iid === d.iid ? { ...p, x, y } : p));
        } else {
          setDecor(prev => prev.filter(p => p.iid !== d.iid));
          if (selected === d.iid) setSelected(null);
        }
      }
    }
  }, [cupId, selected]);

  /* pointer move/up while dragging */
  useEffect(() => {
    if (!drag) return;
    const onMove = (e) => {
      setDrag(d => {
        if (!d) return d;
        const next = { ...d, x: e.clientX, y: e.clientY };
        if (d.phase === "press") {
          const dx = e.clientX - d.startX;
          const dy = e.clientY - d.startY;
          if (Math.hypot(dx, dy) > 5) next.phase = "move";
        }
        return next;
      });
    };
    const onUp = (e) => {
      setDrag(d => {
        if (!d) return null;
        if (d.phase === "press") {
          if (d.source === "placed" && d.cat !== "base") {
            setSelected(prev => prev === d.iid ? null : d.iid);
          }
        } else {
          commitDrop(d, e.clientX, e.clientY);
        }
        return null;
      });
      setHint(null);
    };
    window.addEventListener("pointermove",   onMove);
    window.addEventListener("pointerup",     onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove",   onMove);
      window.removeEventListener("pointerup",     onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [drag, commitDrop]);

  /* hint banner while dragging */
  useEffect(() => {
    if (!drag || drag.phase !== "move") { setHint(null); return; }
    const stage = stageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    const inside = drag.x >= r.left && drag.x <= r.right && drag.y >= r.top && drag.y <= r.bottom;
    const y = drag.y - r.top;
    const b = bowlBounds(CUPS[cupId]);
    const okY = inside && y >= b.top - 8 && y <= b.bottom + 8;
    if (drag.cat === "base") {
      setHint(okY ? null : "基底必须落入杯腔 · drop inside the bowl");
    } else {
      if (drag.source === "placed" && !inside) setHint("拖出画布即丢弃 · drop outside to discard");
      else if (drag.source === "panel" && !inside) setHint("拖入左侧画布以放置");
      else setHint(null);
    }
  }, [drag, cupId]);

  /* resize gesture */
  useEffect(() => {
    if (!resize) return;
    const onMove = (e) => {
      const dist = Math.hypot(e.clientX - resize.cx, e.clientY - resize.cy);
      const ratio = dist / Math.max(8, resize.startDist);
      const newScale = Math.max(0.4, Math.min(2.4, resize.startScale * ratio));
      setDecor(prev => prev.map(p => p.iid === resize.iid ? { ...p, scale: newScale } : p));
    };
    const onUp = () => setResize(null);
    window.addEventListener("pointermove",   onMove);
    window.addEventListener("pointerup",     onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove",   onMove);
      window.removeEventListener("pointerup",     onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [resize]);

  /* rotation gesture */
  useEffect(() => {
    if (!rotate) return;
    const onMove = (e) => {
      const a = Math.atan2(e.clientY - rotate.cy, e.clientX - rotate.cx) * 180 / Math.PI;
      const delta = a - rotate.startAngle;
      const newRot = rotate.initialRot + delta;
      setDecor(prev => prev.map(p => p.iid === rotate.iid ? { ...p, rot: newRot } : p));
    };
    const onUp = () => setRotate(null);
    window.addEventListener("pointermove",   onMove);
    window.addEventListener("pointerup",     onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove",   onMove);
      window.removeEventListener("pointerup",     onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [rotate]);

  /* handlers */
  const onCardPointerDown = useCallback((e, ing) => {
    e.preventDefault();
    setDrag({
      phase: "move",
      source: "panel",
      ingId: ing.id,
      cat: ing.cat,
      startX: e.clientX, startY: e.clientY,
      x: e.clientX, y: e.clientY,
      rot: (Math.random() * 30) - 15,
      scale: 1,
    });
  }, []);

  const onPlacedPointerDown = useCallback((e, item) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag({
      phase: "press",
      source: "placed",
      ingId: item.ingId,
      cat: item.type === "base" ? "base" : (findIng(item.ingId)?.cat || "top"),
      iid: item.iid,
      startX: e.clientX, startY: e.clientY,
      x: e.clientX, y: e.clientY,
      rot: item.rot || 0,
      scale: item.scale || 1,
    });
  }, []);

  const onResizePointerDown = useCallback((e, item) => {
    e.preventDefault();
    e.stopPropagation();
    const stage = stageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    const cx = r.left + item.x;
    const cy = r.top  + item.y;
    const startDist = Math.hypot(e.clientX - cx, e.clientY - cy);
    setResize({ iid: item.iid, cx, cy, startDist, startScale: item.scale || 1 });
  }, []);

  const onRotatePointerDown = useCallback((e, item) => {
    e.preventDefault();
    e.stopPropagation();
    const stage = stageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    const cx = r.left + item.x;
    const cy = r.top  + item.y;
    const startAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI;
    setRotate({
      iid: item.iid,
      cx, cy,
      startAngle,
      initialRot: item.rot || 0,
    });
  }, []);

  const onBgPointerDown = useCallback((e) => {
    if (e.target === e.currentTarget) setSelected(null);
  }, []);

  /* selection ops */
  const bringFront = useCallback(() => {
    if (!selected) return;
    zRef.current += 1;
    const zNow = zRef.current;
    setDecor(prev => prev.map(p => p.iid === selected ? { ...p, z: zNow } : p));
  }, [selected]);

  const sendBack = useCallback(() => {
    if (!selected) return;
    setDecor(prev => {
      const minZ = prev.reduce((m, p) => Math.min(m, p.z), Infinity);
      return prev.map(p => p.iid === selected ? { ...p, z: (Number.isFinite(minZ) ? minZ : 0) - 1 } : p);
    });
  }, [selected]);

  const deleteItem = useCallback(() => {
    if (!selected) return;
    setDecor(prev => prev.filter(p => p.iid !== selected));
    setSelected(null);
  }, [selected]);

  const setScale = useCallback((v) => {
    if (!selected) return;
    setDecor(prev => prev.map(p => p.iid === selected ? { ...p, scale: v } : p));
  }, [selected]);

  const resetRot = useCallback(() => {
    if (!selected) return;
    setDecor(prev => prev.map(p => p.iid === selected ? { ...p, rot: 0 } : p));
  }, [selected]);

  /* global tools */
  const undo = () => {
    if (decor.length) {
      const last = decor[decor.length - 1];
      setDecor(prev => prev.slice(0, -1));
      if (selected === last.iid) setSelected(null);
    } else if (baseLayers.length) {
      setBaseLayers(prev => prev.slice(0, -1));
    }
  };
  const clear = () => {
    setBaseLayers([]); setDecor([]); setSelected(null);
  };
  const shuffleTilt = () =>
    setDecor(prev => prev.map(p => ({ ...p, rot: (Math.random()*30)-15 })));

  const dragIng = drag ? findIng(drag.ingId) : null;
  const ghostSize = dragIng ? dragIng.size : 72;

  const busy = (drag?.phase === "move") || resize || rotate;

  return (
    <div
      className={"min-h-screen relative " + (busy ? "grabbing" : "")}
      style={{ touchAction: busy ? "none" : "auto" }}
    >
      <header className="px-10 pt-7 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border border-ink flex items-center justify-center font-mincho text-sm">P</div>
          <div className="font-mincho tracking-[0.3em] text-sm">PARFAIT &nbsp;·&nbsp; パフェ メーカー</div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.3em] uppercase text-inkSoft">
          <a className="hover:text-ink cursor-pointer">Studio</a>
          <a className="hover:text-ink cursor-pointer">Recipes</a>
          <a className="hover:text-ink cursor-pointer">Journal</a>
          <a className="hover:text-ink cursor-pointer">About</a>
        </nav>
        <div className="text-[11px] tracking-[0.3em] text-inkSoft">初夏 · MAY</div>
      </header>

      <div className="mx-10 border-t border-ink/15"></div>

      <div className="mx-10 mt-4 mb-3 flex items-end justify-between">
        <div>
          <div className="text-[10px] tracking-[0.4em] text-inkSoft uppercase">Step 01 — Compose</div>
          <h1 className="font-mincho text-3xl mt-1.5">自由に重ねる、芭菲手帐。</h1>
        </div>
        <div className="text-[11px] text-inkSoft text-right max-w-[360px] leading-relaxed">
          選杯型 → 拖入基底 → 自由摆放顶饰<br/>
          <span className="text-ink">单击顶饰</span> → 旋转手柄(上) · 缩放手柄(右下) · 操作面板(下)
        </div>
      </div>

      <main className="px-10 pb-10 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10">
        <div>
          <CupSelector cupId={cupId} onChange={changeCup}/>
          <div className="canvas-card relative" style={{ width: CANVAS_W, height: CANVAS_H }}>
            <Stage
              cupId={cupId}
              baseLayers={baseLayers}
              decor={decor}
              stageRef={stageRef}
              onPlacedPointerDown={onPlacedPointerDown}
              onResizePointerDown={onResizePointerDown}
              onRotatePointerDown={onRotatePointerDown}
              selectedIid={selected}
              onBgPointerDown={onBgPointerDown}
              hint={hint}
              bringFront={bringFront}
              sendBack={sendBack}
              deleteItem={deleteItem}
              setScale={setScale}
              resetRot={resetRot}
            />
          </div>
          <div className="mt-3 flex items-center justify-between" style={{ width: CANVAS_W }}>
            <div className="text-[10px] tracking-[0.3em] text-inkSoft uppercase">
              {CUPS[cupId].en} · 480 × 640
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={undo}
                disabled={!baseLayers.length && !decor.length}
                className="text-[10px] tracking-[0.3em] uppercase px-3 py-2 bg-milk border border-ink/25 hover:bg-ink hover:text-cream transition disabled:opacity-30 disabled:hover:bg-milk disabled:hover:text-ink"
              >↺ Undo</button>
              <button
                onClick={shuffleTilt}
                disabled={!decor.length}
                className="text-[10px] tracking-[0.3em] uppercase px-3 py-2 bg-milk border border-ink/25 hover:bg-ink hover:text-cream transition disabled:opacity-30 disabled:hover:bg-milk disabled:hover:text-ink"
              >↻ Tilt</button>
              <button
                onClick={clear}
                disabled={!baseLayers.length && !decor.length}
                className="text-[10px] tracking-[0.3em] uppercase px-3 py-2 text-inkSoft hover:text-ink transition disabled:opacity-30"
              >× Clear</button>
            </div>
          </div>
        </div>

        <section className="bg-cream pl-10 pr-2 py-2">
          <Picker onCardPointerDown={onCardPointerDown} count={baseLayers.length + decor.length} />
        </section>
      </main>

      <footer className="px-10 pb-7 flex items-center justify-between text-[11px] tracking-[0.3em] text-inkSoft uppercase">
        <div>© Parfait Studio &nbsp; / &nbsp; Hand-built sticker book</div>
        <div>v 0.4 · cups &amp; rotation</div>
      </footer>

      {/* Drag ghost */}
      {drag && drag.phase === "move" && dragIng && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: drag.x,
            top:  drag.y,
            transform: "translate(-50%, -50%) scale(1.1)",
            filter: "drop-shadow(0 12px 18px rgba(58,42,31,0.28))",
            opacity: 0.95,
          }}
        >
          <Sticker id={dragIng.id} size={ghostSize} rotation={drag.rot} scale={drag.scale}/>
        </div>
      )}
    </div>
  );
}

let _seq = 0;
function newIid() { _seq += 1; return `i${Date.now().toString(36)}-${_seq}`; }

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
