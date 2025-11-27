import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Coucou</h1>
      <nav>
        <Link to="/exo1" className="link">
          Exercice 1 : Afficher un message global avec la Context API et React
          Router
        </Link>
        <Link to="/exo2" className="link">
          Exercice 2 : Modifier un état global
        </Link>
        <Link to="/exo3" className="link">
          Exercice 3 :{" "}
        </Link>
        <Link to="/exo4" className="link">
          Exercice 4 :{" "}
        </Link>
        <Link to="/exo5" className="link">
          Exercice 5 :{" "}
        </Link>
      </nav>
    </>
  );
}

export default App;
