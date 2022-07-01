import React from 'react'
import { useMemo,memo } from 'react';

const delay =(ms)=>{

    const start =Date.now();
    while(Date.now()-start<ms)
    {
        continue;
    } 
    return true;
};
const TodoItem = ({status,id,title,toggleStatus,handleDelete})=>{
    const isDelayed=delay(200);
console.log("Todo is rendering",id);
    return(
        <div style={{display:"flex"}}>
           <div>{title}</div>
           <div style={{margin:"0 1rem"}}>{status?"True":"False"}</div>
        <button onClick={()=>toggleStatus(id)}>Toggle</button>
        <button  onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
}
  
export default React.memo(TodoItem);