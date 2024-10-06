export const COLORS = {
  white: "#FFFFFF",
  offwhite: "#F3F3F3",
  offblack: "#33344B",
  lightblue: "#D8E6F2",
  secondaryblue: {
    100: "#CEE2FF",
    500: "#A1C7FF",
    900: "#7BB0FF",
  },
  secondaryturquoise: {
    100: "#CFEFEC",
    500: "#88E5DD",
    900: "#22CEBD",
  },
  secondarygreen: {
    100: "#F2F0BC",
    500: "#E6E268",
    900: "#DBD62A",
  },
};

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  sansSerif:
    '"Inter", "Helvetica Neue", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
};