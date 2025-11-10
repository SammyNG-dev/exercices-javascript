import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Exercice1() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <>
      <h1>Compteur : {count}</h1>
      <h1>Nombre de rendus : {renderCount.current}</h1>
      <nav>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +1
        </button>
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          -1
        </button>
        <Link className="link" to="/">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice1;
