import React, { createContext, useContext, useReducer, useState } from "react";
import { appReducer, initialValue } from "../Utils/AppReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [ editorValue, setEditorValue ] = useState("")
  const [state, dispatch] = useReducer(appReducer, initialValue);
  return (
    <AppContext.Provider value={{ state, dispatch, editorValue, setEditorValue }}>
      {children}
    </AppContext.Provider>
  );
  
};

export const useApp = () => {
  return useContext(AppContext);
};
