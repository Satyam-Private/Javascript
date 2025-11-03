import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import FoodListRendering from './components/FoodListRendering';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import InputFeild from './components/InputFeild';
import styles from './styles/App.module.css'
const App = () => {



  let healthyFoodList = [
    {
      id: 1,
      name: "Apple",
      desc: "Crisp and juicy fruit rich in fiber and antioxidants, perfect for a healthy life",
      imgUrl: "src/assets/apple.jpg"
    },
    {
      id: 2,
      name: "Banana",
      desc: "Sweet and soft tropical fruit packed with potassium and energy for your day..",
      imgUrl: "src/assets/banana.png"
    },
    {
      id: 3,
      name: "Kivi",
      desc: "Tangy and refreshing green fruit loaded with vitamin C and dietary fiber",
      imgUrl: "src/assets/kivi.jpg"
    },
    {
      id: 4,
      name: "Avocado",
      desc: "Creamy and nutritious fruit full of healthy fats, ideal for salads and spreads.",
      imgUrl: "src/assets/avocado.jpg"
    },

    {
      id: 5,
      name: "Dal",
      desc: "Traditional Indian lentil curry, rich in protein and comforting with every bite.",
      imgUrl: "src/assets/Dal.jpg"
    },
    {
      id: 6,
      name: "Roti",
      desc: "Soft, freshly made Indian flatbread that pairs perfectly with curries and vegetables.",
      imgUrl: "src/assets/Roti.jpg"
    }
  ];   

  let [textContent , settextContent] = useState(""); 
  const handleOnChange = (event) => { 
    settextContent(`searching result for "${event.target.value}"`);
  }
  return (
    <>
      <Container>
        <Header />
        <div className= {`${styles.searchBox}`}>
          <InputFeild handleOnChange = {handleOnChange}/> 
        <p> 
          {textContent}
        </p>
        </div>
        {healthyFoodList.length === 0 ? <ErrorMessage /> : <FoodListRendering healthyFoodList={healthyFoodList} />}
      </Container>

    </>
  )
}

export default App