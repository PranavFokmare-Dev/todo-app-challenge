import React, { useState } from "react";
import darkBgImg from "../images/bg-desktop-dark.jpg";
import lightBgImg from "../images/bg-desktop-light.jpg";
import sunicon from "../images/icon-sun.svg";
import moonicon from "../images/icon-moon.svg";

export enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}

export interface IThemeStyles {
  backgroundImg: string; //Done
  textColor: string;
  completedTextColor: string;
  btnHoverColor: string;
  btnTextColor: string;
  todoListBgColor: string;
  backgroundColor: string;
  todoBottomBorderColor: string;
  changeThemeIcon: string;
}

const darkTheme: IThemeStyles = {
  backgroundImg: darkBgImg,
  textColor: "white",
  completedTextColor: "hsl(234, 11%, 52%)",
  btnHoverColor: "white",
  btnTextColor: "hsl(234, 11%, 52%)",
  todoListBgColor: "hsl(235, 24%, 19%)",
  backgroundColor: "hsl(235, 21%, 11%)",
  todoBottomBorderColor: "hsl(233, 14%, 35%)",
  changeThemeIcon: sunicon,
};
const lightTheme: IThemeStyles = {
  backgroundImg: lightBgImg,
  textColor: "black",
  completedTextColor: "hsl(234, 11%, 52%)",
  btnHoverColor: "black",
  btnTextColor: "hsl(234, 11%, 52%)",
  todoListBgColor: "white",
  backgroundColor: "hsl(0, 4.347826086956503%, 90.98039215686275%)",
  todoBottomBorderColor: "#d9d9db",
  changeThemeIcon: moonicon,
};

export interface ThemeContextInterface {
  theme: ThemeEnum;
  toggleTheme: () => void;
  styles: IThemeStyles;
}
export var themeContext = React.createContext<ThemeContextInterface>({
  theme: ThemeEnum.Light,
  toggleTheme: () => {},
  styles: darkTheme,
});

export default function ThemeHandler({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Dark);
  const [styles, setStyles] = useState(darkTheme);
  function toggleTheme() {
    setTheme(theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light);
    setStyles(theme === ThemeEnum.Light ? darkTheme : lightTheme);
    console.log("Toggle theme");
  }
  return (
    <themeContext.Provider value={{ theme, toggleTheme, styles: styles }}>
      {children}
    </themeContext.Provider>
  );
}
