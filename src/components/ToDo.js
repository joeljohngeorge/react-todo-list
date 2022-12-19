import React from "react";

function ToDo({text,todo,todos,setToDos}){

    const deleteHandle=()=>{
        setToDos(todos.filter((element)=>element.id!==todo.id))
       //console.log(todo)
    }

    const completeHandle=()=>{

        setToDos(todos.map((element)=>{
            if(element.id===todo.id){
                return{
                    ...element,completed:true
                }
                
            }
            return element;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed?"completed":""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandle} ><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandle}><i className="fas fa-trash"></i></button>
        </div>
    )
}
export default ToDo;