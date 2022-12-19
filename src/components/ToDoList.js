import React from "react";
import ToDo from './ToDo';
function ToDoList({todos,setToDos,filterTodo}){
    return(
        <div className="todo-container">
      <ul className="todo-list">
        {filterTodo.map((todo)=>(
            <ToDo text={todo.text} todos={todos} key={todo.id} todo={todo} setToDos={setToDos}/>
        ))}
        
        </ul>
    </div>

    )
}
export default ToDoList;