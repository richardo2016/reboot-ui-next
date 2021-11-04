import React from 'react';

import Color from 'color';

import { ThemeProvider, CSSProperties } from 'styled-components';

import { ICMThemeProps, IThemePalette } from './type';
import { DEFAULT_THEME_COLOR_MAP } from '.';

const pcHtmlThemeColorMap = {
  green: '#3bba7d',
  blue: '#44aaf8',
  golden: '#d89f55',
  pink: '#fa7aa7',
};

/**
 * @description 基于默认的主题色调色盘, 扩展一个单独的调色盘
 */
const changeColorMap = (
  skinName: ICMThemeProps['skinName'],
  featured: ICMThemeProps['featured'],
  customPalette: Partial<IThemePalette>,
): IThemePalette => {
  let color: CSSProperties['color'] = '#ec4141';

  if (pcHtmlThemeColorMap.hasOwnProperty(skinName)) {
    color = (pcHtmlThemeColorMap as any)[skinName] || skinName;
  }
  const isLightFeatured = featured.indexOf('light') >= 0;

  const colorMap = { ...DEFAULT_THEME_COLOR_MAP.light };

  if (isLightFeatured) {
    const themeColor = Color(color);
    const red = Math.floor(themeColor.red());
    const green = Math.floor(themeColor.green());
    const blue = Math.floor(themeColor.blue());

    colorMap.theme1 = `rgba(${red},${green},${blue},1)`; // 主题色，背景色，#ec4141
    colorMap.theme2 = `rgba(${red - 21},${green - 12},${blue - 12},1)`; // hover主题色
    colorMap.themefont = `rgba(${red},${green},${blue},1)`; // 主题字体色 #ec4141 80%
    colorMap.tmlinebtnbg = `rgba(${red},${green},${blue},0.06)`; // 线框btn hover颜色 #ec4141 80%
    colorMap.themenavbg = `rgba(${red},${green},${blue},1)`; // 顶部导航栏颜色
    colorMap.themenavfont = 'rgba(255,255,255,1)'; // 导航栏字体色
    colorMap.themenavicon = 'rgba(255,255,255,0.8)'; // 导航栏字体色
    colorMap.themenavfont2 = 'rgba(255,255,255,0.4)';
    colorMap.themebg1 = `rgba(${red},${green},${blue},0.1)`;
    colorMap.themebg2 = `rgba(${red},${green},${blue},0.2)`;

    if (skinName === 'pub' || skinName === 'auto') {
      colorMap.themenavbg = 'rgba(0,0,0,0.04)';
      colorMap.themenavfont = 'rgba(0,0,0,0.8)'; // 导航栏字体色
      colorMap.themenavicon = 'rgba(0,0,0,0.6)'; // 导航栏字体色
      colorMap.themenavfont2 = 'rgba(0,0,0,0.4)';
    }
  }

  const key = isLightFeatured ? 'light' : 'dark';

  return {
    ...DEFAULT_THEME_COLOR_MAP[key],
    ...colorMap,
    ...customPalette,
  };
};

function arraify<T>(itemOrList: T | T[]): T[] {
  return Array.isArray(itemOrList) ? itemOrList : [];
}

/**
 * @description 主题 Provider
 */
export function KitThemeProvider({
  skinName = 'default',
  featured = 'pc-light',
  color = '',
  fontFamily = '',
  fontSize = 12,
  animation = '',
  children = null,
  palette = null,
}: React.Props<{}> &
  Omit<Partial<ICMThemeProps>, 'curPalette'> & {
    palette?: ICMThemeProps['curPalette'] | null;
  }) {
  const curPalette = changeColorMap(skinName, featured, palette || {});

  return (
    <ThemeProvider
      theme={{
        featured,
        color,
        fontFamily: fontFamily,
        fontSize: fontSize,
        animation,
        skinName,
        curPalette,
      }}
    >
      {children}
      {/* <StyleSheetManager
      // enableCSSOMInjection={NEXT_APP_CONF.speedMode}
      >
        {arraify(children).map(child => child || null)}
      </StyleSheetManager> */}
    </ThemeProvider>
  );
}

export default KitThemeProvider;
