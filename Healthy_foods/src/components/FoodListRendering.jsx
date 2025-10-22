import React from 'react'

const FoodListRendering = ({healthyFoodList}) => {
  return (
    <> 
        {healthyFoodList.length === 0 ? <h3>The list is empty</h3>: null}
      <ul className="list-group">
       { 
         healthyFoodList.map((food , index) => ( 
           <li key = {food} className="list-group-item "> at index {index+1} the food is {food}</li>
         ))
       }
      </ul>
    
    </>
  )
}

export default FoodListRendering