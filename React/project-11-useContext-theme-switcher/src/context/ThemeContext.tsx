import { createContext } from "react";

export type ThemeType = "light" | "dark";

type ThemeContextType = [
  ThemeType,
  React.Dispatch<React.SetStateAction<ThemeType>>
];

const ThemeContext = createContext<ThemeContextType>(["light", () => {}]);

export default ThemeContext;
