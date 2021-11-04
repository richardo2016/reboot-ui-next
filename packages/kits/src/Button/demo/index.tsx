import React from 'react';

import { Button, KitThemeProvider } from '@reboot-ui/kits';

import styled from 'styled-components';

const Wrapper = styled.div`
  .demo-btn + .demo-btn {
    margin-left: 4px;
  }
`;

export default () => {
  return (
    <Wrapper>
      <KitThemeProvider>
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
