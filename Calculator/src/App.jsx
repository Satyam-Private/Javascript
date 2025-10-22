import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './styles/App.module.css'
import Input from './components/Input';
import Heading from './components/Heading';
import Buttons from './components/Buttons';

const App = () => {
  return (
    <div className={styles.calculatorContainer}>
      <Heading/>
       <Input/>
       <Buttons/>
    </div>
  )
}

export default App