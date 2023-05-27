import Button from "./components/Button";
import "./app.css"
import Input from "./components/Input";
import { evaluate } from "mathjs";

import { useState } from "react";

function App() {

  const [result, setResult] = useState('')
  const [currentValue, setCurrentValue] = useState('')

  const clickHandler = (symbol) => {
    setCurrentValue(prev => prev + symbol)
  }

  const clearHandler = () => {
    setCurrentValue('')
    setResult('')
  }

  const resultHandler = () => {
    console.log(evaluate(currentValue))
    setResult(eval(currentValue))
    setCurrentValue('')

    
  }

  return (
    <div className="wrapper">
      <Input result={result}
        currentValue={currentValue}
      />
      <div className="row">
        <Button onClick={clickHandler} symbol={"7"} />
        <Button onClick={clickHandler} symbol={"8"} />
        <Button onClick={clickHandler} symbol={"9"} />
        <Button color="rgb(255, 155, 15)" onClick={clickHandler} symbol={"/"} />
      </div>
      <div className="row">
        <Button onClick={clickHandler} symbol={"4"} />
        <Button onClick={clickHandler} symbol={"5"} />
        <Button onClick={clickHandler} symbol={"6"} />
        <Button color="rgb(255, 155, 15)" onClick={clickHandler} symbol={"*"} />
      </div>
      <div className="row">
        <Button onClick={clickHandler} symbol={"1"} />
        <Button onClick={clickHandler} symbol={"2"} />
        <Button onClick={clickHandler} symbol={"3"} />
        <Button color="rgb(255, 155, 15)" onClick={clickHandler} symbol={"+"} />
      </div>
      <div className="row">
        <Button onClick={clickHandler} symbol={"0"} />
        <Button color="rgb(255, 155, 15)" onClick={clickHandler} symbol={"."} />
        <Button color="rgb(255, 155, 15)" onClick={resultHandler} symbol={"="} />
        <Button color="rgb(255, 155, 15)" onClick={clickHandler} symbol={"-"} />
      </div>
      <div className="row">
        <Button color="rgb(255, 155, 15)" onClick={clearHandler} symbol={'clear'} />
      </div>
    </div>
  );
}

export default App;
