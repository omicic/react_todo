import React from "react";
import Todo from "./Todo";

const TodoList = ({todos,markTodo,deleteTodo}) => {

    const allTodos = todos.map((todo,index)=>{
        return(
            <Todo deleteTodo={deleteTodo} todo={todo} key={todo.id} index={index} markTodo={markTodo}/>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {allTodos}
            </div>
        </div>
    )
}

export default TodoList;