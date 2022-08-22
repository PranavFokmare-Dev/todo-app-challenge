import styled from "styled-components"
import { IThemeStyles } from "../ThemeHandler";

export let TodoFlexBox  = styled.div`
  display:flex;
  justify-content:space-between;
  border-bottom:1px solid ${(props:{styles:IThemeStyles})=>props.styles.todoBottomBorderColor};
  padding:0.5em 0;
  background-color:${(props:{styles:IThemeStyles})=>props.styles.todoListBgColor};
  color:${(props:{styles:IThemeStyles})=>props.styles.textColor};
  align-items:center;
`
export const CrossIcon = styled.img`
  height:1em;
  margin-right:0.5em;
`

interface RadioBtnIconProps{
    isDone : boolean;
}

export const RadioBtnIcon = styled.section`
  border:1px solid #787da7;
  border-radius:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:1em;
    min-height:1em;
  margin-left:0.5em;
  margin-right:0.5em;
${(props:RadioBtnIconProps)=>props.isDone && "background-image: linear-gradient(to right,hsl(192, 100%, 67%),  hsl(280, 87%, 65%))"};
  
${(props:RadioBtnIconProps)=>props.isDone && "text-decoration: line-through"};
  &:hover{
    border:1px solid #a1a7e2;
  }

`

export const TickMarkIcon=styled.img`
    height:0.5em;
    width:0.5em;

`;

interface TodoTitleProps{
    isDone : boolean;
    styles:IThemeStyles;
}
export const TodoTitle = styled.section`
    ${(props:TodoTitleProps)=>props.isDone && "text-decoration: line-through"};
    ${(props:TodoTitleProps)=>props.isDone && "color: "+props.styles.completedTextColor};
`
export const TodoLeftGroup = styled.div`
  display:flex;
  align-items:center;
  &>button{
    padding:0.25em;
  }`