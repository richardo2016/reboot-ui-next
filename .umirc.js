export default {
  // ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'Richardo2016 UI Kits',
  favicon: 'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/10838910134/13fc/bfe9/22ad/27eeaaede0e5808f5bef761df7c79ca0.ico',
  logo: 'https://avatars.githubusercontent.com/u/6339390?v=4',
  ...(process.env.NODE_ENV === 'production'
    ? {
        publicPath: '/ui-kits/',
        base: '/ui-kits/',
      }
    : {
        publicPath: '/',
        base: '/',
      }),
  dynamicImport: {},
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  history: {
    type: 'hash',
  },
  locales: [['zh-CN', '中文']],
  resolve: {
    includes: ['docs', 'packages/kits/src', 'packages/orpheus-sdk/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
  ],
  navs: {
    'zh-CN': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/richardo2016/ui-kits',
      },
    ],
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    antd: 'window.antd',
  },
  headScripts: [
    'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js',
    'https://unpkg.com/antd@4.16.6/dist/antd.min.js',
  ],
};
