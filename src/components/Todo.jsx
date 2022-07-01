import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
import {v4 as uuid} from "uuid";
const initialState=[
    {id:1,status:false,title:"Task1"},
    {id:2,status:false,title:"Task2"},
    {id:3,status:true,title:"Task3"},
]
const Todo = () => {
    const[todos,setTodos]=useState(initialState)

const [currentTodo,setCurrentTodo]=useState("");
const todohandle=(e)=>{
    setCurrentTodo(e.target.value)
}
const handleAddtask=()=>{
    const payload={id:uuid(),status:false,title:currentTodo}
    setTodos([...todos,payload]);
    setCurrentTodo("");
};
const handleToggle=(id)=>{
    let newTodoList =todos.map((item)=>
    item.id===id?{...item,status:!item.status}:item);
    setTodos(newTodoList);
    
};
const handleDelete=(id)=>{
    let newTodoList=todos.filter((item)=>item.id!==id);
    setTodos(newTodoList);
}


    return (
        <div>
          

<h1>Todo</h1>
<input  value={currentTodo} onChange={todohandle} type="text" />
<button onClick={handleAddtask}>Add</button>

{todos?.length &&
todos.map((item)=>
<TodoItem key={item.id}{...item} toggleStatus={handleToggle}
handleDelete={handleDelete}/>



)}
        </div>

  )
}

export default Todo