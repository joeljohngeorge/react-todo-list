import React from 'react';
function Form({inputText,setInputText,todos,setToDos,setStatus}){

     const handleChange=(event)=>{
        setInputText(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        setToDos([
            ...todos,{completed:false,text:inputText,id:Math.random()*1000}
        ]);
        setInputText("")
       
    }

    const handleStatus=(event)=>{
        setStatus(event.target.value)
    }
    return(
        <form >
            <input type="text" className='todo-input' onChange={handleChange} value={inputText}></input>
            <button onClick={handleSubmit} className='todo-button' type='submit' >Add Task</button>
            <div className='select'>
                <select onChange={handleStatus} name='todos' className='filter-todo'>
                    <option value='All'>All</option>
                    <option value='Completed'>Completed</option>
                    <option value='Pending'>Pending</option>
                </select>
            </div>
        </form>
    );
}

export default Form;