import React from "react";
import styled, { css } from "styled-components/macro";

import { font, space } from "./styles/helpers";
import { colors, radiusValue } from "./styles/variables";

const StyledButton = styled.button`
  background-color: ${colors.greyDark};
  padding: ${space(2)};
  border-radius: ${radiusValue}px;
  font: ${font({ size: "large" })};
  cursor: pointer;
  color: ${colors.white};

  &:first-of-type {
    grid-row: 2 / span 1;
  }

  ${props =>
    props.buttonType === "equal" &&
    css`
      grid-column: 3 / span 2;
      grid-row: 3;
      color: ${colors.black};
      background-color: ${colors.yellow};

      font: ${font({ size: "xlarge" })};
    `}

  ${props =>
    props.buttonType === "clear" &&
    css`
      grid-column: 3 / span 2;
      grid-row: 4;
      background-color: ${colors.grey};
      color: ${colors.black};
    `}

  ${props =>
    props.buttonType === "operator" &&
    css`
      color: ${colors.black};
      background-color: ${colors.blue};
      font: ${font({ size: "xlarge" })};
    `}
`;

const Button = ({ symbol, onClick, type }) => (
  <StyledButton buttonType={type} onClick={onClick}>
    {symbol}
  </StyledButton>
);

export default Button;
