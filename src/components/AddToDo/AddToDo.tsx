import { useContext, useState } from "react";
import { RadioBtnIcon } from "../DisplayTodo/DisplayTodo.styled";
import { ThemeContextInterface, themeContext } from "../ThemeHandler";
import { InputDiv, ToDoInput } from "./AddToDo.styled";
interface AddToDoProps {
  addToDo: (title: string) => void;
}

export default function AddToDo({ addToDo }: AddToDoProps) {
  let [title, setTitle] = useState<string>("");
  const t = useContext<ThemeContextInterface>(themeContext);
  return (
    <InputDiv styles={t.styles}>
      <RadioBtnIcon isDone={false} />
      <ToDoInput
        styles={t.styles}
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
      />
    </InputDiv>
  );
}
