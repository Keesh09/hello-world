import React, { useReducer } from "react";

const Calculator = () => {
  const initialState = {
    displayValue: "0",
    waitingForSecondOperator: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "DIGIT":
        if (state.waitingForSecondOperator) {
          return {
            ...state,
            displayValue: action.payload,
            waitingForSecondOperator: false,
          };
        }
        return {
          ...state,
          displayValue:
            state.displayValue === "0"
              ? action.payload
              : state.displayValue + action.payload,
        };

      case "CLEAR":
        return initialState;

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDigit = (digit) => {
    dispatch({ type: "DIGIT", payload: digit });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <div className="calculator">
        <div className="display"> {state.displayValue} </div>
        <div className="buttons">
          <button onClick={(e) => handleDigit(e.target.innerText)}>7</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>8</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>9</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>/</button>

          <button onClick={(e) => handleDigit(e.target.innerText)}>4</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>5</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>6</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>*</button>

          <button onClick={(e) => handleDigit(e.target.innerText)}>1</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>2</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>3</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>-</button>

          <button onClick={(e) => handleDigit(e.target.innerText)}>0</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>.</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>=</button>
          <button onClick={(e) => handleDigit(e.target.innerText)}>+</button>

          <button onClick={() => handleClear()}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
