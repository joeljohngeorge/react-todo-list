import React,{useState,useEffect} from 'react';
import './App.css';

import Form from './components/Form';
import ToDoList from './components/ToDoList';
function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setToDos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filterTodo,setFilterTodo]=useState([]);
  /*
useEffect(()=>{
  getLocalStorage()
},[])
*/

useEffect(()=>{
  handleTodoFilter()
 // saveToLocalStorage();
},[todos,status])

  const handleTodoFilter=()=>{
    switch(status){
      case "Completed":
        setFilterTodo(todos.filter((todo)=>todo.completed===true))
        break;
      case "Pending":
        setFilterTodo(todos.filter((todo)=>todo.completed===false))
        break;
       default:
        setFilterTodo(todos) 
    }
  }
/*
const saveToLocalStorage=()=>{
  
    localStorage.setItem("todos",JSON.stringify(todos))
    
  
}

const getLocalStorage=()=>{
  if(localStorage.getItem("todos")==null){
    localStorage.setItem("todos",JSON,stringify([]))
  }else{
    let localTodos= JSON.parse(localStorage.setItem("todos"));
    setToDos(localTodos);

  }
}
*/

  return (
    <div className="App">
      <header>
      <h1>To-Do-List </h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setToDos={setToDos} setStatus={setStatus}/>
      <ToDoList todos={todos} setToDos={setToDos} filterTodo={filterTodo}/>
    </div>
  );
}

export default App;
