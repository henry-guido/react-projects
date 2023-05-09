import { useState } from "react";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Display from "./components/display";
import Logo from "./components/Logo";
import "./styles.css/appcalculator.css";
import "./styles.css/display.css";
import { evaluate } from "mathjs";

function AppCalculator() {
  const [input, setInput] = useState("");

  const addInput = (value, isOperator) => {
    const operator = ["+", "-", "/", "*"];
    if (input.length > 0) {
      let lastInput = input.at(-1);
      if (isOperator && operator.some((x) => x.includes(lastInput))) {
        let replace = input.split("").toSpliced(-1, 1, value).join("");
        return setInput(replace);
      }
    }
    setInput((val) => val + value);
  };

  const handleCalculate = () => {
    input
      ? setInput(evaluate(input))
      : alert("Please enter values to perfom calculations ");
  };

  return (
    <div className="app-calculator">
      <Logo></Logo>
      <div className="calculator-container">
        <Display input={input} />
        <div className="row">
          <Button handleInput={addInput}>1</Button>
          <Button handleInput={addInput}>2</Button>
          <Button handleInput={addInput}>3</Button>
          <Button handleInput={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleInput={addInput}>4</Button>
          <Button handleInput={addInput}>5</Button>
          <Button handleInput={addInput}>6</Button>
          <Button handleInput={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleInput={addInput}>7</Button>
          <Button handleInput={addInput}>8</Button>
          <Button handleInput={addInput}>9</Button>
          <Button handleInput={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleInput={handleCalculate}>=</Button>
          <Button handleInput={addInput}>0</Button>
          <Button handleInput={addInput}>.</Button>
          <Button handleInput={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default AppCalculator;
