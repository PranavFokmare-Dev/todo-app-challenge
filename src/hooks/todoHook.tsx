import { useState } from "react";
import { Todo } from "../Models";

export interface TodoHookState {
  todos: Todo[];
  addToDo: (title: string) => void;
  toggleCompleteTodoStatus: (todoId: number) => void;
  deleteTodo: (todoId: number) => void;
  deleteCompletedTodos: () => void;
}
export default function useToDoHook(): TodoHookState {
  const [todos, setTodos] = useState<Todo[]>([]);
  function addToDo(title: string) {
    let newTodos = [...todos];
    newTodos.push({
      id: Date.now(),
      title: title,
      isDone: false,
    });
    setTodos(newTodos);
  }
  function toggleCompleteStatus(todoId: number) {
    setTodos(
      todos.map((t) =>
        t.id === todoId ? { id: t.id, title: t.title, isDone: !t.isDone } : t
      )
    );
  }
  function deleteTodo(todoId: number) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  function deleteCompletedTodos() {
    setTodos(todos.filter((t) => !t.isDone));
  }
  return {
    todos,
    addToDo,
    toggleCompleteTodoStatus: toggleCompleteStatus,
    deleteTodo,
    deleteCompletedTodos,
  };
}
