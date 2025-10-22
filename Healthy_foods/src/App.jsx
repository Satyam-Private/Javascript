import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import FoodListRendering from './components/FoodListRendering';
import ErrorMessage from './components/ErrorMessage';
const App = () => {
  // let healthyFoodList = ["apple" , "banana" , "kivi" , "avocado" , "Dal" , "Roti"];
  let healthyFoodList = [];
  return (
   <>
      <Header/>
      {healthyFoodList.length === 0 ? <ErrorMessage/> : <FoodListRendering healthyFoodList = {healthyFoodList}/>}
   
   </>
  )
}

export default App