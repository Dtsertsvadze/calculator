import Button from "./components/Button";
import "./app.css";
import Input from "./components/Input";
import { evaluate } from "mathjs";

import { useState, useEffect } from "react";

function App() {
  const [result, setResult] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const handleButtonClick = (symbol) => {
    setCurrentValue((prev) => prev + symbol);
  };

  const handleKeyboardInput = (event) => {
    const key = event.key;
    const validSymbols = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "+",
      "-",
      "*",
      "/",
      "=",
      "Enter",
      "Escape",
      "Backspace",
      "Space",
    ];
    if (validSymbols.includes(key)) {
      event.preventDefault();

      if (key === "Enter" || key === "=") {
        resultHandler();
      } else if (key === "Escape") {
        clearHandler();
      } else if (key === "Backspace") {
        acHandler();
      } else {
        handleButtonClick(key);
      }
    }
  };

  const clearHandler = () => {
    setCurrentValue("");
    setResult("");
  };

  const acHandler = () => {
    setCurrentValue((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
  };

  const resultHandler = () => {
    setCurrentValue("");
    setResult(evaluate(currentValue));
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardInput);

    return () => {
      document.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [handleKeyboardInput]);

  return (
    <div className="wrapper">
      <Input result={result} currentValue={currentValue} />
      <div className="row">
        <Button
          specificStyle={{ backgroundColor: "rgb(66,66,66)" }}
          onClick={acHandler}
          symbol={"AC"}
        ></Button>
        <Button
          specificStyle={{ backgroundColor: "rgb(66,66,66)" }}
          onClick={clearHandler}
          symbol={"clear"}
        />
      </div>
      <div className="row">
        <Button onClick={handleButtonClick} symbol={"7"} />
        <Button onClick={handleButtonClick} symbol={"8"} />
        <Button onClick={handleButtonClick} symbol={"9"} />
        <Button
          specificStyle={{ background: "rgb(255, 155, 15)" }}
          onClick={handleButtonClick}
          symbol={"/"}
        />
      </div>
      <div className="row">
        <Button onClick={handleButtonClick} symbol={"4"} />
        <Button onClick={handleButtonClick} symbol={"5"} />
        <Button onClick={handleButtonClick} symbol={"6"} />
        <Button
          specificStyle={{ background: "rgb(255, 155, 15)" }}
          onClick={handleButtonClick}
          symbol={"*"}
        />
      </div>
      <div className="row">
        <Button onClick={handleButtonClick} symbol={"1"} />
        <Button onClick={handleButtonClick} symbol={"2"} />
        <Button onClick={handleButtonClick} symbol={"3"} />
        <Button
          specificStyle={{ background: "rgb(255, 155, 15)" }}
          onClick={handleButtonClick}
          symbol={"+"}
        />
      </div>
      <div className="row">
        <Button
          specificStyle={{ borderRadius: "0 0 0 16px" }}
          onClick={handleButtonClick}
          symbol={"0"}
        />
        <Button onClick={handleButtonClick} symbol={"."} />
        <Button
          specificStyle={{ background: "rgb(255, 155, 15)" }}
          onClick={resultHandler}
          symbol={"="}
        />
        <Button
          specificStyle={{
            background: "rgb(255, 155, 15)",
            borderRadius: "0 0 16px 0",
          }}
          onClick={handleButtonClick}
          symbol={"-"}
        />
      </div>
    </div>
  );
}

export default App;
