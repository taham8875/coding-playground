import { useState } from "react";
import ThemeContext, { ThemeType } from "../context/ThemeContext";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
