/**
 * title: 获取 theme 属性
 * desc: 身在 `<KitThemeProvider />` 中的组件可通过 `props.theme` 来获得 `theme` 对象上的值
 *
 * defaultShowCode: false
 * compact: false
 * hideActions: ["CSB", "EXTERNAL"]
 */

import React from 'react';

import { Radio } from 'antd';

import { DefaultTheme, withTheme } from 'styled-components';

import { KitThemeProvider } from '@richardo2016-ui-kits/kits';

import styled, { css } from 'styled-components';
import { LinedBlock, ColorText, ColorButton } from './components';

const Wrapper = styled.div`
  .controls {
    margin-bottom: 10px;
  }

  .demo-btn + .demo-btn {
    margin-left: 4px;
  }
`;

const DemoGetThemeProp = withTheme(function ({ theme }: { theme: DefaultTheme }) {
  const { curPalette, ...rest } = theme;

  return (
    <>
      <LinedBlock>
        <ColorText $color={curPalette.theme1}>color: {curPalette.theme1}</ColorText>
      </LinedBlock>
      <LinedBlock>
        <ColorText $color={curPalette.theme2}>color: {curPalette.theme2}</ColorText>
      </LinedBlock>

      <LinedBlock>
        <ColorButton $color={curPalette.theme1} $bgColor={curPalette.tmlinebtnbg}>
          (bg: {curPalette.tmlinebtnbg})
        </ColorButton>
      </LinedBlock>

      <LinedBlock>
        <pre className="code-show-theme">{JSON.stringify(rest, null, '\t')}</pre>
      </LinedBlock>
    </>
  );
});

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
        <DemoGetThemeProp />
      </KitThemeProvider>
    </Wrapper>
  );
};
