import React from 'react'

const InputTodo = () => {
  return (
    <> 
    <div class="container">  
        <div class="row">
          <div class="col-6">
              <input type='text' placeholder='Enter your task here' className='taskInput'/>
          </div>
          <div class="col-4">
              <input type='date'/>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success ">Add</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default InputTodo