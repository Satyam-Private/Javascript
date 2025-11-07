import React from 'react'
import {useState} from 'react'
const InputTodo = ({onAdd}) => {


  let [todoStr , setTodoStr] = useState("");
  let [enteredDate , setEnteredDate] = useState("");

  
  return (
    <> 
    <div className="container">  
        <div className="row">
          <div className="col-6">
              <input type='text' placeholder='Enter your task here' className='taskInput'
              onChange={(e) => setTodoStr(e.target.value)}
              />
          </div>
          <div className="col-4">
              <input type='date' onChange={
                (e) => { 
                  setEnteredDate(e.target.value);
                }
              }/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success " onClick={ 
              () => { 
                onAdd(todoStr , enteredDate)
              }
            }>Add</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default InputTodo