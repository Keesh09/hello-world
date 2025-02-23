import { createContext, useState } from "react";

const MyContext= createContext();

const Context1= ({children})=> {
    const [theme, setTheme]= useState('light');
    const toggleTheme= ()=> {
       setTheme(theme=== 'light'? 'dark': 'light')
    };

    return (
        <MyContext.Provider value={{theme, toggleTheme}}>
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, Context1}