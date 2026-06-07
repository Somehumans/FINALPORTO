export const LOGO_MORPH_START = 24;
export const LOGO_MORPH_END = 440;

export const getLogoMorphProgress = (scrollY) =>
  Math.min(
    Math.max((scrollY - LOGO_MORPH_START) / (LOGO_MORPH_END - LOGO_MORPH_START), 0),
    1
  );

/** Smooth 0→1 without overshoot — good for position & scale */
export const smoothstep = (t) => t * t * (3 - 2 * t);

/** Gentle ease-in-out for the full morph arc */
export const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - (-2 * t + 2) ** 4 / 2;

export const getHeroLogoOpacity = (morphP) => (morphP > 0.04 ? 0 : 1);
