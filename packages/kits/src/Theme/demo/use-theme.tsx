/**
 * title: 变更主题
 * desc: 变更主题, Kit 组件会随之产生变化
 *
 * defaultShowCode: false
 * compact: false
 * hideActions: ["CSB", "EXTERNAL"]
 */

import React from 'react';

import { Radio } from 'antd';

import { Button, KitThemeProvider } from '@reboot-ui/kits';

import styled from 'styled-components';

const Wrapper = styled.div`
  .controls {
    margin-bottom: 10px;
  }

  .demo-btn + .demo-btn {
    margin-left: 4px;
  }
`;

export default () => {
  const [featured, setFeatured] = React.useState('dark');

  return (
    <Wrapper>
      <div className="controls">
        <Radio.Group value={featured} onChange={(e) => setFeatured(e.target.value)}>
          <Radio.Button value="light">Light</Radio.Button>
          <Radio.Button value="dark">Dark</Radio.Button>
        </Radio.Group>
      </div>
      <KitThemeProvider featured={`pc-${featured}`}>
        <Button className="demo-btn" kind="tmbtn">
          kind: tmbtn
        </Button>
        <Button className="demo-btn" kind="tmlinear">
          kind: tmlinear
        </Button>
        <Button className="demo-btn" kind="noborder">
          kind: noborder
        </Button>
      </KitThemeProvider>
    </Wrapper>
  );
};
