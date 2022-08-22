import { useContext, useState } from "react";
import useTodoFilterHook from "../../hooks/useTodoFilterHook";
import { Todo } from "../../Models";
import { DisplayTodo } from "../DisplayTodo/DisplayTodo";
import { themeContext, ThemeContextInterface } from "../ThemeHandler";
import { todoContext } from "../Todo";
import { ALink, BtnsContainer, ItemsLeft, TodoListContainer } from "./TodoList.styled";

interface TodolistProps {
  todos: Todo[];
}
export function TodoList({ todos }: TodolistProps) {
  let { filteredTodos, displayAll, showActiveOnly, showCompleted } =
    useTodoFilterHook(todos);
    const t = useContext<ThemeContextInterface>(themeContext);
  return (
    <TodoListContainer styles = {t.styles}>
      {filteredTodos?.map((todo) => (
        <DisplayTodo todo={todo}></DisplayTodo>
      ))}
      <Btns
        todos={todos}
        displayAll={displayAll}
        showActiveOnly={showActiveOnly}
        showCompleted={showCompleted}
      ></Btns>
    </TodoListContainer>
  );
}
interface BtnsProps {
  todos: Todo[];
  displayAll: () => void;
  showActiveOnly: () => void;
  showCompleted: () => void;
}

enum btnEnum{
    All="all",
    Active ="active",
    Completed = "completed"
}

function Btns({ todos, displayAll, showActiveOnly, showCompleted }: BtnsProps) {
  let { deleteCompletedTodos } = useContext(todoContext);
  const activeTodosLeft = todos.filter((t) => !t.isDone).length;
  const [activeBtn,setActiveBtn] = useState<btnEnum>(btnEnum.All);
  const t = useContext<ThemeContextInterface>(themeContext);
  return (
    <BtnsContainer>
      <ItemsLeft styles = {t.styles}>{activeTodosLeft} items left</ItemsLeft>
      <div>
        <ALink styles= {t.styles} isActive = {activeBtn === btnEnum.All} onClick={()=>{displayAll();setActiveBtn(btnEnum.All);}}>All</ALink>
        <ALink styles= {t.styles} isActive = {activeBtn === btnEnum.Active}onClick={()=>{showActiveOnly(); setActiveBtn(btnEnum.Active);}}>Active</ALink>
        <ALink styles= {t.styles} isActive = {activeBtn === btnEnum.Completed} onClick={()=>{showCompleted(); setActiveBtn(btnEnum.Completed);}}>Completed</ALink>
      </div>

      <ALink styles= {t.styles} isActive = {false}
        onClick={() => {
          deleteCompletedTodos();
        }}
      >
        Clear Completed
      </ALink>
    </BtnsContainer>
  );
}
