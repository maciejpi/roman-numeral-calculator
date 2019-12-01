import React, { useReducer } from "react";
import styled from "styled-components/macro";

import Calculator from "./Calculator";
import { SharedStateContext } from "./context";
import initialState from "./initialState";
import reducer from "./reducer";
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
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <GlobalStyle />
      <SharedStateContext.Provider value={{ state, dispatch }}>
        <Wrapper>
          <Calculator />
        </Wrapper>
      </SharedStateContext.Provider>
    </>
  );
};

export default App;
