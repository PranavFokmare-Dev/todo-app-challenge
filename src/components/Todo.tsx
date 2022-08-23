import React from "react";
import useToDoHook from "../hooks/todoHook";
import { Todo } from "../Models";
import AddToDo from "./AddToDo/AddToDo";
import { TodoList } from "./ToDoList/TodoList";
interface TodoContext {
  todos: Todo[];
  toggleCompleteStatus: (todoId: number) => void;
  deleteTodo: (todoId: number) => void;
  deleteCompletedTodos: () => void;
}
export const todoContext = React.createContext<TodoContext>({
  todos: [],
  toggleCompleteStatus: () => {},
  deleteTodo: () => {},
  deleteCompletedTodos: () => {},
});

export default function TodoApp() {
  const {
    todos,
    addToDo,
    toggleCompleteTodoStatus: toggleCompleteStatus,
    deleteTodo,
    deleteCompletedTodos,
  } = useToDoHook();
  return (
    <todoContext.Provider
      value={{
        todos: todos,
        toggleCompleteStatus: toggleCompleteStatus,
        deleteTodo: deleteTodo,
        deleteCompletedTodos: deleteCompletedTodos,
      }}
    >
      <AddToDo addToDo={addToDo}></AddToDo>
      <TodoList todos={todos}></TodoList>
    </todoContext.Provider>
  );
}
