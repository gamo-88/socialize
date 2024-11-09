"use client"
import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = "dark"|"light"
interface ThemeContextType {
    theme: "dark"|"light";
    toggleTheme: ()=> void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


import React from 'react'

export const useThemeContext = ():ThemeContextType => {
    const theme = useContext(ThemeContext)

    if (theme === undefined) {
        throw new Error("le contexte du theme n'est pas dans son provider ThemeContextProvider");
    }
    return theme
}



export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light")
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>prevTheme === "light"? "dark":"light")
    }
    useEffect(()=>{
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    },[theme])
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>     
  )
}


