import React, { useContext } from "react";
import "./App.css";
import TodoApp from "./components/Todo";
import TodoNavBar from "./components/TodoNavBar";
import styled from "styled-components";
import {
  IThemeStyles,
  themeContext,
  ThemeContextInterface,
} from "./components/ThemeHandler";
import GlobalStyle from "./globalStyles";

interface containerProps {
  styles: IThemeStyles;
}
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props: containerProps) => props.styles.backgroundColor};
  background-image: ${(props: containerProps) =>
    "url(" + props.styles.backgroundImg + ")"};
  background-repeat: no-repeat;
`;

const TodoContainer = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 5%;
  padding-bottom: 2em;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

function App() {
  const t = useContext<ThemeContextInterface>(themeContext);
  return (
    <div>
      <GlobalStyle />
      <Container styles={t.styles}>
        <TodoContainer>
          <TodoNavBar />
          <TodoApp />
        </TodoContainer>
      </Container>
    </div>
  );
}

export default App;
