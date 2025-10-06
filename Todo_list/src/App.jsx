import React from 'react'
import './app.css'
import Heading from './components/Heading'
import InputTodo from './components/inputTodo'
import MyTodo from './components/MyTodo'


const App = () => {
  return (
    <><Heading />
      <div className="todo-container">
        <InputTodo />
        <div className="myTodos">
          <MyTodo />
          <MyTodo />
          <MyTodo />
        </div>
      </div>

    </>
  )
}

export default App