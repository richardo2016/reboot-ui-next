/**
 * title: Default usage
 * desc: Default as a switch function, or accept a parameter to change state.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 默认切换布尔值状态，也可以接收一个参数作为新的值。
 */

import React from 'react';
import { useClickAway } from '@reboot-ui/hooks';

export default () => {
  const [clickIn, setClickIn] = React.useState(0);
  const [clickAway, setClickAway] = React.useState(0);

  const innerRef = useClickAway<HTMLButtonElement>({
    clickAway: (ev) => {
      const el = ev.target;
      if (el.dataset.reset) {
        setClickAway(0)
        setClickIn(0)
      } else {
        setClickAway(prev => prev + 1)
      }
    },
    clickIn: (ev) => {
      setClickIn(prev => prev + 1)
    }
  });

  return (
    <div>
      <div>
        <p>clickIn: {clickIn}</p>
        <p>clickAway: {clickAway}</p>
        <button ref={innerRef}>点击添加 clickIn</button>
      </div>

      <div>
        <button data-reset>点击我 reset</button>
      </div>
    </div>
  );
};
