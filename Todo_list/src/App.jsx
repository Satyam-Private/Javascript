import React from 'react'
import './app.css'
import Heading from './components/Heading'
import InputTodo from './components/inputTodo'
import MyTodo from './components/MyTodo'
import TodoItems from './components/TodoItems'


const App = () => {
  const todoList = [
    {
      todoName : "buy milk",
      todoDate : "6/7/25" 
    },
    {
      todoName : "go to college",
      todoDate : "6/7/25" 
    },
    {
      todoName : "code",
      todoDate : "6/7/25" 
    }
  ]
  return (
    <><Heading />
      <div className="todo-container">
        <InputTodo />
        <TodoItems list = {todoList}/>
      </div>

    </>
  )
}

export default App