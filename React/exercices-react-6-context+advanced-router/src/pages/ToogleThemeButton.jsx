import { useThemeContext } from "../context/ThemeContext";

function ToggleThemeButton() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      type="button"
      className="action-button"
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? "Toggle Dark" : "Toggle Light"}
    </button>
  );
}

export default ToggleThemeButton;
