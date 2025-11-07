import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>
        Ce mini-projet a pour but de faire de m'entrainer à utilise le hook
        useEffect()
      </h1>
      <Link className="link" to="/exo1">
        Exercice 1 : déclenchement basique
      </Link>
    </>
  );
}

export default App;
