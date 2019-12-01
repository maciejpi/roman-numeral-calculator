import initialState from "./initialState";

const reducer = (state, action) => {
  switch (action.type) {
    case "setCurrentValue": {
      return {
        ...state,
        currentValue: action.item
      };
    }
    case "setPrevValue": {
      return {
        ...state,
        prevValue: action.item
      };
    }
    case "setOperator": {
      return {
        ...state,
        operator: action.item
      };
    }
    case "clearInput": {
      return {
        ...initialState
      };
    }
    case "setInfoMessage": {
      return {
        ...state,
        infoMessage: {
          content: action.item.content,
          infoType: action.item.infoType
        }
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default reducer;
