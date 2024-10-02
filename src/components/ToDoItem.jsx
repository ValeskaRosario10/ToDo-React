import React, { useState } from "react";



function ToDoItem(props ){


function handleclick(){
}

return (
    <div onClick={()=> {
        props.onChecked(props.id)
    }}> 
         <li> {props.text}</li>
    </div>
);}

export default ToDoItem; 