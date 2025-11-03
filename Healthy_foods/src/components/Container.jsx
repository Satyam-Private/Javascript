import React from 'react'
import style from '../styles/Container.module.css'
const Container = (props) => {
  return (
    <div className= {style.div}>
        {props.children}
    </div>
  )
}

export default Container