import React, { useState } from 'react'
import styled from 'styled-components';

export enum ThemeEnum {
    Light = "light",
    Dark = "dark"
};

export interface ThemeContextInterface{
    theme:ThemeEnum;
    toggleTheme:()=>void;
}
export var themeContext = React.createContext<ThemeContextInterface>({theme:ThemeEnum.Light, toggleTheme:()=>{}});


export default function ThemeHandler({children}:{children: JSX.Element | JSX.Element[]}) {
    const [theme,setTheme] = useState<ThemeEnum>(ThemeEnum.Light);
    function toggleTheme(){
        setTheme((theme === ThemeEnum.Light)?ThemeEnum.Dark:ThemeEnum.Light);
    }
  return (
    <themeContext.Provider value = {{theme,toggleTheme}}>
        {children}
    </themeContext.Provider>
    );
}
