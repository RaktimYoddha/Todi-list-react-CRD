import './App.css';
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
import { About } from "./Components/About";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }




  /********************* Delete function **************************/

  const onDelete = (todo) => {
    // console.log("I am onDelete of todo", todo);

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }



  /********************* Adding todos function ********************/

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;   //if todo list is empty add todo to 0th index and sno.
    }
    else {
      sno = todos[todos.length - 1].sno + 1; //if todo list is not empty add todo after (sno of length -1) i.e (last todo sno) 
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);  //this is used to add new todo to the existing "todos"
    console.log(myTodo);
  }
  /************************* Defining todos *********************************/
  const [todos, setTodos] = useState(initTodo);  
  useEffect(() => {               /*this useEffect defines that whenever todos are changed this method is called and below line is executed without this below line is executed with or without change in todos*/
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  /************************************************************/
  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />  {/* passing two props todos and onDelete to child component Todos.js */}
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
