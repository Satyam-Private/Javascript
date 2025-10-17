import React from 'react'
import MyTodo from './MyTodo'
const TodoItems = ({list}) => {
    console.log(list)
    return (
        <>
            <div className="myTodos">
                { 
                    list.map((item, idx) => (
                        <MyTodo 
                        key = {idx}
                        todoName = {item.todoName} 
                        todoDate = {item.todoDate} />
                    ))
                }

            </div>

        </>
    )
}

export default TodoItems