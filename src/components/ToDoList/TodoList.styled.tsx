import styled from 'styled-components';
import { IThemeStyles } from '../ThemeHandler';


export const TodoListContainer = styled.div`
    background-color:${(props:{styles:IThemeStyles})=>props.styles.todoListBgColor};
    border-radius:5px;
    padding:0.25em 0 ;
`
export const BtnsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0.5em 0.5em;
`
export const ItemsLeft = styled.section`
color:
${(props:{styles:IThemeStyles})=>props.styles.completedTextColor}
;
`;
export interface AlinkProps{
    isActive:boolean;
    styles:IThemeStyles;
}
export const ALink = styled.a`
    color:${(props:AlinkProps)=>(!props.isActive)?props.styles.completedTextColor:"#6571dd"};
    font-weight:${(props:AlinkProps)=>(props.isActive)?"bold":"normal"};
    cursor: pointer;
    &:hover{
        color:${(props:AlinkProps)=>props.styles.btnHoverColor};
    }
    margin:0 0.25em;
`