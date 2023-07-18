import React from 'react'
import './Input.css'

const Input = ({result, currentValue}) => {
  return (
    <div className='input-wrapper'>
        <div className="result">{result}</div>
        <div className="current">{currentValue}</div>
    </div>
  )
}

export default Input