---
title: 主题
order: 1
group:
  title: Kits
  path: /components/kits
nav:
  title: 组件
  path: /components
---

# 主题

`@richardo2016-ui-kits/kits` 的 UI 组件部分提供了主题上下文, 主题系统兼具便捷性和可扩展性:

- **便捷** 默认情况下, 在主题上下文中 Kit 组件均会因主题的属性改变而改变
- **可扩展** 同时, 你仍可对单个组件的 `style`, `className` 等基础属性进行覆写
- **组件独立** 所有的组件可"脱离"主题上下文而运行

## `KitThemeProvider`

使用 `<KitThemeProvider />` 组件可为组件提供主题上下文.

<code src="./demo/use-theme.tsx" />

借助 `styled-components` 的 API `withTheme`, `theme` 属性会被注入 `KitThemeProvider` 下的每个子孙元素,

<code src="./demo/get-theme-prop.tsx" />

<API identifier="主题上下文" src="./apis/props.tsx"></API>
