import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Ce projet a pour but de faire des exercices sur le hook useRef</h1>
      <nav>
        <Link className="link" to="/exo1">
          Exercice 1 : Nombre de rendus
        </Link>
        <Link className="link" to="/exo2">
          Exercice 2 : manipuler un élément du DOM avec useRef
        </Link>
        <Link className="link" to="/exo3">
          Exercice 3 : Suivre la valeur précédente d’un state avec useRef
        </Link>
        <Link className="link" to="/exo4">
          Exercice 4 : Mesurer un élément avec useRef
        </Link>
        <Link className="link" to="/exo5">
          Exercice 5 : Déclencher une action quand un champ change
        </Link>
      </nav>
    </>
  );
}

export default App;
