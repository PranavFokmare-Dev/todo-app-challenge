import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/Todo';
import TodoNavBar from './components/TodoNavBar';
import styled from 'styled-components';
import ThemeHandler from './components/ThemeHandler';
var themeContext= React.createContext<string>("dark");


const Container = styled.div`
  width:100%;
  min-height:100vh;
  background-color:hsl(235, 21%, 11%);
  background-image: url("./static/media/bg-desktop-dark.73e47dbb723ebc772ef0.jpg");
  background-repeat:no-repeat;
`


const TodoContainer = styled.div`
width:40%;
margin:auto;
padding-top:5%;
`;

function App() {
  return (
    <Container>
      <TodoContainer>
        <ThemeHandler>
          <TodoNavBar/>
          <TodoApp/>
        </ThemeHandler>
      </TodoContainer>
    </Container>

  );
}

export default App;
