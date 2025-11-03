import React from 'react'
import styles from '../styles/Display.module.css'
const Display = ({disContent , disAns}) => {
  return (
    <div className= {`${styles.disp}`}>
        <div className= {`${styles.textDisplay}`}>
                <p>{disContent}</p>
        </div>
        <div className={`${styles.ans}`}>
                <p>{disAns}</p>
        </div>

    </div>
  )
}

export default Display