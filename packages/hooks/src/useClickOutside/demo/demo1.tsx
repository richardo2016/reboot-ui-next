/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 默认切换布尔值状态，也可以接收一个参数作为新的值。
 */

import React from 'react';
import { useClickOutside } from '@reboot-ui/hooks';

export default () => {
  const [count, setCount] = React.useState(0);

  const innerRef = useClickOutside<HTMLButtonElement>((ev) => {
    const el = ev.target;
    if (el.dataset.reset) {
      setCount(0)
    } else {
      setCount(prev => prev + 1)
    }
  });

  return (
    <div>
      <p>count: {count}</p>
      <button ref={innerRef}>点击我不会有变化</button>
      <button data-reset>点击我 reset</button>
    </div>
  );
};
