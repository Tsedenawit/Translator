import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeContextUpdater = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("red");

  const themeUpdater = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextUpdater.Provider value={themeUpdater}>
        {children}
      </ThemeContextUpdater.Provider>
    </ThemeContext.Provider>
  );
}
