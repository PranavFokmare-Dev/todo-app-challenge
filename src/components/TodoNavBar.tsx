import React, { useContext } from 'react'
import styled from 'styled-components';
import { themeContext, ThemeContextInterface } from './ThemeHandler';

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
    const {toggleTheme,styles} = useContext<ThemeContextInterface>(themeContext);
  return (
    <FlexContainer>
        <TodoHeader>T O D O</TodoHeader>
        <Icon onClick = {() => {toggleTheme()}} src = {styles.changeThemeIcon}/>
    </FlexContainer>
  )
}
