import React, { useContext } from 'react'
import styled from 'styled-components';
import sunicon from '../images/icon-sun.svg'
import moonicon from '../images/icon-moon.svg'
import { themeContext, ThemeContextInterface, ThemeEnum } from './ThemeHandler';

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
    const {theme,toggleTheme} = useContext<ThemeContextInterface>(themeContext);

    const icon = (theme ===ThemeEnum.Light)?moonicon:sunicon;
  return (
    <FlexContainer>
        <TodoHeader>T O D O</TodoHeader>
        <Icon onClick = {() => {toggleTheme()}} src = {icon}/>
    </FlexContainer>
  )
}
