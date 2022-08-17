import React, { createContext, useContext, useReducer } from "react";
import { appReducer, initialValue } from "../Utils/AppReducer";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialValue);
  return (
    <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
