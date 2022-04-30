import React, { useState, createContext } from "react";

export const NewThemeContext = createContext();

export const NewThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");

  return (
    <NewThemeContext.Provider value={[movies, setMovies]}>
      {props.children}
    </NewThemeContext.Provider>
  );
};
