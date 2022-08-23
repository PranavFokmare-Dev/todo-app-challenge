import styled from "styled-components";
import { IThemeStyles } from "../ThemeHandler";

export const ToDoInput = styled.input`
  border: none;
  width: 100%;
  background-color: inherit;
  color: ${(props: { styles: IThemeStyles }) => props.styles.textColor};

  &:focus {
    outline: none;
  }
`;
export const InputDiv = styled.div`
  background-color: ${(props: { styles: IThemeStyles }) =>
    props.styles.todoListBgColor};
  width: 100%;
  height: 2.5em;
  margin-bottom: 2em;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;
