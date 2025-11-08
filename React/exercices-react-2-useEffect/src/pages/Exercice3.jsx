import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Exercice3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Compteur ${count}`;
  }, [count]);
  
  return (
    <nav>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +1
      </button>
      <button
        type="button"
        className={count===0 ? "borderless" : null}
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 0}
      >
        -1
      </button>
      <Link className="link" to="/">
        Revenir en arrière
      </Link>
    </nav>
  );
}

export default Exercice3;
