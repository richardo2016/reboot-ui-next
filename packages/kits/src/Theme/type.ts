import type { CSSProperties } from 'styled-components';

type IColorRgba = `rgba(${number}, ${number}, ${number}, ${number})`;
type IColorRgb = `rgb(${number}, ${number}, ${number})`;
type IColorHex = `#${number | string}`;

export type ICSSColorString = CSSProperties['color'];

export interface IThemePalette {
  // 主题色theme
  theme1: ICSSColorString; // 主题色，背景色，#ec4141
  theme2: ICSSColorString; // hover主题色
  themefont: ICSSColorString; // 红色字体色
  tmlinebtnbg: ICSSColorString; // 线框btn hover颜色
  themenavbg: ICSSColorString;
  themenavfont: ICSSColorString; // 导航栏字体色
  themenavicon: ICSSColorString; // 导航栏字体色
  themenavfont2: ICSSColorString; // 导航栏搜索框 placeholer
  themebg1: ICSSColorString; // 播客category背景色
  themebg2: ICSSColorString; // 播客hover category背景色

  // 链接色
  lk1: ICSSColorString; // 文字链接,深蓝，#235D9D
  lk1hover: ICSSColorString;
  lk2: ICSSColorString; // 文字链接,浅蓝，#35A1DD
  lk2hover: ICSSColorString;

  // 下基础字体色 fontcolor
  fc1: ICSSColorString; // 1级标题色
  fc2: ICSSColorString; // 2级标题色 #333
  fc3: ICSSColorString; // 3级标题色 #666
  fc4: ICSSColorString; // 4级标题色 #888/#999
  fc5: ICSSColorString; // 5级标题色 #ccc
  fc6: ICSSColorString; // 警告字色 红色

  fcwhite: ICSSColorString; // 白色字体色

  // 基础背景色background
  bg0: ICSSColorString; // 主背景色
  bg1: ICSSColorString; // 背景色1
  bg2: ICSSColorString; // 背景色2

  bg3: ICSSColorString; // 背景色2
  bg4: ICSSColorString; // 浮层背景色
  bg5: ICSSColorString; // 灰底搜索框输入框颜色
  bg6: ICSSColorString; // 扫码登录
  bg7: ICSSColorString; // 白底搜索框输入框颜色
  bg8: ICSSColorString; // 背景1hover色
  bg9: ICSSColorString; // 列表选中背景色
  bg10: ICSSColorString; // 顶部栏搜索框输入框颜色
  bg11: ICSSColorString; // at浮层选中背景色
  bg12: ICSSColorString; // 评论btn背景色
  bg13: ICSSColorString; // 软件内歌词背景
  bg14: ICSSColorString; // 播放条disabled部分rgba(0,0,0,0.4)的实色
  bg15: ICSSColorString; // 滚动条
  bg16: ICSSColorString; // 滚动条hover
  bg17: ICSSColorString; // mock menu
  bg18: ICSSColorString; // 评论btn背景色hover

  bgcover: ICSSColorString; // 封面背景图背景色
  bgcover1: ICSSColorString; // 封面背景图背景色

  // 基础按钮边框色
  border1: ICSSColorString;
  border2: ICSSColorString; // 白色边框，红色按钮用到
  border3: ICSSColorString; // input框边框色
  border4: ICSSColorString; // 文件夹虚线色
  border5: ICSSColorString;
  border6: ICSSColorString; // 播放条按钮白边
  border7: ICSSColorString; // 实线色
  border8: ICSSColorString; // 导航栏dot边框色
  border9: ICSSColorString; // 播放详情页按钮边框

  // 分割线
  line1: ICSSColorString;
  line2: ICSSColorString;

  // 会员色
  vip: ICSSColorString;

  // boxshadow颜色
  shadow1: ICSSColorString;

  // 图标颜色
  dlded: ICSSColorString; // 下载完成
  icnBlue: ICSSColorString; // 下载，进度
}

export type IThemePlatteName = keyof IThemePalette;

// 默认的主题类别
export type IDefaultThemeType = 'light' | 'dark';

export type IDefaultThemePaletteDict = {
  light: IThemePalette;
  dark: IThemePalette;
};

export type ICMThemeProps = {
  /**
   * @description 皮肤名 string
   *
   * @default 'default'
   */
  skinName: 'default' | 'pub' | 'auto' | string;
  /**
   * @description 特征名
   *
   * @default 在 win32 上是 'pc-light', 在 macOS 上是 'osx-light'
   */
  featured:
    | 'pc-light'
    | 'osx-light'
    | 'pc-dark'
    | 'osx-dark'
    | `${string}${IDefaultThemeType}${string}`;
  /**
   * @description 颜色值
   */
  color: ICSSColorString;
  /**
   * @description 已弃用, demo 背景, 无用
   */
  demoBackground: string;
  /**
   * @description 字体
   */
  fontFamily: string;
  /**
   * @description 字体大小
   */
  fontSize: CSSProperties['fontSize'];
  /**
   * @description css animation
   */
  animation: CSSProperties['animation'];
  /**
   * @description 当前主题上下文下的 palette 对象
   *
   * @default null
   */
  curPalette: IThemePalette;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    featured: ICMThemeProps['featured'];
    color: ICMThemeProps['color'];
    demoBackground?: ICMThemeProps['demoBackground'];
    fontFamily: ICMThemeProps['fontFamily'];
    fontSize: ICMThemeProps['fontSize'];
    animation: ICMThemeProps['animation'];
    skinName: ICMThemeProps['skinName'];
    curPalette: ICMThemeProps['curPalette'];
    palette?: IDefaultThemePaletteDict;
  }
}
