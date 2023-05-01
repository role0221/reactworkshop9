import { useState } from 'react'
import './Culculator.css'

const Culculator = () => {

  const [inputValue,setInputValue] = useState('0')

  const display =(value)=>{
    inputValue ==0 ? setInputValue(value):setInputValue(inputValue+value)
  }
  const reset =()=>{
    setInputValue('0')
  }
  const calculate=()=>{
    let result = eval (inputValue)
    setInputValue(result)
  }

  return (
    <div className='calculator'>
    <div className="Cal_Display">
            <h1>{inputValue}</h1>
    </div>
    <div className="Cal_Button">
            <button className="operator" onClick={()=>display("+")}>+</button>
            <button className="operator" onClick={()=>display("-")}>-</button>
            <button className="operator" onClick={()=>display("*")}>*</button>
            <button className="operator" onClick={()=>display("/")}>/</button>

            <button onClick={()=>display("7")}>7</button>
            <button onClick={()=>display("8")}>8</button>
            <button onClick={()=>display("9")}>9</button>
            <button onClick={()=>display("4")}>4</button>
            <button onClick={()=>display("5")}>5</button>
            <button onClick={()=>display("6")}>6</button>
            <button onClick={()=>display("1")}>1</button>
            <button onClick={()=>display("2")}>2</button>
            <button onClick={()=>display("3")}>3</button>
            <button onClick={()=>display(".")}>.</button>
            <button onClick={()=>display("0")}>0</button>
            <button className="clear_btn" onClick={reset}>C</button>
            <button className="equal operator" onClick={calculate}>=</button>
    </div>

    </div>
    
  )
}

export default Culculator