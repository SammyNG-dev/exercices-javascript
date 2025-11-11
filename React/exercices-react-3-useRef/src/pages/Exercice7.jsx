import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Exercice7() {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(new Date());

  return (
    <>
      <h1>Compteur : {count}</h1>
      <h1>
        Heure du montage du composant :{" "}
        {startTimeRef.current.toLocaleTimeString()}
      </h1>
      <nav>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +1
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice7;
