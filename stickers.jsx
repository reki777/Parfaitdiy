/* eslint-disable */
/* Sticker registry — each entry returns the inner SVG nodes.
   The wrapper <Sticker> applies a white outline (paint-order stroke fill)
   and a soft drop-shadow. ViewBox is always 100x100.
   This file also exports <BaseLayer> — a horizontal band renderer used
   when base-category ingredients are dropped inside the bowl. */

/* ------------ Shared scoop path (organic blob, flat bottom + 3 melt drips) ------------ */
const SCOOP_PATH =
  "M14 66 " +
  "C4 50 4 26 22 20 " +
  "C28 8 42 8 50 16 " +
  "C58 8 72 8 78 20 " +
  "C96 26 96 50 86 66 " +
  "Q90 74 82 72 " +
  "Q76 68 70 66 " +
  "L60 66 " +
  "Q54 76 48 72 " +
  "Q42 76 38 66 " +
  "L30 66 " +
  "Q24 76 18 72 " +
  "Q12 70 14 66 Z";

function ScoopBody({ base, light, ridge, accents }) {
  return (
    <>
      <path d={SCOOP_PATH} fill={base} />
      {/* Big highlight (no outline) */}
      <ellipse cx="32" cy="32" rx="10" ry="4.5" fill="#FFFFFF" opacity="0.55" stroke="none" transform="rotate(-28 32 32)"/>
      {/* Small bump highlights to suggest scooped surface (no outline via own stroke) */}
      <path d="M28 24 Q34 16 42 22" stroke={light}  strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M54 22 Q62 14 70 22" stroke={light}  strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.55"/>
      {/* Subtle bottom-shadow inside drips (own stroke) */}
      <path d="M22 70 Q26 74 30 70" stroke={ridge} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M44 70 Q50 76 56 70" stroke={ridge} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.4"/>
      <path d="M68 70 Q72 74 76 70" stroke={ridge} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.4"/>
      {accents}
    </>
  );
}

const S = {
  /* ---------------- BASE LAYERS (used by panel thumbnail + drag ghost) ---------------- */

  "coffee-jelly": () => (
    <>
      <path d="M14 36 Q14 30 22 30 H78 Q86 30 86 36 V72 Q86 78 78 78 H22 Q14 78 14 72 Z" fill="#4A2C1E"/>
      <ellipse cx="50" cy="32" rx="32" ry="3.6" fill="#6B3F2A" stroke="none"/>
      <path d="M22 50 Q26 46 30 52" stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="68" cy="64" rx="3" ry="2" fill="#6B3F2A" opacity="0.7" stroke="none"/>
      <ellipse cx="34" cy="68" rx="2" ry="1.4" fill="#2E1A11" opacity="0.6" stroke="none"/>
    </>
  ),

  "milk-jelly": () => (
    <>
      <path d="M14 36 Q14 30 22 30 H78 Q86 30 86 36 V72 Q86 78 78 78 H22 Q14 78 14 72 Z" fill="#F7EAD0"/>
      <ellipse cx="50" cy="32" rx="32" ry="3.6" fill="#FFFCF1" stroke="none"/>
      <path d="M22 50 Q28 46 34 52" stroke="rgba(255,255,255,0.95)" strokeWidth="2.4" fill="none" strokeLinecap="round"/>
      <ellipse cx="68" cy="64" rx="3" ry="2" fill="#E7D3AE" opacity="0.7" stroke="none"/>
    </>
  ),

  "fruit-jelly": () => (
    <>
      <path d="M16 34 Q16 28 24 28 H76 Q84 28 84 34 V72 Q84 78 76 78 H24 Q16 78 16 72 Z" fill="#F4A37E" opacity="0.92"/>
      <ellipse cx="50" cy="30.5" rx="30" ry="3.2" fill="#FBC7AE" stroke="none"/>
      <circle cx="36" cy="58" r="3.5" fill="#D86E55" stroke="none"/>
      <circle cx="62" cy="50" r="2.8" fill="#D86E55" stroke="none"/>
      <circle cx="58" cy="68" r="2.4" fill="#D86E55" stroke="none"/>
    </>
  ),

  "sponge-cake": () => (
    <>
      <path d="M14 34 Q14 28 22 28 H78 Q86 28 86 34 V74 Q86 80 78 80 H22 Q14 80 14 74 Z" fill="#F0CE7E"/>
      <path d="M14 38 H86" stroke="#D6A95A" strokeWidth="1.4" fill="none" opacity="0.7"/>
      <circle cx="28" cy="50" r="2.4" fill="#C99553" stroke="none"/>
      <circle cx="42" cy="46" r="1.6" fill="#C99553" stroke="none"/>
      <circle cx="54" cy="58" r="2.8" fill="#C99553" stroke="none"/>
      <circle cx="68" cy="48" r="2"   fill="#C99553" stroke="none"/>
      <circle cx="74" cy="64" r="1.6" fill="#C99553" stroke="none"/>
      <circle cx="36" cy="66" r="2"   fill="#C99553" stroke="none"/>
      <circle cx="22" cy="68" r="1.6" fill="#C99553" stroke="none"/>
      <circle cx="60" cy="72" r="1.4" fill="#C99553" stroke="none"/>
    </>
  ),

  "strawberry-mousse": () => (
    <>
      <path d="M10 38 Q20 26 30 38 T50 38 T70 38 T90 38 V78 Q90 82 86 82 H14 Q10 82 10 78 Z" fill="#ECA3A3"/>
      <path d="M10 40 Q20 30 30 40 T50 40 T70 40 T90 40" stroke="#D67D7D" strokeWidth="1.5" fill="none"/>
      <circle cx="30" cy="58" r="3" fill="#D04F5A" stroke="none"/>
      <circle cx="56" cy="66" r="2.4" fill="#D04F5A" stroke="none"/>
      <circle cx="70" cy="54" r="2" fill="#D04F5A" stroke="none"/>
    </>
  ),

  "matcha-mousse": () => (
    <>
      <path d="M10 38 Q20 26 30 38 T50 38 T70 38 T90 38 V78 Q90 82 86 82 H14 Q10 82 10 78 Z" fill="#B6C383"/>
      <path d="M10 40 Q20 30 30 40 T50 40 T70 40 T90 40" stroke="#8FA15C" strokeWidth="1.5" fill="none"/>
      <ellipse cx="26" cy="56" rx="2" ry="1.2" fill="#6F8744" opacity="0.7" stroke="none"/>
      <ellipse cx="64" cy="62" rx="2.4" ry="1.4" fill="#6F8744" opacity="0.7" stroke="none"/>
    </>
  ),

  "vanilla-mousse": () => (
    <>
      <path d="M10 38 Q20 26 30 38 T50 38 T70 38 T90 38 V78 Q90 82 86 82 H14 Q10 82 10 78 Z" fill="#F2DEB4"/>
      <path d="M10 40 Q20 30 30 40 T50 40 T70 40 T90 40" stroke="#D6BC85" strokeWidth="1.5" fill="none"/>
      <circle cx="30" cy="58" r="1.2" fill="#7A5C32" opacity="0.85" stroke="none"/>
      <circle cx="50" cy="64" r="1"   fill="#7A5C32" opacity="0.85" stroke="none"/>
      <circle cx="68" cy="58" r="1.2" fill="#7A5C32" opacity="0.85" stroke="none"/>
    </>
  ),

  "chocolate-mousse": () => (
    <>
      <path d="M10 38 Q20 26 30 38 T50 38 T70 38 T90 38 V78 Q90 82 86 82 H14 Q10 82 10 78 Z" fill="#5C3A28"/>
      <path d="M10 40 Q20 30 30 40 T50 40 T70 40 T90 40" stroke="#3E2418" strokeWidth="1.5" fill="none"/>
      <path d="M22 54 Q30 50 38 56" stroke="#7C5238" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M60 64 Q68 60 76 66" stroke="#7C5238" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7"/>
    </>
  ),

  "whipped-cream": () => (
    <>
      <path d="M8 50 Q14 38 22 48 Q28 36 36 48 Q44 36 52 48 Q60 36 68 48 Q76 36 84 48 Q92 40 92 52 V78 Q92 82 88 82 H12 Q8 82 8 78 Z" fill="#FFFCF6"/>
      <path d="M16 56 Q22 50 26 58" stroke="#E8D9BC" strokeWidth="1.4" fill="none" opacity="0.8"/>
      <path d="M40 60 Q46 54 50 62" stroke="#E8D9BC" strokeWidth="1.4" fill="none" opacity="0.8"/>
      <path d="M64 58 Q70 52 74 60" stroke="#E8D9BC" strokeWidth="1.4" fill="none" opacity="0.8"/>
    </>
  ),

  "mint-choco-cream": () => (
    <>
      <path d="M8 50 Q14 38 22 48 Q28 36 36 48 Q44 36 52 48 Q60 36 68 48 Q76 36 84 48 Q92 40 92 52 V78 Q92 82 88 82 H12 Q8 82 8 78 Z" fill="#C6E3CE"/>
      <path d="M16 56 Q22 50 26 58" stroke="#8DC0A0" strokeWidth="1.4" fill="none" opacity="0.8"/>
      <rect x="28" y="58" width="4" height="3" rx="1" fill="#4A2C1E" stroke="none" transform="rotate(20 30 60)"/>
      <rect x="48" y="64" width="5" height="3.4" rx="1" fill="#4A2C1E" stroke="none" transform="rotate(-15 50 66)"/>
      <rect x="66" y="56" width="4" height="3" rx="1" fill="#4A2C1E" stroke="none" transform="rotate(35 68 58)"/>
      <rect x="20" y="70" width="3.4" height="2.4" rx="0.6" fill="#4A2C1E" stroke="none"/>
      <rect x="74" y="68" width="3.4" height="2.4" rx="0.6" fill="#4A2C1E" stroke="none" transform="rotate(-25 76 70)"/>
    </>
  ),

  "granola": () => (
    <>
      <ellipse cx="32" cy="60" rx="18" ry="14" fill="#C9A26F"/>
      <ellipse cx="60" cy="56" rx="20" ry="15" fill="#D6B281"/>
      <ellipse cx="74" cy="68" rx="14" ry="11" fill="#B98E5A"/>
      <ellipse cx="28" cy="56" rx="3"   ry="1.4" fill="#F0D9B5" stroke="none" transform="rotate(-20 28 56)"/>
      <ellipse cx="42" cy="62" rx="3"   ry="1.4" fill="#F0D9B5" stroke="none" transform="rotate(15 42 62)"/>
      <ellipse cx="58" cy="52" rx="3.4" ry="1.6" fill="#F0D9B5" stroke="none" transform="rotate(-10 58 52)"/>
      <ellipse cx="68" cy="60" rx="3"   ry="1.4" fill="#F0D9B5" stroke="none" transform="rotate(25 68 60)"/>
      <ellipse cx="74" cy="66" rx="2.6" ry="1.2" fill="#F0D9B5" stroke="none"/>
      <circle cx="50" cy="64" r="1.6" fill="#6B4A2A" stroke="none"/>
      <circle cx="36" cy="68" r="1.4" fill="#6B4A2A" stroke="none"/>
      <circle cx="64" cy="70" r="1.2" fill="#6B4A2A" stroke="none"/>
    </>
  ),

  "cookie-crumbs": () => (
    <>
      <ellipse cx="34" cy="60" rx="16" ry="11" fill="#B07A47"/>
      <ellipse cx="62" cy="58" rx="18" ry="12" fill="#C49056"/>
      <ellipse cx="50" cy="70" rx="14" ry="8"  fill="#A26B3A"/>
      <circle cx="28" cy="58" r="2"   fill="#3E2418" stroke="none"/>
      <circle cx="44" cy="64" r="1.6" fill="#3E2418" stroke="none"/>
      <circle cx="58" cy="56" r="2"   fill="#3E2418" stroke="none"/>
      <circle cx="70" cy="62" r="1.4" fill="#3E2418" stroke="none"/>
      <circle cx="40" cy="70" r="1.2" fill="#3E2418" stroke="none"/>
      <circle cx="64" cy="70" r="1.4" fill="#3E2418" stroke="none"/>
    </>
  ),

  "yogurt": () => (
    <>
      <path d="M10 42 Q24 34 38 42 T66 42 T90 42 V78 Q90 82 86 82 H14 Q10 82 10 78 Z" fill="#FCF6E8"/>
      <path d="M10 44 Q24 36 38 44 T66 44 T90 44" stroke="#E7D8B6" strokeWidth="1.4" fill="none" opacity="0.8"/>
      <ellipse cx="30" cy="58" rx="6" ry="2"   fill="#FFFFFF" opacity="0.7" stroke="none"/>
      <ellipse cx="64" cy="66" rx="5" ry="1.6" fill="#FFFFFF" opacity="0.5" stroke="none"/>
    </>
  ),

  /* ---------------- TOPPINGS ---------------- */

  "pudding": () => (
    <>
      <path d="M20 78 Q20 30 50 28 Q80 30 80 78 Z" fill="#F2C476"/>
      <path d="M22 46 Q22 30 50 28 Q78 30 78 46 Q78 52 50 52 Q22 52 22 46 Z" fill="#8C5A2C"/>
      <path d="M28 52 Q30 60 32 52 Z" fill="#8C5A2C" stroke="none"/>
      <path d="M68 52 Q72 64 74 52 Z" fill="#8C5A2C" stroke="none"/>
      <ellipse cx="36" cy="60" rx="2.4" ry="8" fill="#FFFFFF" opacity="0.55" stroke="none"/>
    </>
  ),

  "strawberry": () => (
    <>
      <path d="M30 36 Q50 28 70 36 Q76 60 50 84 Q24 60 30 36 Z" fill="#E14D54"/>
      <path d="M38 32 L46 24 L50 32 L54 22 L58 32 L66 26 L62 38 Q50 34 38 38 Z" fill="#74A35C"/>
      <ellipse cx="40" cy="48" rx="1.4" ry="2" fill="#F8D070" stroke="none" transform="rotate(-15 40 48)"/>
      <ellipse cx="52" cy="46" rx="1.4" ry="2" fill="#F8D070" stroke="none"/>
      <ellipse cx="62" cy="50" rx="1.4" ry="2" fill="#F8D070" stroke="none" transform="rotate(15 62 50)"/>
      <ellipse cx="44" cy="60" rx="1.4" ry="2" fill="#F8D070" stroke="none" transform="rotate(-10 44 60)"/>
      <ellipse cx="56" cy="62" rx="1.4" ry="2" fill="#F8D070" stroke="none" transform="rotate(10 56 62)"/>
      <ellipse cx="50" cy="74" rx="1.4" ry="2" fill="#F8D070" stroke="none"/>
      <path d="M36 44 Q38 58 44 70" stroke="#FFFFFF" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.5"/>
    </>
  ),

  "blueberry": () => (
    <>
      <circle cx="50" cy="54" r="26" fill="#5C5BA0"/>
      <path d="M36 40 L42 32 L46 40 L50 30 L54 40 L58 32 L64 40 Q50 44 36 40 Z" fill="#3E3E78"/>
      <circle cx="50" cy="40" r="3" fill="#5C5BA0" stroke="none"/>
      <ellipse cx="40" cy="50" rx="4" ry="6" fill="#8A89C7" opacity="0.85" stroke="none"/>
      <ellipse cx="38" cy="48" rx="1.6" ry="2.4" fill="#FFFFFF" opacity="0.8" stroke="none"/>
    </>
  ),

  "starfruit": () => (
    <>
      <path d="M50 14 L58 42 L88 44 L64 60 L72 86 L50 70 L28 86 L36 60 L12 44 L42 42 Z" fill="#F2D26B"/>
      <path d="M50 30 L54 44 L48 48 L46 38 Z" fill="#E0B946" opacity="0.7" stroke="none"/>
      <circle cx="50" cy="50" r="2" fill="#E0B946" stroke="none"/>
      <path d="M40 50 L60 50" stroke="#E0B946" strokeWidth="1.2" opacity="0.6"/>
      <path d="M50 40 L50 62" stroke="#E0B946" strokeWidth="1.2" opacity="0.6"/>
    </>
  ),

  "cherry": () => (
    <>
      <path d="M44 70 Q40 40 30 22" stroke="#6B4A24" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M60 68 Q60 40 70 22" stroke="#6B4A24" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M30 22 Q44 14 56 22 Q44 30 30 22 Z" fill="#76A55E"/>
      <path d="M32 22 Q44 20 54 22" stroke="#4F7A40" strokeWidth="1" fill="none"/>
      <circle cx="38" cy="72" r="14" fill="#C8323C"/>
      <circle cx="62" cy="70" r="13" fill="#D63D47"/>
      <ellipse cx="32" cy="68" rx="2.4" ry="4" fill="#FFFFFF" opacity="0.7" stroke="none"/>
      <ellipse cx="56" cy="66" rx="2"   ry="3.4" fill="#FFFFFF" opacity="0.7" stroke="none"/>
    </>
  ),

  "chocolate-bar": () => (
    <>
      {/* tall stick body (biscuit core) — single path for clean outline */}
      <path d="M40 6 L60 6 L62 94 L38 94 Z" fill="#E8C797"/>
      {/* chocolate coating — bulk of the upper stick, melts down with little drips */}
      <path d="M40 8 L60 8 L61 72 Q58 78, 55 72 Q51 78, 48 72 Q44 78, 41 72 Z" fill="#5C3A28" stroke="none"/>
      {/* darker streaks across coating */}
      <path d="M44 14 L46 70" stroke="#3E2418" strokeWidth="1.3" opacity="0.7" fill="none" strokeLinecap="round"/>
      <path d="M56 12 L55 70" stroke="#3E2418" strokeWidth="1.3" opacity="0.65" fill="none" strokeLinecap="round"/>
      {/* tiny crumb specks on chocolate */}
      <circle cx="46" cy="28" r="0.9" fill="#3E2418" stroke="none"/>
      <circle cx="54" cy="40" r="0.8" fill="#3E2418" stroke="none"/>
      <circle cx="48" cy="54" r="0.7" fill="#3E2418" stroke="none"/>
      {/* glossy highlight */}
      <path d="M42 14 L43 68" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" fill="none" strokeLinecap="round"/>
      {/* faint biscuit grain on uncoated tip */}
      <path d="M44 82 L45 90 M50 80 L50 91 M55 82 L55 90" stroke="#C9A26F" strokeWidth="0.8" opacity="0.6"/>
    </>
  ),

  "round-cookie": () => (
    <>
      <circle cx="50" cy="50" r="32" fill="#C99659"/>
      <circle cx="38" cy="40" r="4"   fill="#4A2C1E" stroke="none"/>
      <circle cx="60" cy="36" r="3"   fill="#4A2C1E" stroke="none"/>
      <circle cx="64" cy="56" r="4.4" fill="#4A2C1E" stroke="none"/>
      <circle cx="42" cy="62" r="3.6" fill="#4A2C1E" stroke="none"/>
      <circle cx="54" cy="50" r="2.4" fill="#4A2C1E" stroke="none"/>
      <circle cx="36" cy="52" r="1.6" fill="#7A4A30" stroke="none"/>
      <circle cx="58" cy="66" r="1.6" fill="#7A4A30" stroke="none"/>
    </>
  ),

  "square-cookie": () => (
    <>
      <path d="M22 22 H78 Q82 22 82 26 V74 Q82 78 78 78 H22 Q18 78 18 74 V26 Q18 22 22 22 Z" fill="#D2A267"/>
      <circle cx="36" cy="36" r="3.4" fill="#4A2C1E" stroke="none"/>
      <circle cx="58" cy="32" r="2.6" fill="#4A2C1E" stroke="none"/>
      <circle cx="66" cy="52" r="3.6" fill="#4A2C1E" stroke="none"/>
      <circle cx="42" cy="58" r="3"   fill="#4A2C1E" stroke="none"/>
      <circle cx="52" cy="44" r="2.2" fill="#4A2C1E" stroke="none"/>
      <circle cx="34" cy="64" r="1.8" fill="#7A4A30" stroke="none"/>
      <circle cx="62" cy="68" r="2"   fill="#4A2C1E" stroke="none"/>
    </>
  ),

  "vanilla-macaron": () => (
    <>
      <path d="M16 44 Q16 30 50 30 Q84 30 84 44 Q84 50 50 50 Q16 50 16 44 Z" fill="#F4DEB8"/>
      <path d="M18 50 Q22 54 26 50 Q30 56 34 50 Q38 56 42 50 Q46 56 50 50 Q54 56 58 50 Q62 56 66 50 Q70 56 74 50 Q78 54 82 50 V58 H18 Z" fill="#E7CC9A" stroke="none"/>
      <path d="M18 58 H82 V64 Q82 66 80 66 H20 Q18 66 18 64 Z" fill="#F8E7B8" stroke="none"/>
      <path d="M18 66 H82 Q82 78 50 78 Q18 78 18 66 Z" fill="#F4DEB8"/>
      <ellipse cx="36" cy="38" rx="6" ry="2" fill="#FFFFFF" opacity="0.6" stroke="none"/>
    </>
  ),

  "berry-macaron": () => (
    <>
      <path d="M16 44 Q16 30 50 30 Q84 30 84 44 Q84 50 50 50 Q16 50 16 44 Z" fill="#E8A3B8"/>
      <path d="M18 50 Q22 54 26 50 Q30 56 34 50 Q38 56 42 50 Q46 56 50 50 Q54 56 58 50 Q62 56 66 50 Q70 56 74 50 Q78 54 82 50 V58 H18 Z" fill="#D087A0" stroke="none"/>
      <path d="M18 58 H82 V64 Q82 66 80 66 H20 Q18 66 18 64 Z" fill="#B23E5A" stroke="none"/>
      <path d="M18 66 H82 Q82 78 50 78 Q18 78 18 66 Z" fill="#E8A3B8"/>
      <ellipse cx="36" cy="38" rx="6" ry="2" fill="#FFFFFF" opacity="0.6" stroke="none"/>
    </>
  ),

  "cream-swirl": () => (
    <>
      <ellipse cx="50" cy="80" rx="26" ry="6" fill="#F2E2C5"/>
      <path d="M24 78 Q22 64 38 60 Q22 52 38 46 Q22 38 40 32 Q30 24 50 22 Q70 24 60 32 Q78 38 62 46 Q78 52 62 60 Q78 64 76 78 Z" fill="#FFFCF6"/>
      <path d="M30 70 Q34 64 42 64" stroke="#E5D2B0" strokeWidth="1.4" fill="none"/>
      <path d="M30 56 Q34 52 42 50" stroke="#E5D2B0" strokeWidth="1.4" fill="none"/>
      <path d="M34 40 Q38 36 46 34" stroke="#E5D2B0" strokeWidth="1.4" fill="none"/>
      <circle cx="50" cy="20" r="3" fill="#FFFCF6"/>
    </>
  ),

  "mint-leaf": () => (
    <>
      <path d="M20 70 Q14 38 50 18 Q86 38 80 70 Q50 88 20 70 Z" fill="#7BAA60"/>
      <path d="M28 64 Q50 36 72 64" stroke="#4F7A40" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <path d="M50 40 L50 76" stroke="#4F7A40" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M50 50 L36 56 M50 58 L34 66 M50 50 L64 56 M50 58 L66 66" stroke="#4F7A40" strokeWidth="1" strokeLinecap="round"/>
      <path d="M30 56 Q40 42 52 38" stroke="#A8C98C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
    </>
  ),

  "wafer-roll": () => (
    <>
      {/* cylindrical stick */}
      <path d="M36 8 L64 8 L66 92 L34 92 Z" fill="#E8C786"/>
      {/* spiral wraps — curve from left edge down to right edge, repeating */}
      <path d="M36 20 Q50 16, 66 24" stroke="#8C5A2C" strokeWidth="1.6" fill="none"/>
      <path d="M36 32 Q50 28, 66 36" stroke="#8C5A2C" strokeWidth="1.6" fill="none"/>
      <path d="M36 44 Q50 40, 66 48" stroke="#8C5A2C" strokeWidth="1.6" fill="none"/>
      <path d="M36 56 Q50 52, 66 60" stroke="#8C5A2C" strokeWidth="1.6" fill="none"/>
      <path d="M36 68 Q50 64, 66 72" stroke="#8C5A2C" strokeWidth="1.6" fill="none"/>
      <path d="M36 80 Q50 76, 66 84" stroke="#8C5A2C" strokeWidth="1.6" fill="none"/>
      {/* in-between secondary swirl lines for richer texture */}
      <path d="M36 26 Q50 22, 66 30" stroke="#D2A472" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M36 38 Q50 34, 66 42" stroke="#D2A472" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M36 50 Q50 46, 66 54" stroke="#D2A472" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M36 62 Q50 58, 66 66" stroke="#D2A472" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M36 74 Q50 70, 66 78" stroke="#D2A472" strokeWidth="1" fill="none" opacity="0.7"/>
      {/* top spiral end-cap (visible spiral cross-section) */}
      <ellipse cx="50" cy="10" rx="14" ry="4" fill="#D2A472" stroke="none"/>
      <path d="M38 10 Q50 6, 62 10" stroke="#8C5A2C" strokeWidth="1.4" fill="none"/>
      <path d="M42 10 Q50 8, 58 10" stroke="#8C5A2C" strokeWidth="1.1" fill="none"/>
      <circle cx="50" cy="10" r="1.4" fill="#5C3A28" stroke="none"/>
      {/* bottom cap */}
      <ellipse cx="50" cy="92" rx="14" ry="4" fill="#D2A472" stroke="none"/>
      {/* glossy highlight on left side */}
      <path d="M40 16 L42 86" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" fill="none" strokeLinecap="round"/>
    </>
  ),

  "almond-slice": () => (
    <>
      <path d="M50 14 Q72 24 76 50 Q72 76 50 86 Q28 76 24 50 Q28 24 50 14 Z" fill="#E8D2A8"/>
      <path d="M50 18 Q70 28 74 50 Q70 72 50 82" stroke="#D6B98A" strokeWidth="1.4" fill="none"/>
      <path d="M50 14 L50 86" stroke="#C9A876" strokeWidth="1" opacity="0.6"/>
      <ellipse cx="40" cy="40" rx="2.4" ry="6" fill="#FFFFFF" opacity="0.55" stroke="none" transform="rotate(-20 40 40)"/>
    </>
  ),

  /* ---------------- ICE-CREAM SCOOPS (organic, flat bottom, melt drips) ---------------- */

  "scoop-vanilla": () => (
    <ScoopBody base="#F4E6C4" light="#FFF6D9" ridge="#C99553" accents={
      <>
        <circle cx="44" cy="46" r="0.9" fill="#5C3A28" stroke="none"/>
        <circle cx="58" cy="52" r="0.8" fill="#5C3A28" stroke="none"/>
        <circle cx="38" cy="54" r="0.7" fill="#5C3A28" stroke="none"/>
        <circle cx="62" cy="42" r="0.7" fill="#5C3A28" stroke="none"/>
        <circle cx="50" cy="40" r="0.6" fill="#5C3A28" stroke="none"/>
      </>
    } />
  ),

  "scoop-chocolate": () => (
    <ScoopBody base="#6B4226" light="#8C5A37" ridge="#3E2418" accents={
      <>
        <circle cx="44" cy="50" r="1.6" fill="#3E2418" stroke="none" opacity="0.85"/>
        <circle cx="58" cy="46" r="1.2" fill="#3E2418" stroke="none" opacity="0.85"/>
        <circle cx="64" cy="56" r="1.4" fill="#3E2418" stroke="none" opacity="0.85"/>
        <circle cx="36" cy="44" r="1"   fill="#3E2418" stroke="none" opacity="0.7"/>
      </>
    } />
  ),

  "scoop-matcha": () => (
    <ScoopBody base="#A8B47C" light="#C3CE96" ridge="#5C7440" accents={
      <>
        <circle cx="46" cy="50" r="0.9" fill="#5C7440" stroke="none"/>
        <circle cx="58" cy="44" r="0.8" fill="#5C7440" stroke="none"/>
        <circle cx="38" cy="44" r="0.7" fill="#5C7440" stroke="none"/>
        <circle cx="54" cy="56" r="0.8" fill="#5C7440" stroke="none"/>
        <circle cx="64" cy="50" r="0.7" fill="#5C7440" stroke="none"/>
      </>
    } />
  ),

  "scoop-strawberry": () => (
    <ScoopBody base="#ECA3A3" light="#F4BFBF" ridge="#C84852" accents={
      <>
        <circle cx="44" cy="50" r="2"   fill="#C84852" stroke="none"/>
        <circle cx="60" cy="46" r="1.6" fill="#C84852" stroke="none"/>
        <circle cx="52" cy="56" r="1.4" fill="#C84852" stroke="none"/>
        <circle cx="38" cy="40" r="1"   fill="#C84852" stroke="none"/>
        <ellipse cx="44" cy="50" rx="0.4" ry="0.6" fill="#FFE9B0" stroke="none"/>
        <ellipse cx="60" cy="46" rx="0.4" ry="0.6" fill="#FFE9B0" stroke="none"/>
      </>
    } />
  ),

  "scoop-mint-choco": () => (
    <ScoopBody base="#B8DDC4" light="#D4EAD8" ridge="#5A8A6E" accents={
      <>
        <rect x="40" y="46" width="6" height="3.2" rx="1" fill="#4A2C1E" stroke="none" transform="rotate(20 43 48)"/>
        <rect x="58" y="52" width="5" height="3"   rx="1" fill="#4A2C1E" stroke="none" transform="rotate(-15 60 53)"/>
        <rect x="62" y="40" width="4" height="2.6" rx="0.8" fill="#4A2C1E" stroke="none" transform="rotate(40 64 42)"/>
        <rect x="36" y="56" width="4" height="2.6" rx="0.8" fill="#4A2C1E" stroke="none" transform="rotate(-10 38 58)"/>
        <rect x="48" y="40" width="3.4" height="2.2" rx="0.6" fill="#4A2C1E" stroke="none"/>
      </>
    } />
  ),
};

/* ---------- Common sticker wrapper ---------- */
function Sticker({ id, size = 72, rotation = 0, scale = 1 }) {
  const Render = S[id];
  if (!Render) return null;
  const sz = size * scale;
  return (
    <div className="sticker" style={{ width: sz, height: sz, transform: `rotate(${rotation}deg)` }}>
      <svg viewBox="0 0 100 100" width={sz} height={sz}>
        <g paintOrder="stroke fill" stroke="#FFFDF7" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
          <Render />
        </g>
      </svg>
    </div>
  );
}

/* ---------- BaseLayer — horizontal band rendered inside the bowl ---------- */
function BaseLayer({ ing, w, h }) {
  const W = w, H = h;
  const recipes = {
    "coffee-jelly":      { kind:"shine",  main:"#4A2C1E", shine:"#6B3F2A", accent:"#2E1A11" },
    "milk-jelly":        { kind:"shine",  main:"#F4E6CC", shine:"#FFF7E2", accent:"#E7D3AE" },
    "fruit-jelly":       { kind:"shine",  main:"#F2A480", shine:"#FBC6AC", accent:"#D86E55" },
    "sponge-cake":       { kind:"dotted", main:"#F0CE7E", accent:"#C99553" },
    "strawberry-mousse": { kind:"wavy",   main:"#ECA3A3", accent:"#D04F5A", stroke:"#D67D7D" },
    "matcha-mousse":     { kind:"wavy",   main:"#B6C383", accent:"#6F8744", stroke:"#8FA15C" },
    "vanilla-mousse":    { kind:"wavy",   main:"#F2DEB4", accent:"#7A5C32", stroke:"#D6BC85" },
    "chocolate-mousse":  { kind:"wavy",   main:"#5C3A28", accent:"#3E2418", stroke:"#3E2418" },
    "whipped-cream":     { kind:"piped",  main:"#FFFCF6", accent:"#E8D9BC" },
    "mint-choco-cream":  { kind:"piped",  main:"#C6E3CE", chip:"#4A2C1E" },
    "yogurt":            { kind:"wavy",   main:"#FCF6E8", accent:"#E7D8B6", stroke:"#E7D8B6", flat:true },
    "granola":           { kind:"crumb",  main:"#C9A26F", accent:"#8C5A2C", flake:"#F0D9B5" },
    "cookie-crumbs":     { kind:"crumb",  main:"#B07A47", accent:"#3E2418", flake:"#D4A47A" },
  };
  const r = recipes[ing.id] || { kind:"shine", main:"#DDD", shine:"#EEE" };

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} preserveAspectRatio="none" style={{ display:"block", overflow:"visible" }}>
      {r.kind === "shine"  && <ShineLayer  W={W} H={H} r={r}/>}
      {r.kind === "dotted" && <DottedLayer W={W} H={H} r={r}/>}
      {r.kind === "wavy"   && <WavyLayer   W={W} H={H} r={r}/>}
      {r.kind === "piped"  && <PipedLayer  W={W} H={H} r={r}/>}
      {r.kind === "crumb"  && <CrumbLayer  W={W} H={H} r={r}/>}
      {/* hairline separator at bottom */}
      <line x1="0" y1={H - 0.5} x2={W} y2={H - 0.5} stroke="rgba(58,42,31,0.18)" strokeWidth="1"/>
    </svg>
  );
}

function ShineLayer({ W, H, r }) {
  return (
    <>
      <rect x="0" y="0" width={W} height={H} fill={r.main}/>
      <rect x="0" y="0" width={W} height={H * 0.18} fill={r.shine} opacity="0.85"/>
      {r.accent && (
        <>
          <circle cx={W*0.18} cy={H*0.55} r={H*0.10} fill={r.accent} opacity="0.6"/>
          <circle cx={W*0.42} cy={H*0.72} r={H*0.07} fill={r.accent} opacity="0.55"/>
          <circle cx={W*0.66} cy={H*0.50} r={H*0.09} fill={r.accent} opacity="0.55"/>
          <circle cx={W*0.86} cy={H*0.68} r={H*0.06} fill={r.accent} opacity="0.5"/>
        </>
      )}
    </>
  );
}

function DottedLayer({ W, H, r }) {
  const pts = [];
  for (let i = 0; i < Math.max(6, Math.round(W/22)); i++) {
    pts.push({
      x: (i + 0.5) * (W / Math.max(6, Math.round(W/22))) + ((i * 7) % 11) - 5,
      y: H * (0.3 + ((i * 13) % 50) / 100),
      r: 0.9 + ((i * 5) % 7) / 6,
    });
  }
  return (
    <>
      <rect x="0" y="0" width={W} height={H} fill={r.main}/>
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={r.accent} opacity="0.85"/>
      ))}
    </>
  );
}

function WavyLayer({ W, H, r }) {
  // wavy top, flat or wavy bottom is just baseline (svg clipped)
  const baseY = H * 0.32;
  const humps = Math.max(3, Math.round(W / 38));
  let d = `M 0 ${baseY}`;
  for (let i = 0; i < humps; i++) {
    const x2 = (W / humps) * (i + 1);
    const cx = (W / humps) * (i + 0.5);
    d += ` Q ${cx} ${-2}, ${x2} ${baseY}`;
  }
  d += ` L ${W} ${H} L 0 ${H} Z`;
  return (
    <>
      <path d={d} fill={r.main}/>
      <path d={`M 0 ${baseY + 1.2} ${Array.from({length:humps}).map((_,i)=>{
        const x2 = (W / humps) * (i + 1);
        const cx = (W / humps) * (i + 0.5);
        return `Q ${cx} ${-2 + 1.2}, ${x2} ${baseY + 1.2}`;
      }).join(" ")}`} stroke={r.stroke} strokeWidth="1.4" fill="none" opacity="0.75"/>
      {r.accent && (
        <>
          <circle cx={W*0.16} cy={H*0.7}  r={Math.min(2.6, H*0.10)} fill={r.accent} opacity="0.75"/>
          <circle cx={W*0.40} cy={H*0.82} r={Math.min(2.0, H*0.08)} fill={r.accent} opacity="0.7"/>
          <circle cx={W*0.62} cy={H*0.68} r={Math.min(2.4, H*0.10)} fill={r.accent} opacity="0.75"/>
          <circle cx={W*0.85} cy={H*0.80} r={Math.min(1.8, H*0.07)} fill={r.accent} opacity="0.7"/>
        </>
      )}
    </>
  );
}

function PipedLayer({ W, H, r }) {
  // cloud-shaped top (multiple overlapping semicircles), flat below
  const puffs = Math.max(5, Math.round(W / 26));
  const baseY = H * 0.45;
  const puffR = (W / puffs) * 0.62;
  return (
    <>
      <rect x="0" y={baseY} width={W} height={H - baseY} fill={r.main}/>
      {Array.from({ length: puffs }).map((_, i) => {
        const cx = (W / puffs) * (i + 0.5);
        const cy = baseY - (i % 2 === 0 ? puffR * 0.55 : puffR * 0.3);
        return <circle key={i} cx={cx} cy={cy} r={puffR} fill={r.main}/>;
      })}
      {/* highlight strokes */}
      {Array.from({ length: puffs }).map((_, i) => {
        const cx = (W / puffs) * (i + 0.5);
        const cy = baseY - (i % 2 === 0 ? puffR * 0.55 : puffR * 0.3);
        return (
          <path key={i} d={`M ${cx - puffR*0.4} ${cy + puffR*0.1} Q ${cx - puffR*0.1} ${cy - puffR*0.4} ${cx + puffR*0.3} ${cy - puffR*0.2}`}
                stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        );
      })}
      {r.chip && (
        <>
          <rect x={W*0.18} y={H*0.65} width="6" height="3" rx="1" fill={r.chip} transform={`rotate(20 ${W*0.18 + 3} ${H*0.65 + 1.5})`}/>
          <rect x={W*0.42} y={H*0.78} width="5" height="2.6" rx="0.8" fill={r.chip} transform={`rotate(-12 ${W*0.42 + 2.5} ${H*0.78 + 1.3})`}/>
          <rect x={W*0.66} y={H*0.68} width="5" height="3" rx="0.8" fill={r.chip} transform={`rotate(35 ${W*0.66 + 2.5} ${H*0.68 + 1.5})`}/>
          <rect x={W*0.85} y={H*0.76} width="4" height="2.6" rx="0.6" fill={r.chip} transform={`rotate(-25 ${W*0.85 + 2} ${H*0.76 + 1.3})`}/>
        </>
      )}
    </>
  );
}

function CrumbLayer({ W, H, r }) {
  const chunks = Math.max(8, Math.round(W / 14));
  const items = Array.from({ length: chunks }).map((_, i) => ({
    cx: (i + 0.4) * (W / chunks) + ((i * 7) % 11) - 5,
    cy: H * (0.3 + ((i * 19) % 60) / 100),
    rx: 2.2 + ((i * 5) % 9) / 4,
    ry: 1.4 + ((i * 11) % 7) / 5,
    rot: (i * 23) % 60 - 30,
    shade: (i % 3 === 0 ? r.accent : (i % 3 === 1 ? r.main : r.flake)),
  }));
  return (
    <>
      <rect x="0" y="0" width={W} height={H} fill={r.main}/>
      {items.map((p, i) => (
        <ellipse key={i} cx={p.cx} cy={p.cy} rx={p.rx} ry={p.ry}
                 fill={p.shade}
                 transform={`rotate(${p.rot} ${p.cx} ${p.cy})`}
                 opacity={i % 4 === 0 ? 0.7 : 0.9}/>
      ))}
    </>
  );
}

/* ---------- Catalog ---------- */
const INGREDIENTS = [
  // BASE
  { id: "coffee-jelly",     cat: "base", jp: "コーヒーゼリー", zh: "咖啡冻",       size: 86 },
  { id: "milk-jelly",       cat: "base", jp: "ミルクゼリー",   zh: "奶冻",         size: 86 },
  { id: "fruit-jelly",      cat: "base", jp: "フルーツゼリー", zh: "果冻",         size: 86 },
  { id: "sponge-cake",      cat: "base", jp: "スポンジ",       zh: "海绵蛋糕",     size: 86 },
  { id: "strawberry-mousse",cat: "base", jp: "苺ムース",       zh: "草莓慕斯",     size: 88 },
  { id: "matcha-mousse",    cat: "base", jp: "抹茶ムース",     zh: "抹茶慕斯",     size: 88 },
  { id: "vanilla-mousse",   cat: "base", jp: "バニラムース",   zh: "香草慕斯",     size: 88 },
  { id: "chocolate-mousse", cat: "base", jp: "ショコラムース", zh: "巧克力慕斯",   size: 88 },
  { id: "whipped-cream",    cat: "base", jp: "ホイップ",       zh: "鲜奶油",       size: 90 },
  { id: "mint-choco-cream", cat: "base", jp: "ミントチョコ",   zh: "薄荷巧克力奶油", size: 90 },
  { id: "granola",          cat: "base", jp: "グラノラ",       zh: "燕麦脆",       size: 80 },
  { id: "cookie-crumbs",    cat: "base", jp: "クッキー粒",     zh: "饼干粒",       size: 80 },
  { id: "yogurt",           cat: "base", jp: "ヨーグルト",     zh: "酸奶",         size: 88 },

  // TOPPINGS
  { id: "pudding",          cat: "top",  jp: "プリン",         zh: "布丁",         size: 80 },
  { id: "strawberry",       cat: "top",  jp: "苺",             zh: "草莓",         size: 70 },
  { id: "blueberry",        cat: "top",  jp: "ブルーベリー",   zh: "蓝莓",         size: 54 },
  { id: "starfruit",        cat: "top",  jp: "スターフルーツ", zh: "杨桃",         size: 74 },
  { id: "cherry",           cat: "top",  jp: "さくらんぼ",     zh: "樱桃",         size: 76 },
  { id: "chocolate-bar",    cat: "top",  jp: "ショコラ棒",     zh: "巧克力棒",     size: 74 },
  { id: "round-cookie",     cat: "top",  jp: "丸クッキー",     zh: "圆形小饼干",   size: 70 },
  { id: "square-cookie",    cat: "top",  jp: "角クッキー",     zh: "方形小饼干",   size: 70 },
  { id: "vanilla-macaron",  cat: "top",  jp: "バニラマカロン", zh: "香草马卡龙",   size: 78 },
  { id: "berry-macaron",    cat: "top",  jp: "ベリーマカロン", zh: "莓果马卡龙",   size: 78 },
  { id: "cream-swirl",      cat: "top",  jp: "ホイップ山",     zh: "鲜奶油堆",     size: 80 },
  { id: "mint-leaf",        cat: "top",  jp: "ミントの葉",     zh: "薄荷叶",       size: 60 },
  { id: "wafer-roll",       cat: "top",  jp: "ウエハース",     zh: "威化卷",       size: 78 },
  { id: "almond-slice",     cat: "top",  jp: "アーモンド片",   zh: "杏仁片",       size: 56 },

  // ICE-CREAM SCOOPS
  { id: "scoop-vanilla",    cat: "ice",  jp: "バニラ",         zh: "香草冰激凌",     size: 88 },
  { id: "scoop-chocolate",  cat: "ice",  jp: "ショコラ",       zh: "巧克力冰激凌",   size: 88 },
  { id: "scoop-matcha",     cat: "ice",  jp: "抹茶",           zh: "抹茶冰激凌",     size: 88 },
  { id: "scoop-strawberry", cat: "ice",  jp: "苺",             zh: "草莓冰激凌",     size: 88 },
  { id: "scoop-mint-choco", cat: "ice",  jp: "ミントチョコ",   zh: "薄荷巧克力冰激凌", size: 88 },
];

const findIng = (id) => INGREDIENTS.find(i => i.id === id);

Object.assign(window, { Sticker, BaseLayer, INGREDIENTS, findIng });
