import React from "react";
import styled from "styled-components";

import Calculator from "./Calculator";
import GlobalStyle from "./styles/global";
import { space } from "./styles/helpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: ${space()};
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Calculator />
      </Wrapper>
    </>
  );
};

export default App;
