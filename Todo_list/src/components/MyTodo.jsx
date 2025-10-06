import React from 'react'

const MyTodo = () => {
  let todoName = 'This is the todo'; 
  let date = '6/9/10';
  return (
    <> 
     <div class="container">  
        <div class="row">
          <div class="col-6">
              {todoName}
          </div>
          <div class="col-4">
              {date}
          </div>
          <div class="col-2">
             <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

    
    </>
  )
}

export default MyTodo