import React from "react";
import "./button.css";

const Button = ({specificStyle, symbol, onClick }) => {
  return (
    <button
      style={specificStyle}
      onClick={() => onClick(symbol)}
      className={'button-wrapper'}
    >
      {symbol}
    </button>
  );
};

export default Button;
