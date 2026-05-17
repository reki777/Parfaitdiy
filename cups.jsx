/* eslint-disable */
/* Cup geometry & rendering.

   All cups draw inside a 480×640 viewBox (the design canvas size).
   The bowl interior is a function of vertical progress t = (y - bowlTop) / (bowlBottom - bowlTop).

   Quadratic and cubic Beziers used for the bowl outlines have their y control
   points placed at the midpoint (quadratic) or at 1/3 + 2/3 of the bowl height
   (cubic). With those constraints, y(t) is exactly linear in t — so the
   horizontal half-width function we use for the base-layer bands stays in
   lockstep with the SVG outline. */

const qbez = (a, b, c, t) => { const u = 1 - t; return u*u*a + 2*u*t*b + t*t*c; };
const cbez = (a, b, c, d, t) => { const u = 1 - t; return u*u*u*a + 3*u*u*t*b + 3*u*t*t*c + t*t*t*d; };

const CUP_CX = 240;

const CUPS = {
  coupe: {
    id: "coupe", en: "Coupe", jp: "クープ", zh: "碟形香槟杯",
    bowlTop: 360, bowlBottom: 460,
    halfWidthAt: (t) => qbez(132, 100, 30, t),
    draw: () => (
      <g>
        <path d="M108 360 Q 140 410, 210 460 L 270 460 Q 340 410, 372 360 Z"
              fill="url(#cup-body)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <path d="M116 366 Q 144 410, 212 454 L 268 454 Q 336 410, 364 366 Z"
              fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
        <ellipse cx="240" cy="360" rx="132" ry="9"
                 fill="rgba(255,255,255,0.18)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="358" rx="122" ry="4" fill="rgba(255,255,255,0.55)"/>
        <rect x="236" y="460" width="8" height="120"
              fill="url(#cup-body)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <ellipse cx="240" cy="588" rx="68" ry="10"
                 fill="url(#cup-body)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="586" rx="60" ry="4" fill="rgba(255,255,255,0.6)"/>
        <ellipse cx="240" cy="606" rx="80" ry="5" fill="rgba(58,42,31,0.14)"/>
      </g>
    ),
    icon: () => (
      <>
        <path d="M108 360 Q 140 410, 210 460 L 270 460 Q 340 410, 372 360 Z"/>
        <line x1="240" y1="460" x2="240" y2="580"/>
        <line x1="172" y1="588" x2="308" y2="588"/>
      </>
    ),
  },

  snifter: {
    id: "snifter", en: "Snifter", jp: "スニフター", zh: "白兰地杯",
    bowlTop: 300, bowlBottom: 540,
    halfWidthAt: (t) => cbez(50, 130, 130, 50, t),
    draw: () => (
      <g>
        <path d="M190 300 C 110 380, 110 460, 190 540 L 290 540 C 370 460, 370 380, 290 300 Z"
              fill="url(#cup-body)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <path d="M196 306 C 120 384, 120 456, 196 534 L 284 534 C 360 456, 360 384, 284 306 Z"
              fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
        <ellipse cx="240" cy="300" rx="50" ry="6"
                 fill="rgba(255,255,255,0.2)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="298" rx="44" ry="3" fill="rgba(255,255,255,0.55)"/>
        <rect x="222" y="540" width="36" height="40" fill="url(#cup-body)"
              stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <ellipse cx="240" cy="588" rx="62" ry="9"
                 fill="url(#cup-body)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="586" rx="54" ry="4" fill="rgba(255,255,255,0.6)"/>
        <ellipse cx="240" cy="606" rx="74" ry="5" fill="rgba(58,42,31,0.14)"/>
      </g>
    ),
    icon: () => (
      <>
        <path d="M190 300 C 110 380, 110 460, 190 540 L 290 540 C 370 460, 370 380, 290 300 Z"/>
        <line x1="240" y1="540" x2="240" y2="580"/>
        <line x1="180" y1="588" x2="300" y2="588"/>
      </>
    ),
  },

  wine: {
    id: "wine", en: "Wine", jp: "ワイン", zh: "葡萄酒杯",
    bowlTop: 270, bowlBottom: 500,
    halfWidthAt: (t) => qbez(86, 114, 70, t),
    draw: () => (
      <g>
        <path d="M154 270 Q 126 385, 170 500 L 310 500 Q 354 385, 326 270 Z"
              fill="url(#cup-body)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <path d="M160 276 Q 132 384, 174 494 L 306 494 Q 348 384, 320 276 Z"
              fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
        <ellipse cx="240" cy="270" rx="86" ry="8"
                 fill="rgba(255,255,255,0.2)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="268" rx="80" ry="4" fill="rgba(255,255,255,0.55)"/>
        <rect x="236" y="500" width="8" height="90"
              fill="url(#cup-body)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <ellipse cx="240" cy="598" rx="64" ry="9"
                 fill="url(#cup-body)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="596" rx="56" ry="4" fill="rgba(255,255,255,0.6)"/>
        <ellipse cx="240" cy="614" rx="76" ry="5" fill="rgba(58,42,31,0.14)"/>
      </g>
    ),
    icon: () => (
      <>
        <path d="M154 270 Q 126 385, 170 500 L 310 500 Q 354 385, 326 270 Z"/>
        <line x1="240" y1="500" x2="240" y2="598"/>
        <line x1="176" y1="598" x2="304" y2="598"/>
      </>
    ),
  },

  highball: {
    id: "highball", en: "Highball", jp: "ハイボール", zh: "海波杯",
    bowlTop: 230, bowlBottom: 600,
    halfWidthAt: (t) => 84,
    draw: () => (
      <g>
        <path d="M156 230 L156 600 L324 600 L324 230 Z"
              fill="url(#cup-body)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <path d="M162 236 L162 594 L318 594 L318 236 Z"
              fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
        <ellipse cx="240" cy="230" rx="84" ry="8"
                 fill="rgba(255,255,255,0.2)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="228" rx="76" ry="4" fill="rgba(255,255,255,0.55)"/>
        <ellipse cx="240" cy="600" rx="84" ry="6"
                 fill="rgba(58,42,31,0.10)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <ellipse cx="240" cy="616" rx="96" ry="6" fill="rgba(58,42,31,0.14)"/>
      </g>
    ),
    icon: () => (
      <>
        <path d="M156 230 L156 600 L324 600 L324 230 Z"/>
        <line x1="156" y1="230" x2="324" y2="230"/>
      </>
    ),
  },

  hurricane: {
    id: "hurricane", en: "Hurricane", jp: "ハリケーン", zh: "飓风杯",
    bowlTop: 250, bowlBottom: 580,
    halfWidthAt: (t) => cbez(92, 35, 144, 84, t),
    draw: () => (
      <g>
        <path d="M148 250 C 205 360, 96 470, 156 580 L 324 580 C 384 470, 275 360, 332 250 Z"
              fill="url(#cup-body)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <path d="M154 256 C 198 360, 102 470, 162 574 L 318 574 C 378 470, 282 360, 326 256 Z"
              fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1"/>
        <ellipse cx="240" cy="250" rx="92" ry="8"
                 fill="rgba(255,255,255,0.2)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="248" rx="84" ry="4" fill="rgba(255,255,255,0.55)"/>
        <rect x="222" y="580" width="36" height="28"
              fill="url(#cup-body)" stroke="rgba(58,42,31,0.45)" strokeWidth="2"/>
        <ellipse cx="240" cy="614" rx="68" ry="9"
                 fill="url(#cup-body)" stroke="rgba(58,42,31,0.5)" strokeWidth="2"/>
        <ellipse cx="240" cy="612" rx="60" ry="4" fill="rgba(255,255,255,0.6)"/>
        <ellipse cx="240" cy="630" rx="80" ry="5" fill="rgba(58,42,31,0.14)"/>
      </g>
    ),
    icon: () => (
      <>
        <path d="M148 250 C 205 360, 96 470, 156 580 L 324 580 C 384 470, 275 360, 332 250 Z"/>
        <line x1="240" y1="580" x2="240" y2="612"/>
        <line x1="176" y1="612" x2="304" y2="612"/>
      </>
    ),
  },
};

/* Full-resolution rendering (with gradients) */
function CupGlass({ cupId }) {
  const cup = CUPS[cupId];
  if (!cup) return null;
  return (
    <svg viewBox="0 0 480 640" width={480} height={640}
         className="block pointer-events-none select-none" aria-hidden>
      <defs>
        <linearGradient id="cup-body" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0"    stopColor="rgba(255,255,255,0.55)"/>
          <stop offset="0.18" stopColor="rgba(255,255,255,0.15)"/>
          <stop offset="0.55" stopColor="rgba(255,255,255,0.05)"/>
          <stop offset="0.88" stopColor="rgba(255,255,255,0.18)"/>
          <stop offset="1"    stopColor="rgba(255,255,255,0.45)"/>
        </linearGradient>
      </defs>
      {cup.draw()}
    </svg>
  );
}

/* Tiny outline-only version for tab selectors */
function CupIcon({ cupId, size = 30 }) {
  const cup = CUPS[cupId];
  if (!cup) return null;
  return (
    <svg viewBox="0 0 480 640" width={size} height={size * 640/480} style={{ display: "block" }}>
      <g fill="none" stroke="currentColor" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round">
        {cup.icon()}
      </g>
    </svg>
  );
}

Object.assign(window, { CUPS, CupGlass, CupIcon, CUP_CX });
