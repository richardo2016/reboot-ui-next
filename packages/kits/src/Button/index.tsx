import React from 'react';
import classnames from 'classnames';

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import { colorLightFactory as cl } from '../Theme/utils';

const ifNotDisHover =
  (cssText: any) =>
  ({ disHover }: React.ComponentProps<typeof ButtonPropto> & ThemeProps<DefaultTheme>) =>
    disHover ? '' : cssText;

export type IButtonProps = {
  /**
   * @description 是否禁用 hover 效果, 若禁用, 按钮 hover 时候字体边框不变色
   *
   * @default false
   */
  disHover?: boolean;
  /**
   * @description 类型, 指定时随主题色变化, 为空表示不着色
   */
  kind?: 'tmbtn' | 'tmlinear' | 'noborder';
  /**
   * @description icontype, svg位置, 不指定则默认在右侧
   */
  itype?: 'left';
  /**
   * @description 是否是小按钮
   *
   * @default false
   */
  sml?: boolean;
};

function ButtonPropto({
  disHover,
  kind,
  itype,
  sml,
  ...props
}: IButtonProps & React.ButtonHTMLAttributes<{}>) {
  return (
    <button {...props} className={classnames([props.className, props.disabled && 'disable'])} />
  );
}

const Button = styled(ButtonPropto)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  /* 基础线框按钮不随主题色变化 */
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  min-width: 64px;
  border-radius: 100px;
  border: 1px solid ${cl('border1')};
  color: ${cl('fc2')};

  svg {
    fill: ${cl('fc3')};
  }

  ${ifNotDisHover(css`
    &:hover {
      background-color: ${cl('bg1')};
    }
  `)}

  ${({ ...props }) => {
    // 主题色底色按钮 跟换肤无关
    if (props.kind === 'tmbtn') {
      return css`
        background: ${cl('theme1')};
        border: none;
        color: ${cl('fcwhite')};
        svg {
          fill: ${cl('fcwhite')};
        }
        ${ifNotDisHover(css`
          &:hover {
            color: ${cl('fcwhite')};
            background: ${cl('theme2')};
          }
        `)}
      `;
    }

    if (props.kind === 'tmlinear') {
      return css`
        border: 1px solid ${cl('theme1')};
        color: ${cl('theme1')};
        svg {
          fill: ${cl('theme1')};
        }
        ${ifNotDisHover(css`
          &:hover {
            color: ${cl('theme1')};
            background: ${cl('tmlinebtnbg')};
          }
        `)}
      `;
    }

    if (props.kind === 'noborder') {
      return css`
        background: ${cl('bg12')};
        border: 1px solid ${cl('border9')};
        color: ${cl('fc2')};
        svg {
          fill: ${cl('fc2')};
        }
        ${ifNotDisHover(css`
          &:hover {
            color: ${cl('fc2')};
            background: ${cl('bg18')};
          }
        `)}
      `;
    }

    return '';
  }}

  ${({ ...props }) => {
    // 按钮icon位置，前icon，正常icon大小 24*24
    if (props.itype === 'left' && !props.sml) {
      return css`
        padding: 0 16px 0 12px;
        svg {
          margin: 0 2px 0 0;
        }
      `;
    }
    if (props.itype === 'left' && props.sml) {
      // 小按钮，包括有Icon，icon大小 16*16
      return css`
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        padding: 0 12px;
        min-width: 66px;
        svg {
          margin: 0 2px 0 0;
        }
      `;
    }
    if (props.itype !== 'left' && props.sml) {
      // 小按钮，无Icon
      return css`
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        min-width: 66px;
        padding: 0 12px;
      `;
    }

    return '';
  }}

  &[disabled],
  &.disable,
  &.z-dis {
    opacity: 0.2;
    pointer-events: none;
  }

  &[disabled] {
    cursor: not-allowed;
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        /* pointer-events: none; */
        opacity: 0.2;
      `;
    }
    return '';
  }}
`;

export default Button;
