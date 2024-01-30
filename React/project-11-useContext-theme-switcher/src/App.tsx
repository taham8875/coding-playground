import ThemeProvider from "./providers/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
