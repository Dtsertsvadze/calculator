import React from 'react'
import "./button.css"

const Button = ({symbol, onClick, color}) => {
  return (
    <button style={{background: color}}onClick={() => onClick(symbol)} className='button-wrapper'>{symbol}</button>
  )
}

export default Button