import React, { useState } from 'react'
import Colors from './components/Colors'

const App = () => {
  const [bgColor , setBgcolor]= useState("khaki")
  const handleClick = (colorN) => { 
    setBgcolor(colorN)
  }
  return (
    <div className='w-screen h-screen m-0' style={{background: bgColor}}>
      <div className="flex flex-wrap justify-center p-3">
        <Colors handleClick={handleClick}/>
      </div>

    </div>
  )
}

export default App