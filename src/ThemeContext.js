import {createContext, useCallback, useState} from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    console.log(`useTheme:toggleTheme:${darkTheme}`);
    setDarkTheme(prev => !prev);
  };
  
  const value = {
    darkTheme,
    //toggleTheme,
    toggleTheme: useCallback(toggleTheme,[]),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
