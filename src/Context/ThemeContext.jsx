import React from "react";
import { ThemeContext } from "../../hooks/useTheme";
import useLocalStorage from "../../hooks/Localstorage";

// Provider
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useLocalStorage("darkmode",""); // true = dark, default
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

