import React from 'react';

import classnames from 'classnames';

import styled, { CSSProperties, DefaultTheme, withTheme } from 'styled-components';

export const LinedBlock = styled.div`
  .color-text {
    padding: 0 2px;
  }
`;

type IColorTextProps = {
  $color: CSSProperties['color'];
};
export const ColorText = styled.span.attrs((props) => {
  return {
    className: classnames(props.className, 'color-text'),
  };
})<IColorTextProps>`
  color: ${(props) => props.$color};
`;

type IColorButtonProps = {
  $color?: CSSProperties['color'];
  $bgColor?: CSSProperties['backgroundColor'];
};
export const ColorButton = styled.button.attrs((props) => {
  return {
    className: classnames(props.className, 'color-btn'),
  };
})<IColorButtonProps>`
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};
`;
