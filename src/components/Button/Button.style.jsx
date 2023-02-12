import styled, { css } from "styled-components";

export const SIZES = {
  s: css`
    --button-width: 56px;
    --button-font-size: 1.2rem;
    --button-padding: 7px 0;
    --button-radius: 26px;
    --button-font-lineheight: 1.5rem;
  `,
};

export const COLOR = {
  gray: css`
    --button-bg-color: #d9d9d9;
  `,
};

export const StyledBtn = styled.button`
  ${(p) => p.sizeStyle};
  ${(p) => p.btncolor};
  width: var(--button-width, 322px);
  padding: var(--button-padding, 13px 0px);
  border-radius: var(--button-radius, 44px);
  background: var(--button-bg-color, #ffb6b0);
  color: var(--button-color, #ffffff);
  font-weight: 500;
  font-size: var(--button-font-size, 1.4rem);
  line-height: var(--button-font-lineheight, 1.7rem);

  &:active {
    ${(p) =>
      !p.disabled &&
      `
      background: var(--button-hover-bg-color, #ffffff);
      color: var(--button-color, #767676);
      outline: 1px solid #dbdbdb;
      `}
  }
  &:disabled {
    pointer-events: none;
    background: var(--button-bg-color, #c8beab);
  }
`;
