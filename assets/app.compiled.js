/* eslint-disable */
/* Sticker registry — each entry returns the inner SVG nodes.
   The wrapper <Sticker> applies a white outline (paint-order stroke fill)
   and a soft drop-shadow. ViewBox is always 100x100.
   This file also exports <BaseLayer> — a horizontal band renderer used
   when base-category ingredients are dropped inside the bowl. */

/* ------------ Shared scoop path (organic blob, flat bottom + 3 melt drips) ------------ */
const SCOOP_PATH = "M14 66 " + "C4 50 4 26 22 20 " + "C28 8 42 8 50 16 " + "C58 8 72 8 78 20 " + "C96 26 96 50 86 66 " + "Q90 74 82 72 " + "Q76 68 70 66 " + "L60 66 " + "Q54 76 48 72 " + "Q42 76 38 66 " + "L30 66 " + "Q24 76 18 72 " + "Q12 70 14 66 Z";
function ScoopBody({
  base,
  light,
  ridge,
  accents
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: SCOOP_PATH,
    fill: base
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "32",
    cy: "32",
    rx: "10",
    ry: "4.5",
    fill: "#FFFFFF",
    opacity: "0.55",
    stroke: "none",
    transform: "rotate(-28 32 32)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 24 Q34 16 42 22",
    stroke: light,
    strokeWidth: "2.2",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M54 22 Q62 14 70 22",
    stroke: light,
    strokeWidth: "2.2",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 70 Q26 74 30 70",
    stroke: ridge,
    strokeWidth: "1.4",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 70 Q50 76 56 70",
    stroke: ridge,
    strokeWidth: "1.4",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68 70 Q72 74 76 70",
    stroke: ridge,
    strokeWidth: "1.4",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.4"
  }), accents);
}
const S = {
  /* ---------------- BASE LAYERS (used by panel thumbnail + drag ghost) ---------------- */

  "coffee-jelly": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 36 Q14 30 22 30 H78 Q86 30 86 36 V72 Q86 78 78 78 H22 Q14 78 14 72 Z",
    fill: "#4A2C1E"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "32",
    ry: "3.6",
    fill: "#6B3F2A",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 50 Q26 46 30 52",
    stroke: "rgba(255,255,255,0.45)",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "68",
    cy: "64",
    rx: "3",
    ry: "2",
    fill: "#6B3F2A",
    opacity: "0.7",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "34",
    cy: "68",
    rx: "2",
    ry: "1.4",
    fill: "#2E1A11",
    opacity: "0.6",
    stroke: "none"
  })),
  "milk-jelly": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 36 Q14 30 22 30 H78 Q86 30 86 36 V72 Q86 78 78 78 H22 Q14 78 14 72 Z",
    fill: "#F7EAD0"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "32",
    ry: "3.6",
    fill: "#FFFCF1",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 50 Q28 46 34 52",
    stroke: "rgba(255,255,255,0.95)",
    strokeWidth: "2.4",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "68",
    cy: "64",
    rx: "3",
    ry: "2",
    fill: "#E7D3AE",
    opacity: "0.7",
    stroke: "none"
  })),
  "fruit-jelly": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 34 Q16 28 24 28 H76 Q84 28 84 34 V72 Q84 78 76 78 H24 Q16 78 16 72 Z",
    fill: "#F4A37E",
    opacity: "0.92"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "30.5",
    rx: "30",
    ry: "3.2",
    fill: "#FBC7AE",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "58",
    r: "3.5",
    fill: "#D86E55",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "50",
    r: "2.8",
    fill: "#D86E55",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "58",
    cy: "68",
    r: "2.4",
    fill: "#D86E55",
    stroke: "none"
  })),
  "sponge-cake": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 34 Q14 28 22 28 H78 Q86 28 86 34 V74 Q86 80 78 80 H22 Q14 80 14 74 Z",
    fill: "#F0CE7E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 38 H86",
    stroke: "#D6A95A",
    strokeWidth: "1.4",
    fill: "none",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "50",
    r: "2.4",
    fill: "#C99553",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "42",
    cy: "46",
    r: "1.6",
    fill: "#C99553",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "54",
    cy: "58",
    r: "2.8",
    fill: "#C99553",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "68",
    cy: "48",
    r: "2",
    fill: "#C99553",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "74",
    cy: "64",
    r: "1.6",
    fill: "#C99553",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "66",
    r: "2",
    fill: "#C99553",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "68",
    r: "1.6",
    fill: "#C99553",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "72",
    r: "1.4",
    fill: "#C99553",
    stroke: "none"
  })),
  "strawberry-mousse": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 38 Q20 26 30 38 T50 38 T70 38 T90 38 V78 Q90 82 86 82 H14 Q10 82 10 78 Z",
    fill: "#ECA3A3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 40 Q20 30 30 40 T50 40 T70 40 T90 40",
    stroke: "#D67D7D",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "58",
    r: "3",
    fill: "#D04F5A",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "56",
    cy: "66",
    r: "2.4",
    fill: "#D04F5A",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "54",
    r: "2",
    fill: "#D04F5A",
    stroke: "none"
  })),
  "matcha-mousse": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 38 Q20 26 30 38 T50 38 T70 38 T90 38 V78 Q90 82 86 82 H14 Q10 82 10 78 Z",
    fill: "#B6C383"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 40 Q20 30 30 40 T50 40 T70 40 T90 40",
    stroke: "#8FA15C",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "26",
    cy: "56",
    rx: "2",
    ry: "1.2",
    fill: "#6F8744",
    opacity: "0.7",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "64",
    cy: "62",
    rx: "2.4",
    ry: "1.4",
    fill: "#6F8744",
    opacity: "0.7",
    stroke: "none"
  })),
  "vanilla-mousse": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 38 Q20 26 30 38 T50 38 T70 38 T90 38 V78 Q90 82 86 82 H14 Q10 82 10 78 Z",
    fill: "#F2DEB4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 40 Q20 30 30 40 T50 40 T70 40 T90 40",
    stroke: "#D6BC85",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "58",
    r: "1.2",
    fill: "#7A5C32",
    opacity: "0.85",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "64",
    r: "1",
    fill: "#7A5C32",
    opacity: "0.85",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "68",
    cy: "58",
    r: "1.2",
    fill: "#7A5C32",
    opacity: "0.85",
    stroke: "none"
  })),
  "chocolate-mousse": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 38 Q20 26 30 38 T50 38 T70 38 T90 38 V78 Q90 82 86 82 H14 Q10 82 10 78 Z",
    fill: "#5C3A28"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 40 Q20 30 30 40 T50 40 T70 40 T90 40",
    stroke: "#3E2418",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 54 Q30 50 38 56",
    stroke: "#7C5238",
    strokeWidth: "1.6",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 64 Q68 60 76 66",
    stroke: "#7C5238",
    strokeWidth: "1.6",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.7"
  })),
  "whipped-cream": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 50 Q14 38 22 48 Q28 36 36 48 Q44 36 52 48 Q60 36 68 48 Q76 36 84 48 Q92 40 92 52 V78 Q92 82 88 82 H12 Q8 82 8 78 Z",
    fill: "#FFFCF6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 56 Q22 50 26 58",
    stroke: "#E8D9BC",
    strokeWidth: "1.4",
    fill: "none",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 60 Q46 54 50 62",
    stroke: "#E8D9BC",
    strokeWidth: "1.4",
    fill: "none",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M64 58 Q70 52 74 60",
    stroke: "#E8D9BC",
    strokeWidth: "1.4",
    fill: "none",
    opacity: "0.8"
  })),
  "mint-choco-cream": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 50 Q14 38 22 48 Q28 36 36 48 Q44 36 52 48 Q60 36 68 48 Q76 36 84 48 Q92 40 92 52 V78 Q92 82 88 82 H12 Q8 82 8 78 Z",
    fill: "#C6E3CE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 56 Q22 50 26 58",
    stroke: "#8DC0A0",
    strokeWidth: "1.4",
    fill: "none",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "28",
    y: "58",
    width: "4",
    height: "3",
    rx: "1",
    fill: "#4A2C1E",
    stroke: "none",
    transform: "rotate(20 30 60)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "48",
    y: "64",
    width: "5",
    height: "3.4",
    rx: "1",
    fill: "#4A2C1E",
    stroke: "none",
    transform: "rotate(-15 50 66)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "66",
    y: "56",
    width: "4",
    height: "3",
    rx: "1",
    fill: "#4A2C1E",
    stroke: "none",
    transform: "rotate(35 68 58)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "70",
    width: "3.4",
    height: "2.4",
    rx: "0.6",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "74",
    y: "68",
    width: "3.4",
    height: "2.4",
    rx: "0.6",
    fill: "#4A2C1E",
    stroke: "none",
    transform: "rotate(-25 76 70)"
  })),
  "granola": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "32",
    cy: "60",
    rx: "18",
    ry: "14",
    fill: "#C9A26F"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "60",
    cy: "56",
    rx: "20",
    ry: "15",
    fill: "#D6B281"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "74",
    cy: "68",
    rx: "14",
    ry: "11",
    fill: "#B98E5A"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "28",
    cy: "56",
    rx: "3",
    ry: "1.4",
    fill: "#F0D9B5",
    stroke: "none",
    transform: "rotate(-20 28 56)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "42",
    cy: "62",
    rx: "3",
    ry: "1.4",
    fill: "#F0D9B5",
    stroke: "none",
    transform: "rotate(15 42 62)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "58",
    cy: "52",
    rx: "3.4",
    ry: "1.6",
    fill: "#F0D9B5",
    stroke: "none",
    transform: "rotate(-10 58 52)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "68",
    cy: "60",
    rx: "3",
    ry: "1.4",
    fill: "#F0D9B5",
    stroke: "none",
    transform: "rotate(25 68 60)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "74",
    cy: "66",
    rx: "2.6",
    ry: "1.2",
    fill: "#F0D9B5",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "64",
    r: "1.6",
    fill: "#6B4A2A",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "68",
    r: "1.4",
    fill: "#6B4A2A",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "64",
    cy: "70",
    r: "1.2",
    fill: "#6B4A2A",
    stroke: "none"
  })),
  "cookie-crumbs": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "34",
    cy: "60",
    rx: "16",
    ry: "11",
    fill: "#B07A47"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "62",
    cy: "58",
    rx: "18",
    ry: "12",
    fill: "#C49056"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "70",
    rx: "14",
    ry: "8",
    fill: "#A26B3A"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "58",
    r: "2",
    fill: "#3E2418",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "64",
    r: "1.6",
    fill: "#3E2418",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "58",
    cy: "56",
    r: "2",
    fill: "#3E2418",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "62",
    r: "1.4",
    fill: "#3E2418",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "70",
    r: "1.2",
    fill: "#3E2418",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "64",
    cy: "70",
    r: "1.4",
    fill: "#3E2418",
    stroke: "none"
  })),
  "yogurt": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 42 Q24 34 38 42 T66 42 T90 42 V78 Q90 82 86 82 H14 Q10 82 10 78 Z",
    fill: "#FCF6E8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 44 Q24 36 38 44 T66 44 T90 44",
    stroke: "#E7D8B6",
    strokeWidth: "1.4",
    fill: "none",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "30",
    cy: "58",
    rx: "6",
    ry: "2",
    fill: "#FFFFFF",
    opacity: "0.7",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "64",
    cy: "66",
    rx: "5",
    ry: "1.6",
    fill: "#FFFFFF",
    opacity: "0.5",
    stroke: "none"
  })),
  /* ---------------- TOPPINGS ---------------- */

  "pudding": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 78 Q20 30 50 28 Q80 30 80 78 Z",
    fill: "#F2C476"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 46 Q22 30 50 28 Q78 30 78 46 Q78 52 50 52 Q22 52 22 46 Z",
    fill: "#8C5A2C"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 52 Q30 60 32 52 Z",
    fill: "#8C5A2C",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M68 52 Q72 64 74 52 Z",
    fill: "#8C5A2C",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "36",
    cy: "60",
    rx: "2.4",
    ry: "8",
    fill: "#FFFFFF",
    opacity: "0.55",
    stroke: "none"
  })),
  "strawberry": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M30 36 Q50 28 70 36 Q76 60 50 84 Q24 60 30 36 Z",
    fill: "#E14D54"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 32 L46 24 L50 32 L54 22 L58 32 L66 26 L62 38 Q50 34 38 38 Z",
    fill: "#74A35C"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "40",
    cy: "48",
    rx: "1.4",
    ry: "2",
    fill: "#F8D070",
    stroke: "none",
    transform: "rotate(-15 40 48)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "52",
    cy: "46",
    rx: "1.4",
    ry: "2",
    fill: "#F8D070",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "62",
    cy: "50",
    rx: "1.4",
    ry: "2",
    fill: "#F8D070",
    stroke: "none",
    transform: "rotate(15 62 50)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "44",
    cy: "60",
    rx: "1.4",
    ry: "2",
    fill: "#F8D070",
    stroke: "none",
    transform: "rotate(-10 44 60)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "56",
    cy: "62",
    rx: "1.4",
    ry: "2",
    fill: "#F8D070",
    stroke: "none",
    transform: "rotate(10 56 62)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "74",
    rx: "1.4",
    ry: "2",
    fill: "#F8D070",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 44 Q38 58 44 70",
    stroke: "#FFFFFF",
    strokeWidth: "2.4",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.5"
  })),
  "blueberry": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "54",
    r: "26",
    fill: "#5C5BA0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 40 L42 32 L46 40 L50 30 L54 40 L58 32 L64 40 Q50 44 36 40 Z",
    fill: "#3E3E78"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "40",
    r: "3",
    fill: "#5C5BA0",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "40",
    cy: "50",
    rx: "4",
    ry: "6",
    fill: "#8A89C7",
    opacity: "0.85",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "38",
    cy: "48",
    rx: "1.6",
    ry: "2.4",
    fill: "#FFFFFF",
    opacity: "0.8",
    stroke: "none"
  })),
  "starfruit": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M50 14 L58 42 L88 44 L64 60 L72 86 L50 70 L28 86 L36 60 L12 44 L42 42 Z",
    fill: "#F2D26B"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 30 L54 44 L48 48 L46 38 Z",
    fill: "#E0B946",
    opacity: "0.7",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "2",
    fill: "#E0B946",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 50 L60 50",
    stroke: "#E0B946",
    strokeWidth: "1.2",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 40 L50 62",
    stroke: "#E0B946",
    strokeWidth: "1.2",
    opacity: "0.6"
  })),
  "cherry": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M44 70 Q40 40 30 22",
    stroke: "#6B4A24",
    strokeWidth: "3",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 68 Q60 40 70 22",
    stroke: "#6B4A24",
    strokeWidth: "3",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 22 Q44 14 56 22 Q44 30 30 22 Z",
    fill: "#76A55E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 22 Q44 20 54 22",
    stroke: "#4F7A40",
    strokeWidth: "1",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "72",
    r: "14",
    fill: "#C8323C"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "70",
    r: "13",
    fill: "#D63D47"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "32",
    cy: "68",
    rx: "2.4",
    ry: "4",
    fill: "#FFFFFF",
    opacity: "0.7",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "56",
    cy: "66",
    rx: "2",
    ry: "3.4",
    fill: "#FFFFFF",
    opacity: "0.7",
    stroke: "none"
  })),
  "chocolate-bar": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M40 6 L60 6 L62 94 L38 94 Z",
    fill: "#E8C797"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 8 L60 8 L61 72 Q58 78, 55 72 Q51 78, 48 72 Q44 78, 41 72 Z",
    fill: "#5C3A28",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 14 L46 70",
    stroke: "#3E2418",
    strokeWidth: "1.3",
    opacity: "0.7",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56 12 L55 70",
    stroke: "#3E2418",
    strokeWidth: "1.3",
    opacity: "0.65",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "46",
    cy: "28",
    r: "0.9",
    fill: "#3E2418",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "54",
    cy: "40",
    r: "0.8",
    fill: "#3E2418",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "54",
    r: "0.7",
    fill: "#3E2418",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42 14 L43 68",
    stroke: "#FFFFFF",
    strokeWidth: "1.5",
    opacity: "0.5",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 82 L45 90 M50 80 L50 91 M55 82 L55 90",
    stroke: "#C9A26F",
    strokeWidth: "0.8",
    opacity: "0.6"
  })),
  "round-cookie": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "32",
    fill: "#C99659"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "40",
    r: "4",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "36",
    r: "3",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "64",
    cy: "56",
    r: "4.4",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "42",
    cy: "62",
    r: "3.6",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "54",
    cy: "50",
    r: "2.4",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "52",
    r: "1.6",
    fill: "#7A4A30",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "58",
    cy: "66",
    r: "1.6",
    fill: "#7A4A30",
    stroke: "none"
  })),
  "square-cookie": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M22 22 H78 Q82 22 82 26 V74 Q82 78 78 78 H22 Q18 78 18 74 V26 Q18 22 22 22 Z",
    fill: "#D2A267"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "36",
    cy: "36",
    r: "3.4",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "58",
    cy: "32",
    r: "2.6",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "66",
    cy: "52",
    r: "3.6",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "42",
    cy: "58",
    r: "3",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "44",
    r: "2.2",
    fill: "#4A2C1E",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "34",
    cy: "64",
    r: "1.8",
    fill: "#7A4A30",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "68",
    r: "2",
    fill: "#4A2C1E",
    stroke: "none"
  })),
  "vanilla-macaron": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 44 Q16 30 50 30 Q84 30 84 44 Q84 50 50 50 Q16 50 16 44 Z",
    fill: "#F4DEB8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 50 Q22 54 26 50 Q30 56 34 50 Q38 56 42 50 Q46 56 50 50 Q54 56 58 50 Q62 56 66 50 Q70 56 74 50 Q78 54 82 50 V58 H18 Z",
    fill: "#E7CC9A",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 58 H82 V64 Q82 66 80 66 H20 Q18 66 18 64 Z",
    fill: "#F8E7B8",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 66 H82 Q82 78 50 78 Q18 78 18 66 Z",
    fill: "#F4DEB8"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "36",
    cy: "38",
    rx: "6",
    ry: "2",
    fill: "#FFFFFF",
    opacity: "0.6",
    stroke: "none"
  })),
  "berry-macaron": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 44 Q16 30 50 30 Q84 30 84 44 Q84 50 50 50 Q16 50 16 44 Z",
    fill: "#E8A3B8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 50 Q22 54 26 50 Q30 56 34 50 Q38 56 42 50 Q46 56 50 50 Q54 56 58 50 Q62 56 66 50 Q70 56 74 50 Q78 54 82 50 V58 H18 Z",
    fill: "#D087A0",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 58 H82 V64 Q82 66 80 66 H20 Q18 66 18 64 Z",
    fill: "#B23E5A",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 66 H82 Q82 78 50 78 Q18 78 18 66 Z",
    fill: "#E8A3B8"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "36",
    cy: "38",
    rx: "6",
    ry: "2",
    fill: "#FFFFFF",
    opacity: "0.6",
    stroke: "none"
  })),
  "cream-swirl": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "80",
    rx: "26",
    ry: "6",
    fill: "#F2E2C5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 78 Q22 64 38 60 Q22 52 38 46 Q22 38 40 32 Q30 24 50 22 Q70 24 60 32 Q78 38 62 46 Q78 52 62 60 Q78 64 76 78 Z",
    fill: "#FFFCF6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 70 Q34 64 42 64",
    stroke: "#E5D2B0",
    strokeWidth: "1.4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 56 Q34 52 42 50",
    stroke: "#E5D2B0",
    strokeWidth: "1.4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34 40 Q38 36 46 34",
    stroke: "#E5D2B0",
    strokeWidth: "1.4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "20",
    r: "3",
    fill: "#FFFCF6"
  })),
  "mint-leaf": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 70 Q14 38 50 18 Q86 38 80 70 Q50 88 20 70 Z",
    fill: "#7BAA60"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 64 Q50 36 72 64",
    stroke: "#4F7A40",
    strokeWidth: "1.6",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 40 L50 76",
    stroke: "#4F7A40",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 50 L36 56 M50 58 L34 66 M50 50 L64 56 M50 58 L66 66",
    stroke: "#4F7A40",
    strokeWidth: "1",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 56 Q40 42 52 38",
    stroke: "#A8C98C",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    opacity: "0.7"
  })),
  "wafer-roll": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M36 8 L64 8 L66 92 L34 92 Z",
    fill: "#E8C786"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 20 Q50 16, 66 24",
    stroke: "#8C5A2C",
    strokeWidth: "1.6",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 32 Q50 28, 66 36",
    stroke: "#8C5A2C",
    strokeWidth: "1.6",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 44 Q50 40, 66 48",
    stroke: "#8C5A2C",
    strokeWidth: "1.6",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 56 Q50 52, 66 60",
    stroke: "#8C5A2C",
    strokeWidth: "1.6",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 68 Q50 64, 66 72",
    stroke: "#8C5A2C",
    strokeWidth: "1.6",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 80 Q50 76, 66 84",
    stroke: "#8C5A2C",
    strokeWidth: "1.6",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 26 Q50 22, 66 30",
    stroke: "#D2A472",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 38 Q50 34, 66 42",
    stroke: "#D2A472",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 50 Q50 46, 66 54",
    stroke: "#D2A472",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 62 Q50 58, 66 66",
    stroke: "#D2A472",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 74 Q50 70, 66 78",
    stroke: "#D2A472",
    strokeWidth: "1",
    fill: "none",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "10",
    rx: "14",
    ry: "4",
    fill: "#D2A472",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 10 Q50 6, 62 10",
    stroke: "#8C5A2C",
    strokeWidth: "1.4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42 10 Q50 8, 58 10",
    stroke: "#8C5A2C",
    strokeWidth: "1.1",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "10",
    r: "1.4",
    fill: "#5C3A28",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "92",
    rx: "14",
    ry: "4",
    fill: "#D2A472",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 16 L42 86",
    stroke: "#FFFFFF",
    strokeWidth: "2",
    opacity: "0.5",
    fill: "none",
    strokeLinecap: "round"
  })),
  "almond-slice": () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M50 14 Q72 24 76 50 Q72 76 50 86 Q28 76 24 50 Q28 24 50 14 Z",
    fill: "#E8D2A8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 18 Q70 28 74 50 Q70 72 50 82",
    stroke: "#D6B98A",
    strokeWidth: "1.4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 14 L50 86",
    stroke: "#C9A876",
    strokeWidth: "1",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "40",
    cy: "40",
    rx: "2.4",
    ry: "6",
    fill: "#FFFFFF",
    opacity: "0.55",
    stroke: "none",
    transform: "rotate(-20 40 40)"
  })),
  /* ---------------- ICE-CREAM SCOOPS (organic, flat bottom, melt drips) ---------------- */

  "scoop-vanilla": () => /*#__PURE__*/React.createElement(ScoopBody, {
    base: "#F4E6C4",
    light: "#FFF6D9",
    ridge: "#C99553",
    accents: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "46",
      r: "0.9",
      fill: "#5C3A28",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58",
      cy: "52",
      r: "0.8",
      fill: "#5C3A28",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38",
      cy: "54",
      r: "0.7",
      fill: "#5C3A28",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "62",
      cy: "42",
      r: "0.7",
      fill: "#5C3A28",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "40",
      r: "0.6",
      fill: "#5C3A28",
      stroke: "none"
    }))
  }),
  "scoop-chocolate": () => /*#__PURE__*/React.createElement(ScoopBody, {
    base: "#6B4226",
    light: "#8C5A37",
    ridge: "#3E2418",
    accents: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "50",
      r: "1.6",
      fill: "#3E2418",
      stroke: "none",
      opacity: "0.85"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58",
      cy: "46",
      r: "1.2",
      fill: "#3E2418",
      stroke: "none",
      opacity: "0.85"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "64",
      cy: "56",
      r: "1.4",
      fill: "#3E2418",
      stroke: "none",
      opacity: "0.85"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "44",
      r: "1",
      fill: "#3E2418",
      stroke: "none",
      opacity: "0.7"
    }))
  }),
  "scoop-matcha": () => /*#__PURE__*/React.createElement(ScoopBody, {
    base: "#A8B47C",
    light: "#C3CE96",
    ridge: "#5C7440",
    accents: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "46",
      cy: "50",
      r: "0.9",
      fill: "#5C7440",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58",
      cy: "44",
      r: "0.8",
      fill: "#5C7440",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38",
      cy: "44",
      r: "0.7",
      fill: "#5C7440",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "54",
      cy: "56",
      r: "0.8",
      fill: "#5C7440",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "64",
      cy: "50",
      r: "0.7",
      fill: "#5C7440",
      stroke: "none"
    }))
  }),
  "scoop-strawberry": () => /*#__PURE__*/React.createElement(ScoopBody, {
    base: "#ECA3A3",
    light: "#F4BFBF",
    ridge: "#C84852",
    accents: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "50",
      r: "2",
      fill: "#C84852",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60",
      cy: "46",
      r: "1.6",
      fill: "#C84852",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52",
      cy: "56",
      r: "1.4",
      fill: "#C84852",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38",
      cy: "40",
      r: "1",
      fill: "#C84852",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "44",
      cy: "50",
      rx: "0.4",
      ry: "0.6",
      fill: "#FFE9B0",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "60",
      cy: "46",
      rx: "0.4",
      ry: "0.6",
      fill: "#FFE9B0",
      stroke: "none"
    }))
  }),
  "scoop-mint-choco": () => /*#__PURE__*/React.createElement(ScoopBody, {
    base: "#B8DDC4",
    light: "#D4EAD8",
    ridge: "#5A8A6E",
    accents: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "40",
      y: "46",
      width: "6",
      height: "3.2",
      rx: "1",
      fill: "#4A2C1E",
      stroke: "none",
      transform: "rotate(20 43 48)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "58",
      y: "52",
      width: "5",
      height: "3",
      rx: "1",
      fill: "#4A2C1E",
      stroke: "none",
      transform: "rotate(-15 60 53)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "62",
      y: "40",
      width: "4",
      height: "2.6",
      rx: "0.8",
      fill: "#4A2C1E",
      stroke: "none",
      transform: "rotate(40 64 42)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "36",
      y: "56",
      width: "4",
      height: "2.6",
      rx: "0.8",
      fill: "#4A2C1E",
      stroke: "none",
      transform: "rotate(-10 38 58)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "48",
      y: "40",
      width: "3.4",
      height: "2.2",
      rx: "0.6",
      fill: "#4A2C1E",
      stroke: "none"
    }))
  })
};

/* ---------- Common sticker wrapper ---------- */
function Sticker({
  id,
  size = 72,
  rotation = 0,
  scale = 1
}) {
  const Render = S[id];
  if (!Render) return null;
  const sz = size * scale;
  return /*#__PURE__*/React.createElement("div", {
    className: "sticker",
    style: {
      width: sz,
      height: sz,
      transform: `rotate(${rotation}deg)`
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: sz,
    height: sz
  }, /*#__PURE__*/React.createElement("g", {
    paintOrder: "stroke fill",
    stroke: "#FFFDF7",
    strokeWidth: "4",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement(Render, null))));
}

/* ---------- BaseLayer — horizontal band rendered inside the bowl ---------- */
function BaseLayer({
  ing,
  w,
  h
}) {
  const W = w,
    H = h;
  const recipes = {
    "coffee-jelly": {
      kind: "shine",
      main: "#4A2C1E",
      shine: "#6B3F2A",
      accent: "#2E1A11"
    },
    "milk-jelly": {
      kind: "shine",
      main: "#F4E6CC",
      shine: "#FFF7E2",
      accent: "#E7D3AE"
    },
    "fruit-jelly": {
      kind: "shine",
      main: "#F2A480",
      shine: "#FBC6AC",
      accent: "#D86E55"
    },
    "sponge-cake": {
      kind: "dotted",
      main: "#F0CE7E",
      accent: "#C99553"
    },
    "strawberry-mousse": {
      kind: "wavy",
      main: "#ECA3A3",
      accent: "#D04F5A",
      stroke: "#D67D7D"
    },
    "matcha-mousse": {
      kind: "wavy",
      main: "#B6C383",
      accent: "#6F8744",
      stroke: "#8FA15C"
    },
    "vanilla-mousse": {
      kind: "wavy",
      main: "#F2DEB4",
      accent: "#7A5C32",
      stroke: "#D6BC85"
    },
    "chocolate-mousse": {
      kind: "wavy",
      main: "#5C3A28",
      accent: "#3E2418",
      stroke: "#3E2418"
    },
    "whipped-cream": {
      kind: "piped",
      main: "#FFFCF6",
      accent: "#E8D9BC"
    },
    "mint-choco-cream": {
      kind: "piped",
      main: "#C6E3CE",
      chip: "#4A2C1E"
    },
    "yogurt": {
      kind: "wavy",
      main: "#FCF6E8",
      accent: "#E7D8B6",
      stroke: "#E7D8B6",
      flat: true
    },
    "granola": {
      kind: "crumb",
      main: "#C9A26F",
      accent: "#8C5A2C",
      flake: "#F0D9B5"
    },
    "cookie-crumbs": {
      kind: "crumb",
      main: "#B07A47",
      accent: "#3E2418",
      flake: "#D4A47A"
    }
  };
  const r = recipes[ing.id] || {
    kind: "shine",
    main: "#DDD",
    shine: "#EEE"
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: W,
    height: H,
    preserveAspectRatio: "none",
    style: {
      display: "block",
      overflow: "visible"
    }
  }, r.kind === "shine" && /*#__PURE__*/React.createElement(ShineLayer, {
    W: W,
    H: H,
    r: r
  }), r.kind === "dotted" && /*#__PURE__*/React.createElement(DottedLayer, {
    W: W,
    H: H,
    r: r
  }), r.kind === "wavy" && /*#__PURE__*/React.createElement(WavyLayer, {
    W: W,
    H: H,
    r: r
  }), r.kind === "piped" && /*#__PURE__*/React.createElement(PipedLayer, {
    W: W,
    H: H,
    r: r
  }), r.kind === "crumb" && /*#__PURE__*/React.createElement(CrumbLayer, {
    W: W,
    H: H,
    r: r
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: H - 0.5,
    x2: W,
    y2: H - 0.5,
    stroke: "rgba(58,42,31,0.18)",
    strokeWidth: "1"
  }));
}
function ShineLayer({
  W,
  H,
  r
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: W,
    height: H,
    fill: r.main
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: W,
    height: H * 0.18,
    fill: r.shine,
    opacity: "0.85"
  }), r.accent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: W * 0.18,
    cy: H * 0.55,
    r: H * 0.10,
    fill: r.accent,
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: W * 0.42,
    cy: H * 0.72,
    r: H * 0.07,
    fill: r.accent,
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: W * 0.66,
    cy: H * 0.50,
    r: H * 0.09,
    fill: r.accent,
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: W * 0.86,
    cy: H * 0.68,
    r: H * 0.06,
    fill: r.accent,
    opacity: "0.5"
  })));
}
function DottedLayer({
  W,
  H,
  r
}) {
  const pts = [];
  for (let i = 0; i < Math.max(6, Math.round(W / 22)); i++) {
    pts.push({
      x: (i + 0.5) * (W / Math.max(6, Math.round(W / 22))) + i * 7 % 11 - 5,
      y: H * (0.3 + i * 13 % 50 / 100),
      r: 0.9 + i * 5 % 7 / 6
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: W,
    height: H,
    fill: r.main
  }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: p.x,
    cy: p.y,
    r: p.r,
    fill: r.accent,
    opacity: "0.85"
  })));
}
function WavyLayer({
  W,
  H,
  r
}) {
  // wavy top, flat or wavy bottom is just baseline (svg clipped)
  const baseY = H * 0.32;
  const humps = Math.max(3, Math.round(W / 38));
  let d = `M 0 ${baseY}`;
  for (let i = 0; i < humps; i++) {
    const x2 = W / humps * (i + 1);
    const cx = W / humps * (i + 0.5);
    d += ` Q ${cx} ${-2}, ${x2} ${baseY}`;
  }
  d += ` L ${W} ${H} L 0 ${H} Z`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: r.main
  }), /*#__PURE__*/React.createElement("path", {
    d: `M 0 ${baseY + 1.2} ${Array.from({
      length: humps
    }).map((_, i) => {
      const x2 = W / humps * (i + 1);
      const cx = W / humps * (i + 0.5);
      return `Q ${cx} ${-2 + 1.2}, ${x2} ${baseY + 1.2}`;
    }).join(" ")}`,
    stroke: r.stroke,
    strokeWidth: "1.4",
    fill: "none",
    opacity: "0.75"
  }), r.accent && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: W * 0.16,
    cy: H * 0.7,
    r: Math.min(2.6, H * 0.10),
    fill: r.accent,
    opacity: "0.75"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: W * 0.40,
    cy: H * 0.82,
    r: Math.min(2.0, H * 0.08),
    fill: r.accent,
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: W * 0.62,
    cy: H * 0.68,
    r: Math.min(2.4, H * 0.10),
    fill: r.accent,
    opacity: "0.75"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: W * 0.85,
    cy: H * 0.80,
    r: Math.min(1.8, H * 0.07),
    fill: r.accent,
    opacity: "0.7"
  })));
}
function PipedLayer({
  W,
  H,
  r
}) {
  // cloud-shaped top (multiple overlapping semicircles), flat below
  const puffs = Math.max(5, Math.round(W / 26));
  const baseY = H * 0.45;
  const puffR = W / puffs * 0.62;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: baseY,
    width: W,
    height: H - baseY,
    fill: r.main
  }), Array.from({
    length: puffs
  }).map((_, i) => {
    const cx = W / puffs * (i + 0.5);
    const cy = baseY - (i % 2 === 0 ? puffR * 0.55 : puffR * 0.3);
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: puffR,
      fill: r.main
    });
  }), Array.from({
    length: puffs
  }).map((_, i) => {
    const cx = W / puffs * (i + 0.5);
    const cy = baseY - (i % 2 === 0 ? puffR * 0.55 : puffR * 0.3);
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M ${cx - puffR * 0.4} ${cy + puffR * 0.1} Q ${cx - puffR * 0.1} ${cy - puffR * 0.4} ${cx + puffR * 0.3} ${cy - puffR * 0.2}`,
      stroke: "rgba(255,255,255,0.6)",
      strokeWidth: "1.2",
      fill: "none",
      strokeLinecap: "round"
    });
  }), r.chip && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: W * 0.18,
    y: H * 0.65,
    width: "6",
    height: "3",
    rx: "1",
    fill: r.chip,
    transform: `rotate(20 ${W * 0.18 + 3} ${H * 0.65 + 1.5})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: W * 0.42,
    y: H * 0.78,
    width: "5",
    height: "2.6",
    rx: "0.8",
    fill: r.chip,
    transform: `rotate(-12 ${W * 0.42 + 2.5} ${H * 0.78 + 1.3})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: W * 0.66,
    y: H * 0.68,
    width: "5",
    height: "3",
    rx: "0.8",
    fill: r.chip,
    transform: `rotate(35 ${W * 0.66 + 2.5} ${H * 0.68 + 1.5})`
  }), /*#__PURE__*/React.createElement("rect", {
    x: W * 0.85,
    y: H * 0.76,
    width: "4",
    height: "2.6",
    rx: "0.6",
    fill: r.chip,
    transform: `rotate(-25 ${W * 0.85 + 2} ${H * 0.76 + 1.3})`
  })));
}
function CrumbLayer({
  W,
  H,
  r
}) {
  const chunks = Math.max(8, Math.round(W / 14));
  const items = Array.from({
    length: chunks
  }).map((_, i) => ({
    cx: (i + 0.4) * (W / chunks) + i * 7 % 11 - 5,
    cy: H * (0.3 + i * 19 % 60 / 100),
    rx: 2.2 + i * 5 % 9 / 4,
    ry: 1.4 + i * 11 % 7 / 5,
    rot: i * 23 % 60 - 30,
    shade: i % 3 === 0 ? r.accent : i % 3 === 1 ? r.main : r.flake
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: W,
    height: H,
    fill: r.main
  }), items.map((p, i) => /*#__PURE__*/React.createElement("ellipse", {
    key: i,
    cx: p.cx,
    cy: p.cy,
    rx: p.rx,
    ry: p.ry,
    fill: p.shade,
    transform: `rotate(${p.rot} ${p.cx} ${p.cy})`,
    opacity: i % 4 === 0 ? 0.7 : 0.9
  })));
}

/* ---------- Catalog ---------- */
const INGREDIENTS = [
// BASE
{
  id: "coffee-jelly",
  cat: "base",
  jp: "コーヒーゼリー",
  zh: "咖啡冻",
  size: 86
}, {
  id: "milk-jelly",
  cat: "base",
  jp: "ミルクゼリー",
  zh: "奶冻",
  size: 86
}, {
  id: "fruit-jelly",
  cat: "base",
  jp: "フルーツゼリー",
  zh: "果冻",
  size: 86
}, {
  id: "sponge-cake",
  cat: "base",
  jp: "スポンジ",
  zh: "海绵蛋糕",
  size: 86
}, {
  id: "strawberry-mousse",
  cat: "base",
  jp: "苺ムース",
  zh: "草莓慕斯",
  size: 88
}, {
  id: "matcha-mousse",
  cat: "base",
  jp: "抹茶ムース",
  zh: "抹茶慕斯",
  size: 88
}, {
  id: "vanilla-mousse",
  cat: "base",
  jp: "バニラムース",
  zh: "香草慕斯",
  size: 88
}, {
  id: "chocolate-mousse",
  cat: "base",
  jp: "ショコラムース",
  zh: "巧克力慕斯",
  size: 88
}, {
  id: "whipped-cream",
  cat: "base",
  jp: "ホイップ",
  zh: "鲜奶油",
  size: 90
}, {
  id: "mint-choco-cream",
  cat: "base",
  jp: "ミントチョコ",
  zh: "薄荷巧克力奶油",
  size: 90
}, {
  id: "granola",
  cat: "base",
  jp: "グラノラ",
  zh: "燕麦脆",
  size: 80
}, {
  id: "cookie-crumbs",
  cat: "base",
  jp: "クッキー粒",
  zh: "饼干粒",
  size: 80
}, {
  id: "yogurt",
  cat: "base",
  jp: "ヨーグルト",
  zh: "酸奶",
  size: 88
},
// TOPPINGS
{
  id: "pudding",
  cat: "top",
  jp: "プリン",
  zh: "布丁",
  size: 80
}, {
  id: "strawberry",
  cat: "top",
  jp: "苺",
  zh: "草莓",
  size: 70
}, {
  id: "blueberry",
  cat: "top",
  jp: "ブルーベリー",
  zh: "蓝莓",
  size: 54
}, {
  id: "starfruit",
  cat: "top",
  jp: "スターフルーツ",
  zh: "杨桃",
  size: 74
}, {
  id: "cherry",
  cat: "top",
  jp: "さくらんぼ",
  zh: "樱桃",
  size: 76
}, {
  id: "chocolate-bar",
  cat: "top",
  jp: "ショコラ棒",
  zh: "巧克力棒",
  size: 74
}, {
  id: "round-cookie",
  cat: "top",
  jp: "丸クッキー",
  zh: "圆形小饼干",
  size: 70
}, {
  id: "square-cookie",
  cat: "top",
  jp: "角クッキー",
  zh: "方形小饼干",
  size: 70
}, {
  id: "vanilla-macaron",
  cat: "top",
  jp: "バニラマカロン",
  zh: "香草马卡龙",
  size: 78
}, {
  id: "berry-macaron",
  cat: "top",
  jp: "ベリーマカロン",
  zh: "莓果马卡龙",
  size: 78
}, {
  id: "cream-swirl",
  cat: "top",
  jp: "ホイップ山",
  zh: "鲜奶油堆",
  size: 80
}, {
  id: "mint-leaf",
  cat: "top",
  jp: "ミントの葉",
  zh: "薄荷叶",
  size: 60
}, {
  id: "wafer-roll",
  cat: "top",
  jp: "ウエハース",
  zh: "威化卷",
  size: 78
}, {
  id: "almond-slice",
  cat: "top",
  jp: "アーモンド片",
  zh: "杏仁片",
  size: 56
},
// ICE-CREAM SCOOPS
{
  id: "scoop-vanilla",
  cat: "ice",
  jp: "バニラ",
  zh: "香草冰激凌",
  size: 88
}, {
  id: "scoop-chocolate",
  cat: "ice",
  jp: "ショコラ",
  zh: "巧克力冰激凌",
  size: 88
}, {
  id: "scoop-matcha",
  cat: "ice",
  jp: "抹茶",
  zh: "抹茶冰激凌",
  size: 88
}, {
  id: "scoop-strawberry",
  cat: "ice",
  jp: "苺",
  zh: "草莓冰激凌",
  size: 88
}, {
  id: "scoop-mint-choco",
  cat: "ice",
  jp: "ミントチョコ",
  zh: "薄荷巧克力冰激凌",
  size: 88
}];
const findIng = id => INGREDIENTS.find(i => i.id === id);
Object.assign(window, {
  Sticker,
  BaseLayer,
  INGREDIENTS,
  findIng
});
;
/* eslint-disable */
/* Cup geometry & rendering.

   All cups draw inside a 480×640 viewBox (the design canvas size).
   The bowl interior is a function of vertical progress t = (y - bowlTop) / (bowlBottom - bowlTop).

   Quadratic and cubic Beziers used for the bowl outlines have their y control
   points placed at the midpoint (quadratic) or at 1/3 + 2/3 of the bowl height
   (cubic). With those constraints, y(t) is exactly linear in t — so the
   horizontal half-width function we use for the base-layer bands stays in
   lockstep with the SVG outline. */

const qbez = (a, b, c, t) => {
  const u = 1 - t;
  return u * u * a + 2 * u * t * b + t * t * c;
};
const cbez = (a, b, c, d, t) => {
  const u = 1 - t;
  return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
};
const CUP_CX = 240;
const CUPS = {
  coupe: {
    id: "coupe",
    en: "Coupe",
    jp: "クープ",
    zh: "碟形香槟杯",
    bowlTop: 360,
    bowlBottom: 460,
    halfWidthAt: t => qbez(132, 100, 30, t),
    draw: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M108 360 Q 140 410, 210 460 L 270 460 Q 340 410, 372 360 Z",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M116 366 Q 144 410, 212 454 L 268 454 Q 336 410, 364 366 Z",
      fill: "none",
      stroke: "rgba(255,255,255,0.55)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "360",
      rx: "132",
      ry: "9",
      fill: "rgba(255,255,255,0.18)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "358",
      rx: "122",
      ry: "4",
      fill: "rgba(255,255,255,0.55)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "236",
      y: "460",
      width: "8",
      height: "120",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "588",
      rx: "68",
      ry: "10",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "586",
      rx: "60",
      ry: "4",
      fill: "rgba(255,255,255,0.6)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "606",
      rx: "80",
      ry: "5",
      fill: "rgba(58,42,31,0.14)"
    })),
    icon: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M108 360 Q 140 410, 210 460 L 270 460 Q 340 410, 372 360 Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "240",
      y1: "460",
      x2: "240",
      y2: "580"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "172",
      y1: "588",
      x2: "308",
      y2: "588"
    }))
  },
  snifter: {
    id: "snifter",
    en: "Snifter",
    jp: "スニフター",
    zh: "白兰地杯",
    bowlTop: 300,
    bowlBottom: 540,
    halfWidthAt: t => cbez(50, 130, 130, 50, t),
    draw: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M190 300 C 110 380, 110 460, 190 540 L 290 540 C 370 460, 370 380, 290 300 Z",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M196 306 C 120 384, 120 456, 196 534 L 284 534 C 360 456, 360 384, 284 306 Z",
      fill: "none",
      stroke: "rgba(255,255,255,0.55)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "300",
      rx: "50",
      ry: "6",
      fill: "rgba(255,255,255,0.2)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "298",
      rx: "44",
      ry: "3",
      fill: "rgba(255,255,255,0.55)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "222",
      y: "540",
      width: "36",
      height: "40",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "588",
      rx: "62",
      ry: "9",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "586",
      rx: "54",
      ry: "4",
      fill: "rgba(255,255,255,0.6)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "606",
      rx: "74",
      ry: "5",
      fill: "rgba(58,42,31,0.14)"
    })),
    icon: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M190 300 C 110 380, 110 460, 190 540 L 290 540 C 370 460, 370 380, 290 300 Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "240",
      y1: "540",
      x2: "240",
      y2: "580"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "180",
      y1: "588",
      x2: "300",
      y2: "588"
    }))
  },
  wine: {
    id: "wine",
    en: "Wine",
    jp: "ワイン",
    zh: "葡萄酒杯",
    bowlTop: 270,
    bowlBottom: 500,
    halfWidthAt: t => qbez(86, 114, 70, t),
    draw: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M154 270 Q 126 385, 170 500 L 310 500 Q 354 385, 326 270 Z",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M160 276 Q 132 384, 174 494 L 306 494 Q 348 384, 320 276 Z",
      fill: "none",
      stroke: "rgba(255,255,255,0.55)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "270",
      rx: "86",
      ry: "8",
      fill: "rgba(255,255,255,0.2)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "268",
      rx: "80",
      ry: "4",
      fill: "rgba(255,255,255,0.55)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "236",
      y: "500",
      width: "8",
      height: "90",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "598",
      rx: "64",
      ry: "9",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "596",
      rx: "56",
      ry: "4",
      fill: "rgba(255,255,255,0.6)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "614",
      rx: "76",
      ry: "5",
      fill: "rgba(58,42,31,0.14)"
    })),
    icon: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M154 270 Q 126 385, 170 500 L 310 500 Q 354 385, 326 270 Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "240",
      y1: "500",
      x2: "240",
      y2: "598"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "176",
      y1: "598",
      x2: "304",
      y2: "598"
    }))
  },
  highball: {
    id: "highball",
    en: "Highball",
    jp: "ハイボール",
    zh: "海波杯",
    bowlTop: 230,
    bowlBottom: 600,
    halfWidthAt: t => 84,
    draw: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M156 230 L156 600 L324 600 L324 230 Z",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M162 236 L162 594 L318 594 L318 236 Z",
      fill: "none",
      stroke: "rgba(255,255,255,0.55)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "230",
      rx: "84",
      ry: "8",
      fill: "rgba(255,255,255,0.2)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "228",
      rx: "76",
      ry: "4",
      fill: "rgba(255,255,255,0.55)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "600",
      rx: "84",
      ry: "6",
      fill: "rgba(58,42,31,0.10)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "616",
      rx: "96",
      ry: "6",
      fill: "rgba(58,42,31,0.14)"
    })),
    icon: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M156 230 L156 600 L324 600 L324 230 Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "156",
      y1: "230",
      x2: "324",
      y2: "230"
    }))
  },
  hurricane: {
    id: "hurricane",
    en: "Hurricane",
    jp: "ハリケーン",
    zh: "飓风杯",
    bowlTop: 250,
    bowlBottom: 580,
    halfWidthAt: t => cbez(92, 35, 144, 84, t),
    draw: () => /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M148 250 C 205 360, 96 470, 156 580 L 324 580 C 384 470, 275 360, 332 250 Z",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M154 256 C 198 360, 102 470, 162 574 L 318 574 C 378 470, 282 360, 326 256 Z",
      fill: "none",
      stroke: "rgba(255,255,255,0.55)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "250",
      rx: "92",
      ry: "8",
      fill: "rgba(255,255,255,0.2)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "248",
      rx: "84",
      ry: "4",
      fill: "rgba(255,255,255,0.55)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "222",
      y: "580",
      width: "36",
      height: "28",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.45)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "614",
      rx: "68",
      ry: "9",
      fill: "url(#cup-body)",
      stroke: "rgba(58,42,31,0.5)",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "612",
      rx: "60",
      ry: "4",
      fill: "rgba(255,255,255,0.6)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "240",
      cy: "630",
      rx: "80",
      ry: "5",
      fill: "rgba(58,42,31,0.14)"
    })),
    icon: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M148 250 C 205 360, 96 470, 156 580 L 324 580 C 384 470, 275 360, 332 250 Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "240",
      y1: "580",
      x2: "240",
      y2: "612"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "176",
      y1: "612",
      x2: "304",
      y2: "612"
    }))
  }
};

/* Full-resolution rendering (with gradients) */
function CupGlass({
  cupId
}) {
  const cup = CUPS[cupId];
  if (!cup) return null;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 640",
    width: 480,
    height: 640,
    className: "block pointer-events-none select-none",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "cup-body",
    x1: "0",
    x2: "1",
    y1: "0",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "rgba(255,255,255,0.55)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.18",
    stopColor: "rgba(255,255,255,0.15)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.55",
    stopColor: "rgba(255,255,255,0.05)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.88",
    stopColor: "rgba(255,255,255,0.18)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "rgba(255,255,255,0.45)"
  }))), cup.draw());
}

/* Tiny outline-only version for tab selectors */
function CupIcon({
  cupId,
  size = 30
}) {
  const cup = CUPS[cupId];
  if (!cup) return null;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 640",
    width: size,
    height: size * 640 / 480,
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "12",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }, cup.icon()));
}
Object.assign(window, {
  CUPS,
  CupGlass,
  CupIcon,
  CUP_CX
});
;
/* eslint-disable */
const {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback
} = React;
const CATS = [{
  id: "base",
  jp: "杯内・ベース",
  zh: "杯内 / 基底"
}, {
  id: "top",
  jp: "飾り・トッピング",
  zh: "顶部 / 装饰"
}, {
  id: "ice",
  jp: "アイス",
  zh: "冰激凌球"
}];

/* Fixed design canvas dimensions */
const CANVAS_W = 480;
const CANVAS_H = 640;
const LAYER_H = 34;

/* Bowl bounds helpers — derived from the active cup */
const bowlBounds = cup => ({
  top: cup.bowlTop,
  bottom: cup.bowlBottom,
  halfAt: y => cup.halfWidthAt(Math.max(0, Math.min(1, (y - cup.bowlTop) / (cup.bowlBottom - cup.bowlTop)))),
  inside: (x, y) => {
    if (y < cup.bowlTop || y > cup.bowlBottom) return false;
    const hw = cup.halfWidthAt((y - cup.bowlTop) / (cup.bowlBottom - cup.bowlTop));
    return Math.abs(x - CUP_CX) <= hw;
  },
  clampY: y => Math.max(cup.bowlTop + LAYER_H / 2, Math.min(cup.bowlBottom - LAYER_H / 2, y))
});

/* ------------------------------------------------------------- */
/* Cup selector tabs                                              */
/* ------------------------------------------------------------- */
function CupSelector({
  cupId,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.4em] text-inkSoft uppercase"
  }, "Step 00 \u2014 \u30B0\u30E9\u30B9\u3092\u9078\u3076"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-inkSoft tracking-[0.2em]"
  }, "\u73FE\u5728 \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "text-ink font-mincho"
  }, CUPS[cupId].zh), " \xA0/\xA0 ", CUPS[cupId].en)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-5 gap-1 bg-milk border border-ink/15 p-1"
  }, Object.values(CUPS).map(cup => {
    const on = cup.id === cupId;
    return /*#__PURE__*/React.createElement("button", {
      key: cup.id,
      onClick: () => onChange(cup.id),
      title: cup.zh,
      className: "flex flex-col items-center gap-1 px-2 py-2 transition " + (on ? "bg-ink text-cream" : "text-inkSoft hover:bg-paper hover:text-ink")
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-12 flex items-end justify-center"
    }, /*#__PURE__*/React.createElement(CupIcon, {
      cupId: cup.id,
      size: 32
    })), /*#__PURE__*/React.createElement("div", {
      className: "font-mincho text-[10px] leading-none"
    }, cup.jp), /*#__PURE__*/React.createElement("div", {
      className: "text-[8px] tracking-[0.25em] uppercase opacity-70 leading-none"
    }, cup.en));
  })));
}

/* ------------------------------------------------------------- */
/* Stage                                                          */
/* ------------------------------------------------------------- */
function Stage({
  cupId,
  baseLayers,
  decor,
  stageRef,
  onPlacedPointerDown,
  onResizePointerDown,
  onRotatePointerDown,
  selectedIid,
  onBgPointerDown,
  hint,
  bringFront,
  sendBack,
  deleteItem,
  setScale,
  resetRot
}) {
  const cup = CUPS[cupId];
  const selected = decor.find(d => d.iid === selectedIid);
  const sortedBase = [...baseLayers].sort((a, b) => a.y - b.y);
  return /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    className: "relative grain",
    style: {
      width: CANVAS_W,
      height: CANVAS_H,
      overflow: "hidden"
    },
    onPointerDown: onBgPointerDown
  }, /*#__PURE__*/React.createElement(CornerMarks, null), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-6 left-8 right-8 flex items-start justify-between z-10 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-mincho text-[10px] tracking-[0.4em] text-inkSoft"
  }, "N\xB0 01 \xB7 STUDIO"), /*#__PURE__*/React.createElement("div", {
    className: "font-mincho text-2xl mt-2 leading-none"
  }, "\u3042\u306A\u305F\u306E\u4E00\u676F"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] text-inkSoft mt-1 uppercase"
  }, "Your Parfait")), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] text-inkSoft uppercase"
  }, "Items"), /*#__PURE__*/React.createElement("div", {
    className: "font-mincho text-3xl leading-none mt-1"
  }, String(baseLayers.length + decor.length).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-inkSoft mt-1"
  }, baseLayers.length, " base \xB7 ", decor.length, " decor"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute left-2 top-1/2 -translate-y-1/2 vertical-jp font-mincho text-[10px] text-inkSoft pointer-events-none"
  }, cup.jp, " ", /*#__PURE__*/React.createElement("span", {
    className: "opacity-70"
  }, "\u306E \u30B0\u30E9\u30B9")), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none"
  }, /*#__PURE__*/React.createElement(CupGlass, {
    cupId: cupId
  })), sortedBase.map(p => {
    const ing = findIng(p.ingId);
    if (!ing) return null;
    const range = cup.bowlBottom - cup.bowlTop;
    const tTop = Math.max(0, Math.min(1, (p.y - LAYER_H / 2 - cup.bowlTop) / range));
    const tBot = Math.max(0, Math.min(1, (p.y + LAYER_H / 2 - cup.bowlTop) / range));
    const topHW = cup.halfWidthAt(tTop);
    const botHW = cup.halfWidthAt(tBot);
    const maxHW = Math.max(topHW, botHW);
    const W = maxHW * 2;
    const left = CUP_CX - maxHW;
    const top = p.y - LAYER_H / 2;
    // trapezoid corners as percentages of W
    const tlx = (maxHW - topHW) / W * 100;
    const trx = (maxHW + topHW) / W * 100;
    const blx = (maxHW - botHW) / W * 100;
    const brx = (maxHW + botHW) / W * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: p.iid,
      className: "absolute placed",
      style: {
        left,
        top,
        width: W,
        height: LAYER_H,
        cursor: "grab",
        clipPath: `polygon(${tlx}% 0, ${trx}% 0, ${brx}% 100%, ${blx}% 100%)`
      },
      onPointerDown: e => onPlacedPointerDown(e, {
        ...p,
        type: "base"
      })
    }, /*#__PURE__*/React.createElement(BaseLayer, {
      ing: ing,
      w: W,
      h: LAYER_H
    }));
  }), decor.map(p => {
    const ing = findIng(p.ingId);
    if (!ing) return null;
    const isSel = p.iid === selectedIid;
    return /*#__PURE__*/React.createElement("div", {
      key: p.iid,
      className: "absolute placed",
      style: {
        left: p.x,
        top: p.y,
        transform: "translate(-50%, -50%)",
        zIndex: p.z,
        cursor: "grab"
      },
      onPointerDown: e => onPlacedPointerDown(e, {
        ...p,
        type: "free"
      })
    }, /*#__PURE__*/React.createElement(Sticker, {
      id: ing.id,
      size: ing.size,
      rotation: p.rot,
      scale: p.scale
    }), isSel && /*#__PURE__*/React.createElement(SelectionFrame, {
      size: ing.size * p.scale
    }));
  }), selected && /*#__PURE__*/React.createElement(SelectionUI, {
    item: selected,
    onResizePointerDown: onResizePointerDown,
    onRotatePointerDown: onRotatePointerDown,
    bringFront: bringFront,
    sendBack: sendBack,
    deleteItem: deleteItem,
    setScale: setScale,
    resetRot: resetRot
  }), baseLayers.length === 0 && decor.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-end justify-center pointer-events-none",
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center bg-cream/85 backdrop-blur-sm px-5 py-3 border border-ink/15 mb-[88px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mincho text-sm tracking-[0.3em]"
  }, "\u7A7A\u306E\u30B0\u30E9\u30B9"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-inkSoft mt-1 tracking-[0.25em] uppercase"
  }, "base \u21D2 snaps inside bowl \xA0\xB7\xA0 decor \u21D2 drag freely"))), hint && /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-ink/85 text-cream text-[10px] tracking-[0.3em] uppercase px-4 py-2"
  }, hint)));
}
function SelectionFrame({
  size
}) {
  const pad = 10;
  const s = size + pad * 2;
  return /*#__PURE__*/React.createElement("div", {
    className: "absolute pointer-events-none",
    style: {
      left: -pad,
      top: -pad,
      width: s,
      height: s,
      border: "1px dashed rgba(58,42,31,0.65)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-0.5 -left-0.5 w-2 h-2 border-l border-t border-ink"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-0.5 -right-0.5 w-2 h-2 border-r border-t border-ink"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute -bottom-0.5 -left-0.5 w-2 h-2 border-l border-b border-ink"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-ink"
  }));
}
function SelectionUI({
  item,
  onResizePointerDown,
  onRotatePointerDown,
  bringFront,
  sendBack,
  deleteItem,
  setScale,
  resetRot
}) {
  const ing = findIng(item.ingId);
  if (!ing) return null;
  const bbox = ing.size * item.scale + 20;
  const halfBox = bbox / 2;

  // Clamp panel position so it never escapes the canvas
  const panelW = 360;
  const panelTop = Math.max(8, item.y + halfBox + 14);
  const panelLeft = Math.max(panelW / 2 + 8, Math.min(CANVAS_W - panelW / 2 - 8, item.x));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onPointerDown: e => onRotatePointerDown(e, item),
    className: "absolute z-40 flex items-center justify-center",
    title: "\u62D6\u52A8\u65CB\u8F6C \xB7 drag to rotate",
    style: {
      left: item.x - 11,
      top: item.y - halfBox - 30,
      width: 22,
      height: 22,
      background: "#FBF5EC",
      border: "1.5px solid #3A2A1F",
      borderRadius: "50%",
      cursor: "grab",
      boxShadow: "0 2px 6px rgba(58,42,31,0.3)",
      touchAction: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 6 A 4 4 0 1 1 7 2",
    fill: "none",
    stroke: "#3A2A1F",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 1.5 L 11 5 L 7.5 5",
    fill: "none",
    stroke: "#3A2A1F",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("svg", {
    className: "absolute z-30 pointer-events-none",
    style: {
      left: item.x - 0.5,
      top: item.y - halfBox - 12,
      width: 1,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0.5",
    y1: "0",
    x2: "0.5",
    y2: "12",
    stroke: "#3A2A1F",
    strokeWidth: "1",
    strokeDasharray: "2 2"
  })), /*#__PURE__*/React.createElement("div", {
    onPointerDown: e => onResizePointerDown(e, item),
    className: "absolute z-40",
    title: "\u62D6\u52A8\u7F29\u653E \xB7 drag to resize",
    style: {
      left: item.x + halfBox - 11,
      top: item.y + halfBox - 11,
      width: 22,
      height: 22,
      background: "#FBF5EC",
      border: "1.5px solid #3A2A1F",
      borderRadius: "50%",
      cursor: "nwse-resize",
      boxShadow: "0 2px 6px rgba(58,42,31,0.3)",
      touchAction: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 11,
      height: 11,
      borderRight: "1.5px solid #3A2A1F",
      borderBottom: "1.5px solid #3A2A1F"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute z-40 bg-ink text-cream shadow-[0_10px_30px_-6px_rgba(58,42,31,0.5)] flex items-center",
    style: {
      left: panelLeft,
      top: panelTop,
      transform: "translate(-50%, 0)"
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(PanelBtn, {
    onClick: bringFront,
    title: "\u7F6E\u4E8E\u9876\u5C42 \xB7 bring to front"
  }, "\u2191 Front"), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement(PanelBtn, {
    onClick: sendBack,
    title: "\u7F6E\u4E8E\u5E95\u5C42 \xB7 send to back"
  }, "\u2193 Back"), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-3 py-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] tracking-[0.25em] uppercase text-cream/70"
  }, "Scale"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0.4",
    max: "2.4",
    step: "0.05",
    value: item.scale,
    onChange: e => setScale(parseFloat(e.target.value)),
    className: "parfait-slider",
    style: {
      width: 86
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-mincho text-[11px] w-9 text-right tabular-nums"
  }, Math.round(item.scale * 100), "%")), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement(PanelBtn, {
    onClick: resetRot,
    title: "\u5FA9\u4F4D \xB7 reset rotation"
  }, "\u21BA 0\xB0"), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement(PanelBtn, {
    onClick: deleteItem,
    title: "\u5220\u9664",
    danger: true
  }, "\xD7")));
}
function PanelBtn({
  children,
  onClick,
  title,
  danger
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    className: "px-3 py-2 text-[10px] tracking-[0.25em] uppercase hover:bg-cream hover:text-ink transition " + (danger ? "text-rose/90" : "")
  }, children);
}
function Sep() {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-px h-5 bg-cream/20"
  });
}
function CornerMarks() {
  const arm = "absolute w-4 h-px bg-ink/40";
  const armV = "absolute w-px h-4 bg-ink/40";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: arm,
    style: {
      top: 14,
      left: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: armV,
    style: {
      top: 14,
      left: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: arm,
    style: {
      top: 14,
      right: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: armV,
    style: {
      top: 14,
      right: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: arm,
    style: {
      bottom: 14,
      left: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: armV,
    style: {
      bottom: 14,
      left: 14,
      marginTop: -16
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: arm,
    style: {
      bottom: 14,
      right: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: armV,
    style: {
      bottom: 14,
      right: 14,
      marginTop: -16
    }
  }));
}

/* ------------------------------------------------------------- */
/* Picker                                                         */
/* ------------------------------------------------------------- */
function PickerCard({
  ing,
  onPointerDown
}) {
  return /*#__PURE__*/React.createElement("div", {
    onPointerDown: e => onPointerDown(e, ing),
    className: "picker-card group relative bg-milk border border-ink/10 hover:border-ink/40 transition rounded-sm p-3 flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(58,42,31,0.35)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1.5 left-1.5 text-[8px] tracking-[0.2em] font-mincho px-1.5 py-0.5 bg-cream/90 text-inkSoft border border-ink/10"
  }, ing.id.split("-").map(s => s[0]).join("").toUpperCase()), /*#__PURE__*/React.createElement("div", {
    className: "w-full aspect-square flex items-center justify-center bg-paper/60 rounded-sm"
  }, /*#__PURE__*/React.createElement(Sticker, {
    id: ing.id,
    size: ing.size * 0.78
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-0.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mincho text-[13px] leading-tight"
  }, ing.jp), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-inkSoft mt-0.5"
  }, ing.zh)));
}
function Picker({
  onCardPointerDown,
  count
}) {
  const [active, setActive] = useState("base");
  const items = useMemo(() => INGREDIENTS.filter(i => i.cat === active), [active]);
  return /*#__PURE__*/React.createElement("div", {
    className: "h-full flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-between mb-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.4em] text-inkSoft uppercase"
  }, "Step 02 \u2014 \u7D20\u6750\u68DA"), /*#__PURE__*/React.createElement("h2", {
    className: "font-mincho text-2xl mt-1.5"
  }, "\u98DF\u6750\u306E\u68DA"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-inkSoft mt-1 leading-relaxed"
  }, "\u57FA\u5E95\u5165\u676F \u21D2 \u81EA\u52A8\u968F\u676F\u578B\u94FA\u5C42", /*#__PURE__*/React.createElement("br", null), "\u9876\u9970 / \u51B0\u6FC0\u51CC \u21D2 \u5355\u51FB\u7F16\u8F91 \xB7 \u65CB\u8F6C \xB7 \u7F29\u653E \xB7 \u5C42\u7EA7")), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] text-inkSoft uppercase"
  }, "In cup"), /*#__PURE__*/React.createElement("div", {
    className: "font-mincho text-2xl leading-none mt-1"
  }, String(count).padStart(2, "0")))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 border-b border-ink/15 mb-5"
  }, CATS.map(c => {
    const on = c.id === active;
    const n = INGREDIENTS.filter(i => i.cat === c.id).length;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => setActive(c.id),
      className: "relative px-4 py-3 text-left transition " + (on ? "text-ink" : "text-inkSoft hover:text-ink")
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-mincho text-[15px]"
    }, c.jp), /*#__PURE__*/React.createElement("div", {
      className: "text-[9px] tracking-[0.3em] mt-0.5 uppercase"
    }, c.zh, " \xB7 ", n), on && /*#__PURE__*/React.createElement("div", {
      className: "absolute left-0 right-0 -bottom-px h-px bg-ink"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto no-scrollbar scroll-fade pr-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 lg:grid-cols-4 gap-3 pb-6"
  }, items.map(ing => /*#__PURE__*/React.createElement(PickerCard, {
    key: ing.id,
    ing: ing,
    onPointerDown: onCardPointerDown
  })))));
}

/* ------------------------------------------------------------- */
/* Main App                                                       */
/* ------------------------------------------------------------- */
function App() {
  const [cupId, setCupId] = useState("wine");
  const [baseLayers, setBaseLayers] = useState([]);
  const [decor, setDecor] = useState([]);
  const [selected, setSelected] = useState(null);
  const [drag, setDrag] = useState(null);
  const [resize, setResize] = useState(null);
  const [rotate, setRotate] = useState(null);
  const [hint, setHint] = useState(null);
  const stageRef = useRef(null);
  const zRef = useRef(10);
  const cup = CUPS[cupId];
  const bounds = bowlBounds(cup);

  /* Switch cup: clamp base layers to the new bowl range */
  const changeCup = useCallback(newId => {
    setCupId(newId);
    const nc = CUPS[newId];
    setBaseLayers(prev => prev.map(p => ({
      ...p,
      y: Math.max(nc.bowlTop + LAYER_H / 2, Math.min(nc.bowlBottom - LAYER_H / 2, p.y))
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
            iid: newIid(),
            ingId: d.ingId,
            y: b.clampY(y)
          }]);
        }
      } else {
        if (okY) {
          setBaseLayers(prev => prev.map(p => p.iid === d.iid ? {
            ...p,
            y: b.clampY(y)
          } : p));
        } else {
          setBaseLayers(prev => prev.filter(p => p.iid !== d.iid));
        }
      }
    } else {
      if (d.source === "panel") {
        if (inside) {
          zRef.current += 1;
          setDecor(prev => [...prev, {
            iid: newIid(),
            ingId: d.ingId,
            x,
            y,
            rot: d.rot,
            scale: d.scale,
            z: zRef.current
          }]);
        }
      } else {
        if (inside) {
          setDecor(prev => prev.map(p => p.iid === d.iid ? {
            ...p,
            x,
            y
          } : p));
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
    const onMove = e => {
      setDrag(d => {
        if (!d) return d;
        const next = {
          ...d,
          x: e.clientX,
          y: e.clientY
        };
        if (d.phase === "press") {
          const dx = e.clientX - d.startX;
          const dy = e.clientY - d.startY;
          if (Math.hypot(dx, dy) > 5) next.phase = "move";
        }
        return next;
      });
    };
    const onUp = e => {
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
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [drag, commitDrop]);

  /* hint banner while dragging */
  useEffect(() => {
    if (!drag || drag.phase !== "move") {
      setHint(null);
      return;
    }
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
      if (drag.source === "placed" && !inside) setHint("拖出画布即丢弃 · drop outside to discard");else if (drag.source === "panel" && !inside) setHint("拖入左侧画布以放置");else setHint(null);
    }
  }, [drag, cupId]);

  /* resize gesture */
  useEffect(() => {
    if (!resize) return;
    const onMove = e => {
      const dist = Math.hypot(e.clientX - resize.cx, e.clientY - resize.cy);
      const ratio = dist / Math.max(8, resize.startDist);
      const newScale = Math.max(0.4, Math.min(2.4, resize.startScale * ratio));
      setDecor(prev => prev.map(p => p.iid === resize.iid ? {
        ...p,
        scale: newScale
      } : p));
    };
    const onUp = () => setResize(null);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [resize]);

  /* rotation gesture */
  useEffect(() => {
    if (!rotate) return;
    const onMove = e => {
      const a = Math.atan2(e.clientY - rotate.cy, e.clientX - rotate.cx) * 180 / Math.PI;
      const delta = a - rotate.startAngle;
      const newRot = rotate.initialRot + delta;
      setDecor(prev => prev.map(p => p.iid === rotate.iid ? {
        ...p,
        rot: newRot
      } : p));
    };
    const onUp = () => setRotate(null);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
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
      startX: e.clientX,
      startY: e.clientY,
      x: e.clientX,
      y: e.clientY,
      rot: Math.random() * 30 - 15,
      scale: 1
    });
  }, []);
  const onPlacedPointerDown = useCallback((e, item) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag({
      phase: "press",
      source: "placed",
      ingId: item.ingId,
      cat: item.type === "base" ? "base" : findIng(item.ingId)?.cat || "top",
      iid: item.iid,
      startX: e.clientX,
      startY: e.clientY,
      x: e.clientX,
      y: e.clientY,
      rot: item.rot || 0,
      scale: item.scale || 1
    });
  }, []);
  const onResizePointerDown = useCallback((e, item) => {
    e.preventDefault();
    e.stopPropagation();
    const stage = stageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    const cx = r.left + item.x;
    const cy = r.top + item.y;
    const startDist = Math.hypot(e.clientX - cx, e.clientY - cy);
    setResize({
      iid: item.iid,
      cx,
      cy,
      startDist,
      startScale: item.scale || 1
    });
  }, []);
  const onRotatePointerDown = useCallback((e, item) => {
    e.preventDefault();
    e.stopPropagation();
    const stage = stageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    const cx = r.left + item.x;
    const cy = r.top + item.y;
    const startAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI;
    setRotate({
      iid: item.iid,
      cx,
      cy,
      startAngle,
      initialRot: item.rot || 0
    });
  }, []);
  const onBgPointerDown = useCallback(e => {
    if (e.target === e.currentTarget) setSelected(null);
  }, []);

  /* selection ops */
  const bringFront = useCallback(() => {
    if (!selected) return;
    zRef.current += 1;
    const zNow = zRef.current;
    setDecor(prev => prev.map(p => p.iid === selected ? {
      ...p,
      z: zNow
    } : p));
  }, [selected]);
  const sendBack = useCallback(() => {
    if (!selected) return;
    setDecor(prev => {
      const minZ = prev.reduce((m, p) => Math.min(m, p.z), Infinity);
      return prev.map(p => p.iid === selected ? {
        ...p,
        z: (Number.isFinite(minZ) ? minZ : 0) - 1
      } : p);
    });
  }, [selected]);
  const deleteItem = useCallback(() => {
    if (!selected) return;
    setDecor(prev => prev.filter(p => p.iid !== selected));
    setSelected(null);
  }, [selected]);
  const setScale = useCallback(v => {
    if (!selected) return;
    setDecor(prev => prev.map(p => p.iid === selected ? {
      ...p,
      scale: v
    } : p));
  }, [selected]);
  const resetRot = useCallback(() => {
    if (!selected) return;
    setDecor(prev => prev.map(p => p.iid === selected ? {
      ...p,
      rot: 0
    } : p));
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
    setBaseLayers([]);
    setDecor([]);
    setSelected(null);
  };
  const shuffleTilt = () => setDecor(prev => prev.map(p => ({
    ...p,
    rot: Math.random() * 30 - 15
  })));
  const dragIng = drag ? findIng(drag.ingId) : null;
  const ghostSize = dragIng ? dragIng.size : 72;
  const busy = drag?.phase === "move" || resize || rotate;
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen relative " + (busy ? "grabbing" : ""),
    style: {
      touchAction: busy ? "none" : "auto"
    }
  }, /*#__PURE__*/React.createElement("header", {
    className: "px-10 pt-7 pb-4 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 rounded-full border border-ink flex items-center justify-center font-mincho text-sm"
  }, "P"), /*#__PURE__*/React.createElement("div", {
    className: "font-mincho tracking-[0.3em] text-sm"
  }, "PARFAIT \xA0\xB7\xA0 \u30D1\u30D5\u30A7 \u30E1\u30FC\u30AB\u30FC")), /*#__PURE__*/React.createElement("nav", {
    className: "hidden md:flex items-center gap-8 text-[11px] tracking-[0.3em] uppercase text-inkSoft"
  }, /*#__PURE__*/React.createElement("a", {
    className: "hover:text-ink cursor-pointer"
  }, "Studio"), /*#__PURE__*/React.createElement("a", {
    className: "hover:text-ink cursor-pointer"
  }, "Recipes"), /*#__PURE__*/React.createElement("a", {
    className: "hover:text-ink cursor-pointer"
  }, "Journal"), /*#__PURE__*/React.createElement("a", {
    className: "hover:text-ink cursor-pointer"
  }, "About")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] tracking-[0.3em] text-inkSoft"
  }, "\u521D\u590F \xB7 MAY")), /*#__PURE__*/React.createElement("div", {
    className: "mx-10 border-t border-ink/15"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-10 mt-4 mb-3 flex items-end justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.4em] text-inkSoft uppercase"
  }, "Step 01 \u2014 Compose"), /*#__PURE__*/React.createElement("h1", {
    className: "font-mincho text-3xl mt-1.5"
  }, "\u81EA\u7531\u306B\u91CD\u306D\u308B\u3001\u82AD\u83F2\u624B\u5E10\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-inkSoft text-right max-w-[360px] leading-relaxed"
  }, "\u9078\u676F\u578B \u2192 \u62D6\u5165\u57FA\u5E95 \u2192 \u81EA\u7531\u6446\u653E\u9876\u9970", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-ink"
  }, "\u5355\u51FB\u9876\u9970"), " \u2192 \u65CB\u8F6C\u624B\u67C4(\u4E0A) \xB7 \u7F29\u653E\u624B\u67C4(\u53F3\u4E0B) \xB7 \u64CD\u4F5C\u9762\u677F(\u4E0B)")), /*#__PURE__*/React.createElement("main", {
    className: "px-10 pb-10 grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CupSelector, {
    cupId: cupId,
    onChange: changeCup
  }), /*#__PURE__*/React.createElement("div", {
    className: "canvas-card relative",
    style: {
      width: CANVAS_W,
      height: CANVAS_H
    }
  }, /*#__PURE__*/React.createElement(Stage, {
    cupId: cupId,
    baseLayers: baseLayers,
    decor: decor,
    stageRef: stageRef,
    onPlacedPointerDown: onPlacedPointerDown,
    onResizePointerDown: onResizePointerDown,
    onRotatePointerDown: onRotatePointerDown,
    selectedIid: selected,
    onBgPointerDown: onBgPointerDown,
    hint: hint,
    bringFront: bringFront,
    sendBack: sendBack,
    deleteItem: deleteItem,
    setScale: setScale,
    resetRot: resetRot
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex items-center justify-between",
    style: {
      width: CANVAS_W
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] tracking-[0.3em] text-inkSoft uppercase"
  }, CUPS[cupId].en, " \xB7 480 \xD7 640"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: undo,
    disabled: !baseLayers.length && !decor.length,
    className: "text-[10px] tracking-[0.3em] uppercase px-3 py-2 bg-milk border border-ink/25 hover:bg-ink hover:text-cream transition disabled:opacity-30 disabled:hover:bg-milk disabled:hover:text-ink"
  }, "\u21BA Undo"), /*#__PURE__*/React.createElement("button", {
    onClick: shuffleTilt,
    disabled: !decor.length,
    className: "text-[10px] tracking-[0.3em] uppercase px-3 py-2 bg-milk border border-ink/25 hover:bg-ink hover:text-cream transition disabled:opacity-30 disabled:hover:bg-milk disabled:hover:text-ink"
  }, "\u21BB Tilt"), /*#__PURE__*/React.createElement("button", {
    onClick: clear,
    disabled: !baseLayers.length && !decor.length,
    className: "text-[10px] tracking-[0.3em] uppercase px-3 py-2 text-inkSoft hover:text-ink transition disabled:opacity-30"
  }, "\xD7 Clear")))), /*#__PURE__*/React.createElement("section", {
    className: "bg-cream pl-10 pr-2 py-2"
  }, /*#__PURE__*/React.createElement(Picker, {
    onCardPointerDown: onCardPointerDown,
    count: baseLayers.length + decor.length
  }))), /*#__PURE__*/React.createElement("footer", {
    className: "px-10 pb-7 flex items-center justify-between text-[11px] tracking-[0.3em] text-inkSoft uppercase"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 Parfait Studio \xA0 / \xA0 Hand-built sticker book"), /*#__PURE__*/React.createElement("div", null, "v 0.4 \xB7 cups & rotation")), drag && drag.phase === "move" && dragIng && /*#__PURE__*/React.createElement("div", {
    className: "fixed pointer-events-none z-[9999]",
    style: {
      left: drag.x,
      top: drag.y,
      transform: "translate(-50%, -50%) scale(1.1)",
      filter: "drop-shadow(0 12px 18px rgba(58,42,31,0.28))",
      opacity: 0.95
    }
  }, /*#__PURE__*/React.createElement(Sticker, {
    id: dragIng.id,
    size: ghostSize,
    rotation: drag.rot,
    scale: drag.scale
  })));
}
let _seq = 0;
function newIid() {
  _seq += 1;
  return `i${Date.now().toString(36)}-${_seq}`;
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));