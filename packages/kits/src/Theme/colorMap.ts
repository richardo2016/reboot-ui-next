import { IDefaultThemePaletteDict } from './type';

export const DEFAULT_THEME_COLOR_MAP: IDefaultThemePaletteDict = {
  light: {
    // 新版视觉颜色整理
    // 主题色theme
    theme1: '#ec4141', // 主题色，背景色，#ec4141
    theme2: 'rgba(215,53,53,1)', // hover主题色
    themefont: 'rgba(236,65,65,1)', // 红色字体色
    tmlinebtnbg: 'rgba(236,65,65,0.06)', // 线框btn hover颜色
    themenavbg: 'rgba(0,0,0,0.04)',
    themenavfont: 'rgba(0,0,0,0.8)', // 导航栏字体色
    themenavicon: 'rgba(0,0,0,0.6)', // 导航栏字体色
    themenavfont2: 'rgba(0,0,0,0.4)', // 导航栏搜索框 placeholer
    themebg1: 'rgba(236,65,65,0.1)', // 播客category背景色
    themebg2: 'rgba(236,65,65,0.2)', // 播客hover category背景色

    // 链接色link
    lk1: 'rgba(35,93,157,0.8)', // 文字链接,深蓝，#235D9D
    lk1hover: 'rgba(35,93,157,1)',
    lk2: 'rgba(53,161,221,0.8)', // 文字链接,浅蓝，#35A1DD
    lk2hover: 'rgba(53,161,221,1)',

    // light下基础字体色fontcolor
    fc1: 'rgba(0,0,0,1)', // 1级标题色
    fc2: 'rgba(0,0,0,0.8)', // 2级标题色 #333
    fc3: 'rgba(0,0,0,0.6)', // 3级标题色 #666
    fc4: 'rgba(0,0,0,0.4)', // 4级标题色 #888/#999
    fc5: 'rgba(0,0,0,0.2)', // 5级标题色 #ccc
    fc6: '#b82525', // 警告字色 红色

    fcwhite: '#fff', // 白色字体色

    // 基础背景色background
    bg0: '#fff', // 主背景色
    bg1: 'rgba(0,0,0,0.05)', // 背景色1
    bg2: 'rgba(0,0,0,0.02)', // 背景色2

    bg3: 'rgba(255,255,255,0.02)', // 背景色2
    bg4: '#fff', // 浮层背景色
    bg5: 'rgba(0,0,0,0.06)', // 灰底搜索框输入框颜色
    bg6: 'rgba(0,0,0,0.4)', // 扫码登录
    bg7: '#fff', // 白底搜索框输入框颜色
    bg8: 'rgba(0,0,0,0.1)', // 背景1hover色
    bg9: 'rgba(0,0,0,0.08)', // 列表选中背景色
    bg10: 'rgba(0,0,0,0.04)', // 顶部栏搜索框输入框颜色
    bg11: 'rgba(0, 0, 0, 0.07)', // at浮层选中背景色
    bg12: '#f7f7f7', // 评论btn背景色
    bg13: 'rgba(255, 255, 255, 0.95)', // 软件内歌词背景
    bg14: '#999', // 播放条disabled部分rgba(0,0,0,0.4)的实色
    bg15: 'rgba(0, 0, 0, 0.16)', // 滚动条
    bg16: 'rgba(0, 0, 0, 0.26)', // 滚动条hover
    bg17: 'rgba(255, 255, 255, 1)', // mock menu
    bg18: '#ededed', // 评论btn背景色hover

    bgcover: '#e0e0e0', // 封面背景图背景色
    bgcover1: '#e0e0e0', // 封面背景图背景色

    // 基础按钮边框色
    border1: 'rgba(0,0,0,0.2)',
    border2: 'rgba(255,255,255,0.2)', // 白色边框，红色按钮用到
    border3: 'rgba(0,0,0,0.12)', // input框边框色
    border4: 'rgba(0,0,0,0.1)', // 文件夹虚线色
    border5: 'rgba(0,0, 0,0.05)',
    border6: 'rgba(0,0,0,0.1)', // 播放条按钮白边
    border7: '#bbb', // 实线色
    border8: '#f5f5f5', // 导航栏dot边框色
    border9: '#f7f7f7', // 播放详情页按钮边框

    // 分割线
    line1: 'rgba(0,0,0,0.06)',
    line2: '#ddd',

    // 会员色
    vip: '#fe672e',

    // boxshadow颜色
    shadow1: 'rgba(0,0,0,0.3)',

    // 图标颜色
    dlded: '#80BF66', // 下载完成
    icnBlue: '#507daf', // 下载，进度
  },
  dark: {
    // 新版视觉颜色整理
    // 主题色
    theme1: '#ec4141', // 主题色，背景色，#ec4141
    theme2: 'rgba(234,46,46,1)', // hover主题色
    themefont: 'rgba(236,65,65,1)', // 红色字体色 #ec4141 80%
    tmlinebtnbg: 'rgba(236,65,65,0.06)', // 线框btn hover颜色 #ec4141 80%
    themenavbg: 'rgba(255,255,255,0.04)',
    themenavfont: 'rgba(255,255,255,1)', // 导航栏字体色
    themenavicon: 'rgba(255,255,255,0.8)', // 导航栏字体色
    themenavfont2: 'rgba(255,255,255,0.4)', // 导航栏搜索框 placeholer
    themebg1: 'rgba(236,65,65,0.1)', // 播客category背景色
    themebg2: 'rgba(236,65,65,0.2)', // 播客hover category背景色

    // 链接色
    lk1: 'rgba(80,125,175,0.8)', // 文字链接,深蓝，#507daf
    lk1hover: 'rgba(80,125,175,1)',
    lk2: 'rgba(90,181,231,0.8)', // 文字链接,浅蓝，#5ab5e7
    lk2hover: 'rgba(90,181,231,1)',

    fcwhite: '#fff', // 白色字体色

    // dark下基础字体色
    fc1: 'rgba(255,255,255,1)', // 1级标题色
    fc2: 'rgba(255,255,255,0.8)', // 2级标题色
    fc3: 'rgba(255,255,255,0.6)', // 3级标题色
    fc4: 'rgba(255,255,255,0.4)', // 4级标题色
    fc5: 'rgba(255,255,255,0.2)', // 5级标题色
    fc6: '#b82525', // 警告字色 红色

    // 基础背景色
    bg0: '#252525', // 主背景色
    bg1: 'rgba(255,255,255,0.05)', // 背景色1
    bg2: 'rgba(255,255,255,0.02)', // 背景色2

    bg3: 'rgba(0,0,0,0.02)',
    bg4: '#363636', // 浮层背景色
    bg5: 'rgba(255,255,255,0.06)', // 灰底搜索框输入框颜色
    bg6: 'rgba(255,255,255,0.4)', // 扫码登录
    bg7: 'rgba(255,255,255,0.06)', // 白底搜索框输入框颜色
    bg8: 'rgba(255,255,255,0.1)', // 背景1hover色
    bg9: 'rgba(255,255,255,0.08)',
    bg10: 'rgba(255,255,255,0.04)', // 顶部栏搜索框输入框颜色
    bg11: 'rgba(255, 255, 255, 0.07)', // at浮层选中背景色
    bg12: '#1f2021', // 评论btn背景色
    bg13: 'rgba(0, 0, 0, 0.95)', // 软件内歌词背景
    bg14: '#7c7c7c', // 播放条disabled部分rgba(255,255,255,0.4)的实色
    bg15: 'rgba(255, 255, 255, 0.16)', // 滚动条
    bg16: 'rgba(255, 255, 255, 0.26)', // 滚动条hover
    bg17: 'rgba(0, 0, 0, 1)', // mock menu
    bg18: '#2d2e30', // 评论btn背景色hover

    bgcover: 'rgba(255,255,255,0.06)', // 封面背景图背景色
    bgcover1: '#333', // 封面背景图背景色，实色

    // 基础按钮边框色
    border1: 'rgba(255,255,255,0.2)',
    border2: 'rgba(255,255,255,0.2)', // 白色边框，红色按钮用到
    border3: 'rgba(255,255,255,0.12)', // input框边框色
    border4: 'rgba(255,255,255,0.1)', // 文件夹虚线色
    border5: 'rgba(255,255,255,0.05)',
    border6: 'rgba(255,255,255,0.1)', // 播放条按钮白边
    border7: '#666',
    border8: '#212121', // 导航栏dot边框色
    border9: 'rgba(255,255,255,0.08)', // 播放详情页边框

    // 分割线
    line1: 'rgba(255,255,255,0.06)',
    line2: 'rgba(255,255,255,0.2)',

    // 会员色
    vip: '#d15400',

    // boxshadow颜色
    shadow1: 'rgba(0,0,0,0.3)',

    // 图标颜色
    dlded: '#fff', // 下载完成
    icnBlue: '#507daf', // 下载，进度
  },
};
