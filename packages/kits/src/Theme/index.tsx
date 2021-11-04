import { DEFAULT_THEME_COLOR_MAP } from './colorMap';

import type { IDefaultThemePaletteDict, IThemePalette } from './type';

export { DEFAULT_THEME_COLOR_MAP };

export function makeThemeColorMap(colorMap: {
  [k: string]: IThemePalette;
}): IDefaultThemePaletteDict & typeof colorMap {
  return {
    ...JSON.parse(JSON.stringify(DEFAULT_THEME_COLOR_MAP)),
    ...colorMap,
  };
}

export { KitThemeProvider } from './Provider';
