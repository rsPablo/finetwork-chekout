import { createStitches } from "@stitches/react";
import theme from "../styles/theme";

export const {
  styled,
  css,
  theme: createTheme,
  keyframes,
  globalCss: globalStyles,
  getCssText,
} = createStitches({
  theme,
  media: {
    mobile: `(min-width: ${theme.sizes.mobile})`,
    tablet: `(min-width: ${theme.sizes.tablet})`,
    tabletL: `(min-width: ${theme.sizes.tabletL})`,
    tabletXl: `(min-width: ${theme.sizes.tabletXl})`,
    desktop: `(min-width: ${theme.sizes.desktop})`,
    desktopXl: `(min-width: ${theme.sizes["desktopXl"]})`,
    desktop2Xl: `(min-width: ${theme.sizes["desktop2Xl"]})`,
  },
});
