import React, { useContext } from "react";

import Button from "../Button";
import { buttonsMap } from "../buttonsMap";
import { SharedStateContext } from "../context";
import { convertFromRoman, convertToRoman } from "../helpers";
import {
  ButtonsGrid,
  StyledCalculator,
  StyledInput,
  CalculatorWrapper
} from "./style";
import InfoMessage from "../InfoMessage";

const operatorsMap = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "÷": (x, y) => x / y
};

const Calculator = () => {
  const {
    state: { currentValue, prevValue, operator, infoMessage },
    dispatch
  } = useContext(SharedStateContext);

  const handleClick = ({ type, symbol }) => {
    if (type === "clear") {
      dispatch({ type: "clearInput" });
    }

    if (type === "equal") {
      if (!currentValue || !prevValue) return;

      if (infoMessage) {
        dispatch({ type: "setInfoMessage", item: {} });
      }

      const firstNumber = convertFromRoman(prevValue);
      const secondNumber = convertFromRoman(currentValue);
      let total = operatorsMap[operator](firstNumber, secondNumber);

      if (total <= 0) {
        const message = {
          content:
            "The result is not a positive number and cannot be expressed in roman numerals.",
          infoType: "error"
        };
        dispatch({ type: "setInfoMessage", item: message });
      }

      if (!Number.isInteger(total)) {
        total = Math.round(total);
        const message = {
          content: "The result is rounded to the nearest integer.",
          infoType: "warning"
        };
        dispatch({ type: "setInfoMessage", item: message });
      }

      const result = convertToRoman(total);
      dispatch({ type: "setPrevValue", item: "" });
      dispatch({ type: "setOperator", item: "" });
      dispatch({ type: "setCurrentValue", item: result });
    }

    if (type === "operator") {
      if (!currentValue) return;

      if (infoMessage) {
        dispatch({ type: "setInfoMessage", item: {} });
      }

      dispatch({ type: "setOperator", item: symbol });
      dispatch({ type: "setPrevValue", item: currentValue });
      dispatch({ type: "setCurrentValue", item: "" });
    }

    if (type === "number") {
      const updatedValue = currentValue + symbol;
      const numberValue = convertFromRoman(updatedValue);
      const correctSymbol = convertToRoman(numberValue);

      if (updatedValue !== correctSymbol) {
        const errorMessage = `
          You typed "${updatedValue}". That's not a roman numeral.
          If you meant "${numberValue}" please type "${correctSymbol}".
        `;

        const info = {
          content: errorMessage,
          infoType: "error"
        };
        return dispatch({ type: "setInfoMessage", item: info });
      }
      dispatch({ type: "setInfoMessage", item: {} });
      dispatch({ type: "setCurrentValue", item: updatedValue });
    }
  };

  const displayedValue = `${prevValue} ${operator} ${currentValue}`;

  return (
    <CalculatorWrapper>
      <InfoMessage />

      <StyledCalculator>
        <StyledInput type="text" value={displayedValue} disabled />

        <ButtonsGrid>
          {buttonsMap.map(item => (
            <Button
              onClick={() => handleClick(item)}
              key={item.symbol}
              {...item}
            ></Button>
          ))}
        </ButtonsGrid>
      </StyledCalculator>
    </CalculatorWrapper>
  );
};

export default Calculator;
