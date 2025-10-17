import React from 'react'

const InputTodo = () => {
  return (
    <> 
    <div className="container">  
        <div className="row">
          <div className="col-6">
              <input type='text' placeholder='Enter your task here' className='taskInput'/>
          </div>
          <div className="col-4">
              <input type='date'/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success ">Add</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default InputTodo