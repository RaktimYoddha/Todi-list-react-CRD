import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => { /*2 props todos and onDelete from app.js */
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        /*map is used as for loop to run all "todos" and it is passed in "todo" */
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No Todos to display ....":  
            props.todos.map((todo)=>{    
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   /*passing 2 props one self prop i.e. todo and one parent given prop i.e. onDelete to child TodoItem.js */
                )
            })
            } 
        </div>
    )
}
 