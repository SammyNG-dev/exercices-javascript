import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>
        Voici quelques exercices sur React.JS. Ce projet a pour but de
        s'entrainer à utiliser le hook useState()
      </h1>
      <nav>
        <Link className="link" to="/exo1">
          Exercice 1 : compteur
        </Link>
        <Link className="link" to="/exo2">
          Exercice 2 : compteur 2
        </Link>
        <Link className="link" to="/exo3">
          Exercice 3 : state formulaire
        </Link>
        <Link className="link" to="/exo4">
          Exercice 4 : Liste dynamique
        </Link>
        <Link className="link" to="/exo5">
          Exercice 5 : Filtrage liste
        </Link>
      </nav>
    </>
  );
}

export default App;
