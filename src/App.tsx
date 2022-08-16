import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/Todo';
import TodoNavBar from './components/TodoNavBar';
import styled from 'styled-components';
var themeContext= React.createContext<string>("dark");

const Container = styled.div`

width:80%;
margin:auto;
`;

function App() {
  return (
    <Container>
      <TodoNavBar></TodoNavBar>
      <TodoApp></TodoApp>
    </Container>
  );
}

export default App;
