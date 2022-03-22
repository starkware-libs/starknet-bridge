export const Breakpoints = {
  /** Alpha disclaimer toast
   *  For XL screens (width & height) aligned to bottom-left.
   *  For small-widths screens aligned to bottom-center.
   *  For small-heights screens aligned to bottom-right.
   */
  largeScreens: windowSize => windowSize.width >= 1200 && windowSize.height >= 1024,
  smallHeightScreens: windowSize => windowSize.height < 1024,
  largeHeightScreens: windowSize => windowSize.height >= 1024,
  largeWidthScreens: windowSize => windowSize.width >= 1300,

  /** header & footer heights are also effected by that screen-height breakpoint.
   *  WalletButtons has small width for small screens:
   */
  smallScreens: windowSize => windowSize.height < 1024 || windowSize.width < 768
};
