import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>
        Ce mini-projet a pour but de faire de m'entrainer à utilise le hook
        useEffect()
      </h1>
      <nav>
        <Link className="link" to="/exo1">
          Exercice 1 : déclenchement basique
        </Link>
        <Link className="link" to="/exo2">
          Exercice 2 : compteur automatique
        </Link>
        <Link className="link" to="/exo3">
          Exercice 3 — Changement de titre de la page
        </Link>
        <Link className="link" to="/exo4">
          Exercice 4 — Compteur automatique avec arrêt
        </Link>
      </nav>
    </>
  );
}

export default App;
