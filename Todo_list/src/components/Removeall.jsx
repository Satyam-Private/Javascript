import React from 'react'

const Removeall = ({handleRemoveall}) => {
  return (
    <div className = "container"> 
        <button className= "btn btn-danger" onClick={() => handleRemoveall()}>Remove All tods</button>
    </div>
  )
}

export default Removeall