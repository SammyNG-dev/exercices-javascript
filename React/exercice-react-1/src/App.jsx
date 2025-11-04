import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>
        Voici quelques exercices sur React.JS. Ce projet a pour but de
        s'entrainer à utiliser cette librairie
      </h1>
      <nav>
        <Link className="link" to="/exo1">
          Exercice 1 : compteur
        </Link>
        <Link className="link" to="/exo2">
          Exercice : compteur 2
        </Link>
      </nav>
    </>
  );
}

export default App;
