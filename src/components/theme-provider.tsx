"use client";

import { createContext, useContext } from "react";

type Theme = {
    colors: {
      a: string;
      b: string;
    };
  };
  
  const defaultTheme: Theme = {
    colors: {
      a: "red",
      b: "blue",
    }
  };
  
  const ThemeContext = createContext<Theme>(defaultTheme);

  export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeContext value={defaultTheme}>
            {children}
        </ThemeContext>
    )
  }

export const useTheme = () => useContext(ThemeContext);