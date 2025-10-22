import React, { useState } from 'react'
import Header from './Header'

const Myform = () => {
    const printDet = (e) => { 
        const [Myname ,setName] = useState("");
        const getvalue = (e) => { 
            setName(e.target.value)
        }
        <Header myName = {Myname}/>
    }
  return (
    <form onSubmit={printDet}> 
        <input type='text' placeholder='Enter your name' onChange={getvalue}></input>
        <input type='button' value= "submit"></input>
    </form>
  )
}

export default Myform