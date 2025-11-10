import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Exercice3() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);
  return (
    <>
      <h1>Actuel : {count}</h1>
      <h1>Précédent {previousCount.current}</h1>
      <nav>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          +1
        </button>
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          -1
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice3;
