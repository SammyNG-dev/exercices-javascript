import { useState } from "react";
import { Link } from "react-router-dom";

function Exercice2() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Compteur : {count}</h1>
      <nav>
        <button type="button" onClick={() => setCount((count) => count + 10)}>
          +10
        </button>
        <button type="button" onClick={() => setCount((count) => count - 5)}>
          -5
        </button>
        <Link className="link" to="/">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice2;
