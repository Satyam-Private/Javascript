import React from 'react'
import './app.css'
import Heading from './components/Heading'
import InputTodo from './components/inputTodo'
import MyTodo from './components/MyTodo'
import TodoItems from './components/TodoItems'
import {useState} from "react";
import Removeall from './components/Removeall'

const App = () => {
  let [todoList , setList] = useState([]);

  let onAdd = (todoStr, enteredDate) => { 
     let updatedList = [...todoList , {
      todoName : todoStr, 
      todoDate : enteredDate
     }]
      setList(updatedList);
  }
  let handleRemoveall = () => { 
    setList([]);
  }

  let handleDeleteTodo = (passedTodoname) => { 
    let newTodoList = todoList.filter((todo) => todo.todoName !== passedTodoname) 
    setList(newTodoList);
  }
  return (
    <><Heading />
      <div className="todo-container">
        <InputTodo onAdd = {onAdd}/>
        <TodoItems list = {todoList} onDeleteTodo = {handleDeleteTodo}/>
      </div>
      <div className="footer-content">
        {todoList.length > 0 ? <Removeall handleRemoveall = {handleRemoveall}/> : <p>No tasks yet!</p>} 
      </div>

    </>
  )
}

export default App