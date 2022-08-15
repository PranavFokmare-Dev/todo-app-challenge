import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/Todo';
import TodoNavBar from './components/TodoNavBar';

var themeContext= React.createContext<string>("dark");

function App() {
  return (
    <div>
      <TodoNavBar></TodoNavBar>
      <TodoApp></TodoApp>
    </div>
  );
}

export default App;
