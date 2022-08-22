import { useContext, useState } from "react";
import { Todo } from "../../Models";
import { todoContext } from "../Todo";
import {
  TodoFlexBox,
  TodoLeftGroup,
  CrossIcon,
  RadioBtnIcon,
  TodoTitle,
  TickMarkIcon,
} from "./DisplayTodo.styled";
import crossIcon from "../../images/icon-cross.svg";
import tickIcon from "../../images/icon-check.svg";
import { themeContext, ThemeContextInterface } from "../ThemeHandler";

interface DisplayTodoProps {
  todo: Todo;
}
export function DisplayTodo({ todo }: DisplayTodoProps) {
  const todoState = useContext(todoContext);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const t = useContext<ThemeContextInterface>(themeContext);
  return (
    <TodoFlexBox styles= {t.styles}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <TodoLeftGroup>
        <RadioBtnIcon isDone = {todo.isDone}
          onClick={() => todoState?.toggleCompleteStatus(todo.id)}
        >{todo.isDone && <TickMarkIcon src = {tickIcon}/>}</RadioBtnIcon>
        <TodoTitle styles ={t.styles} isDone = {todo.isDone}>{todo.title}</TodoTitle>
      </TodoLeftGroup>
      {isHovering && (
        <CrossIcon
          src={crossIcon}
          onClick={() => todoState?.deleteTodo(todo.id)}
        />
      )}
    </TodoFlexBox>
  );
}
