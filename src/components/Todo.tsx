import React, { useContext, useEffect, useState } from "react";
import useToDoHook from "../hooks/todoHook";
import useTodoFilterHook from "../hooks/useTodoFilterHook";
import { Todo } from "../Models";
import crossIcon from "../images/icon-cross.svg";
import styled from "styled-components";
interface TodoContext {
    todos:Todo[],
    completeTodo:(todoId:number)=>void;
    deleteTodo:(todoId:number)=>void;
    deleteCompletedTodos:() => void;
}
const todoContext = React.createContext<TodoContext>({todos:[],completeTodo:()=>{},deleteTodo:()=>{}, deleteCompletedTodos:()=>{}});

export default function TodoApp() {
  const {todos,addToDo,completeTodo,deleteTodo,deleteCompletedTodos} = useToDoHook();
  return (
    <todoContext.Provider value={{todos:todos,completeTodo:completeTodo, deleteTodo:deleteTodo,deleteCompletedTodos:deleteCompletedTodos}}>
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
    let {deleteCompletedTodos} = useContext(todoContext);
  return (
    <div>
      {filteredTodos?.map((todo) => (
        <DisplayTodo todo={todo}></DisplayTodo>
      ))}
      <button onClick = {displayAll}>All</button>
      <button onClick = {showActiveOnly}>Active</button>
        <button onClick={showCompleted}>Completed</button>
        <button onClick = {()=>{deleteCompletedTodos()}}>Clear Completed</button>
    </div>
  );
}


interface DisplayTodoProps {
  todo: Todo;
}
let TodoFlexBox  = styled.div`
  display:flex;
  justify-content:space-between;
  border-bottom:1px solid   hsl(233, 14%, 35%);
  padding:0.5em;
  background-color:hsl(235, 24%, 19%);
  color:white;
`
const CrossIcon = styled.img`
  height:1em;
`
const RadioBtnIcon = styled.section`
  border:1px solid white;
  height:1em;
  border-radius:100%;
  width:1em;
`
const TodoLeftGroup = styled.div`
  display:flex;
  &>button{
    padding:0.25em;
  }
`
function DisplayTodo({ todo }: DisplayTodoProps) {
    const todoState = useContext(todoContext);

  return( 
  <TodoFlexBox>
    <TodoLeftGroup>
      <RadioBtnIcon onClick = {()=>todoState?.completeTodo(todo.id)}></RadioBtnIcon>
      <section>{todo.title}</section>
    </TodoLeftGroup>
    <CrossIcon src = {crossIcon} onClick = {() => todoState?.deleteTodo(todo.id)} />
  </TodoFlexBox>);
}
