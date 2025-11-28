import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToogleThemeButton";
import { useThemeContext } from "../context/ThemeContext";
import Card from "../components/Card";

function Exercice8() {
  const { theme } = useThemeContext();
  return (
    <>
      <h1>Theme actuel : {theme}</h1>
      <Card />
      <ToggleThemeButton />
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice8;
