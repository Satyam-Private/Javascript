import React from 'react'
import styles from '../styles/InputFeild.module.css'
const InputFeild = ({handleOnChange}) => {
  return (
    <div className= {`${styles.searchBox}`}> 
        <input type="text" name="in1" id="in1" placeholder='Seach here ....' style={{width : "100%"}} onChange={handleOnChange}/>
    </div>
  )
}

export default InputFeild