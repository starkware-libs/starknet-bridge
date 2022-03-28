export const Breakpoint = {
  MOBILE: 0,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1200
};

export const isMobile = breakpoint => {
  return Breakpoint[breakpoint] === Breakpoint.MOBILE;
};

export const isTablet = breakpoint => {
  return Breakpoint[breakpoint] === Breakpoint.TABLET;
};
