import { Link } from "react-router-dom";
import "./App.css";
import ToggleThemeButton from "./pages/ToogleThemeButton";

function App() {
  return (
    <>
      <ToggleThemeButton />
      <h1>Ce mini-projet a pour but de travailler l'API Context de React + routing avancé</h1>
      <nav>
        <Link to="/exo1" className="link">
          Exercice 1 : Afficher un message global avec la Context API et React
          Router
        </Link>
        <Link to="/exo2" className="link">
          Exercice 2 : Modifier un état global
        </Link>
        <Link to="/exo3" className="link">
          Exercice 3 : Mettre à jour un pseudonyme
        </Link>
        <Link to="/exo4" className="link">
          Exercice 4 : Notifications avec Context + Router
        </Link>
        <Link to="/exo5" className="link">
          Exercice 5 : Compteur avec Context
        </Link>
        <Link to="/exo6" className="link">
          Exercice 6 : Créer un système d’historique avec un Context dédié
        </Link>
      </nav>
    </>
  );
}

export default App;
