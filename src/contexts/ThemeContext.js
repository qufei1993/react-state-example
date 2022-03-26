import React, { useState, useContext } from "react";

export const themes = {
  light: {
    type: 'light',
    background: '#ffffff',
    color: '#000000',
  },
  dark: {
    type: 'dark',
    background: '#000000',
    color: '#ffffff',
  },
};
const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);
  const context = {
    theme,
    toggleTheme: () => setTheme(theme === themes.dark
      ? themes.light
      : themes.dark)
  }
  return <ThemeContext.Provider value={context}>
    { children }
  </ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
