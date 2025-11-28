import { useThemeContext } from "../context/ThemeContext";

function Card() {
  const { theme } = useThemeContext();
  return (
    <article className={`card ${theme === "light" ? "dark" : "light"}`}>
      <h1>Bonjour</h1>
    </article>
  );
}

export default Card;
