import React from 'react'
import style from '../styles/Buttons.module.css'
const Buttons = () => {
    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <div className={style.btnContainer}>
       {buttonNames.map((btn , idx) =>  <button className= {style.btn} id={idx}>{btn}</button>    )}

    </div>
  )
}

export default Buttons