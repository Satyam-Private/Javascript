import React from 'react'
import FoodCard from './FoodCard'

const FoodListRendering = ({healthyFoodList}) => {
    // let clickHandling = () => { 
    //     console.log("THe button is clicked")
    // }
  return (
    <div className="d-flex flex-wrap justify-content-center">
       
            { 
                healthyFoodList.map((food) => (
                    <FoodCard name = {food.name} desc = {food.desc} imgUrl = {food.imgUrl}/>
            ) )
            }

    </div>
  )
}

export default FoodListRendering