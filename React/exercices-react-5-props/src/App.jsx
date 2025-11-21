import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>
        Ce mini-projet a pour but de faire des execrcices sur les props avec
        React
      </h1>
      <nav>
        <Link to="/exo1" className="link">
          Exercice 1 : Passer des props simples
        </Link>
        <Link to="/exo2" className="link">
          Exercice 2 : Props dynamiques avec une liste
        </Link>
        <Link to="/exo3" className="link">
          Exercice 3 : Faire remonter une action (callback props)
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
