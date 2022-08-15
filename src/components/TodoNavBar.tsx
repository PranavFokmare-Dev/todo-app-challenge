import React, { useState } from 'react'


export default function TodoNavBar() {
    const [theme,setTheme] = useState<string>("light");
    function toggleTheme(){
        return (theme === "light")?"dark":"light";
    }
  return (
    <div>
        <h1>Todo</h1>
        <button onClick = {() => {setTheme(toggleTheme())}}>{theme}</button>
    </div>
  )
}
