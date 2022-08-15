import React, { useContext, useEffect, useState } from "react";
import useToDoHook from "../hooks/todoHook";
import useTodoFilterHook from "../hooks/useTodoFilterHook";
import { Todo } from "../Models";

interface TodoContext {
    todos:Todo[],
    completeTodo:(todoId:number)=>void;
    deleteTodo:(todoId:number)=>void;
}
const todoContext = React.createContext<TodoContext>({todos:[],completeTodo:()=>{},deleteTodo:()=>{}});

export default function TodoApp() {
  const {todos,addToDo,completeTodo,deleteTodo} = useToDoHook();
  return (
    <todoContext.Provider value={{todos:todos,completeTodo:completeTodo, deleteTodo:deleteTodo}}>
      <AddToDo addToDo={addToDo}></AddToDo>
      <TodoList todos = {todos}></TodoList>
    </todoContext.Provider>
  );
}
interface AddToDoProps {
  addToDo: (title: string) => void;
}
function AddToDo({ addToDo }: AddToDoProps) {
  let [title, setTitle] = useState<string>("");
  return (
    <input
      type="text"
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          addToDo(title);
          setTitle("");
        }
      }}
      onChange={(event) => {
        setTitle(event.target.value);
      }}
      value={title}
    ></input>
  );
}
interface TodolistProps{
    todos:Todo[];
}
function TodoList({todos}:TodolistProps) {
    let {filteredTodos, displayAll,showActiveOnly,showCompleted} = useTodoFilterHook(todos);
  return (
    <div>
      {filteredTodos?.map((todo) => (
        <DisplayTodo todo={todo}></DisplayTodo>
      ))}
      <button onClick = {displayAll}>All</button>
      <button onClick = {showActiveOnly}>Active</button>
        <button onClick={showCompleted}>Completed</button>
    </div>
  );
}
interface DisplayTodoProps {
  todo: Todo;
}
function DisplayTodo({ todo }: DisplayTodoProps) {
    const todoState = useContext(todoContext);

  return( <div>
    <hr></hr>
    <button disabled = {todo.isDone} onClick = {()=>todoState?.completeTodo(todo.id)}>Complete</button>
    <section>{todo.title}</section>
    <button onClick = {() => todoState?.deleteTodo(todo.id)}>Delete</button>
    <hr></hr>
  </div>);
}
