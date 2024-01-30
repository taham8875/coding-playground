import { createContext } from "react";

export type ThemeType = "light" | "dark";

export type ThemeContextType = [
  ThemeType,
  React.Dispatch<React.SetStateAction<ThemeType>>
];

const ThemeContext = createContext<ThemeContextType | null>(null); // null is the default value which is used when the context is accessed outside of a provider

export default ThemeContext;
