import { DEFAULT_THEME_COLOR_MAP } from './colorMap';
import type { ICSSColorString, IThemePlatteName } from './type';

type IThemePlatteKey = IThemePlatteName;
type TIsLight = boolean;
/**
 * @description 取色工厂函数, 根据当前主题, 提取调色板的具体颜色值
 *
 * 其返回值一般用于 styled-components 的 css string-literal 中
 */
export function colorLightFactory(keyArg: IThemePlatteKey, isLight: TIsLight = false) {
  return ({
    theme: themeProp,
    cl: clProp,
  }: {
    theme: import('styled-components').DefaultTheme;
    cl?: IThemePlatteKey | [IThemePlatteKey, TIsLight];
  }): ICSSColorString => {
    let key;
    let common: boolean;

    if (Array.isArray(clProp)) {
      key = clProp[0];
      common = !!clProp[1];
    } else {
      key = clProp || keyArg;
      common = !!isLight;
    }

    if (common) {
      return (DEFAULT_THEME_COLOR_MAP.light as any)[key] || '';
    }

    return themeProp?.curPalette?.[key] || '';
  };
}

export const cl = colorLightFactory;
