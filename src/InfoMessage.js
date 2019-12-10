import React from "react";
import styled from "styled-components";

import { colors, contentWidth } from "./styles/variables";
import { font, space } from "./styles/helpers";

const StyledMessage = styled.p`
  max-width: ${contentWidth * 0.8}px;
  position: absolute;
  top: -${space(10)};
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font: ${font({ size: "medium" })};
  color: ${props =>
    props.infoType === "error"
      ? colors.red
      : props.infoType === "warning"
      ? colors.blueDark
      : colors.white};
`;

const InfoMessage = ({ infoMessage }) => {
  const { content, infoType } = infoMessage;

  return <StyledMessage infoType={infoType}>{content}</StyledMessage>;
};

export default InfoMessage;
