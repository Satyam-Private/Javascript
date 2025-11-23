import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './styles/App.module.css'
import Heading from './components/Heading';
import Buttons from './components/Buttons';
import Display from './components/Display';

const App = () => {
  let [query , setquery] = useState(""); 
  let [ans , setAns] = useState("");
  let onbtnClick = (btnName) => { 
    if(btnName === 'C'){ 
      setquery("");
      setAns("");
    }
    else if(btnName === "="){ 
     const result = eval(query);
      setAns("The ans is : " + String(result))
    }
    else{ 
      let newQuery = query + btnName; 
      setquery(newQuery);
    }
  }

  return (
    <div className={styles.calculatorContainer}>
      <Heading/>
       <Display disContent = {query} disAns  = {ans}/>
       <Buttons handleClick = {onbtnClick}/>
    </div>
  )
}

export default App