import styled from "styled-components";

import { font, space } from "../styles/helpers";
import { colors, contentWidth, radiusValue } from "../styles/variables";

export const CalculatorWrapper = styled.div`
  position: relative;
`;

export const StyledCalculator = styled.div`
  max-width: ${contentWidth}px;
  border: 2px solid ${colors.black};
  border-radius: ${radiusValue}px;
  background: ${colors.greyLight};
`;

export const StyledInput = styled.input`
  background: none;
  border: none;
  box-shadow: none;
  outline: none;
  border-radius: 0;
  padding: ${space()};
  width: 100%;
  border-bottom: 2px solid ${colors.black};
  color: ${colors.black};
  text-align: right;
  font: ${font({ size: "xlarge" })};
`;

export const ButtonsGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: ${space(2)};
  padding: ${space(2)};
`;
