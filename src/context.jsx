import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [ isDarkMode, setIsDarkMode ] = useState(false)
  
  const toggleDarkMode = ()=>{
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
  }
  return <AppContext.Provider value={{isDarkMode, toggleDarkMode}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
