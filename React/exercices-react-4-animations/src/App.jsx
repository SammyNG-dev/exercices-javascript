import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>
        Ce mini-projet a pour but l'apprentissage des animations avec React
      </h1>
      <nav>
        <Link className="link" to="/exo1">
          Exercice 1 : Animation simple avec React et CSS
        </Link>
        <Link className="link" to="/exo2">
          Exercice 2 : Apparition et disparition animée
        </Link>
        <Link className="link" to="/exo3">
          Exercice 3 : Apparition en chaîne
        </Link>
        <Link to="/exo4" className="link">Exercice 4 : Hover et transform avancé</Link>
      </nav>
    </>
  );
}

export default App;
