---
title: useClickAway
nav:
  title: Hooks
  path: /hooks
  order: 3
group:
  title: Dom
  path: /dom
---

# useClickAway

点击某个 dom 节点以外的时触发的 hook

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## Usage

主动提供 ref:

```tsx | pure
const ref = React.useRef(null);
useClickAway((evt) => {
  // ...
}, ref);

// ...

<button ref={ref}></button>
```

当没有 ref 提供时, 也可返回的 innerRef:

```tsx | pure
const innerRef = useClickAway((evt) => {
  // ...
});

// ...

<button ref={innerRef}></button>
```

<API src="./type.useClickAway.tsx" />
