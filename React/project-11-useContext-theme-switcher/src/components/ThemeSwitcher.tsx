import useTheme from "../hooks/useTheme";

function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#000",
    color: theme === "light" ? "#000" : "#fff",
    padding: "2rem",
  };

  return (
    <div style={style}>
      <h1>Current theme : {theme} </h1>
      <button
        onClick={() =>
          setTheme((previousTheme) =>
            previousTheme === "light" ? "dark" : "light"
          )
        }
      >
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
