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
      </nav>
    </>
  );
}

export default App;
