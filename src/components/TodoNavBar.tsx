import React, { useState } from 'react'
import styled from 'styled-components';
import sunicon from '../images/icon-sun.svg'
import moonicon from '../images/icon-moon.svg'

const FlexContainer  = styled.div`
  display:flex;
  justify-content:space-between;
  padding-bottom:2em;
`

const Icon = styled.img`
  height:2em;
`

const TodoHeader = styled.div`
  color:white;
  font-size:2rem;
  font-weight:bold;
`

export default function TodoNavBar() {
    const [theme,setTheme] = useState<string>("light");
    function toggleTheme(){
        console.log("TOGGLED THEME");
        return (theme === "light")?"dark":"light";
    }
    const icon = (theme ==="light")?moonicon:sunicon;
  return (
    <FlexContainer>
        <TodoHeader>T O D O</TodoHeader>
        <Icon onClick = {() => {setTheme(toggleTheme())}} src = {icon}/>
    </FlexContainer>
  )
}
