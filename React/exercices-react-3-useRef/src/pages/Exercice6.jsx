import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Exercice6() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <h1>Compteur : {count}</h1>
      <nav>
        <button
          disabled={active}
          type="button"
          onClick={() => {
            clearInterval(intervalRef.current);
            setActive(!active);
          }}
        >
          STOP
        </button>
        <button
          disabled={!active}
          type="button"
          onClick={() => {
            intervalRef.current = setInterval(
              () => setCount((prev) => prev + 1),
              100,
            );
            setActive(!active);
          }}
        >
          REPRENDRE
        </button>
        <button
          disabled={!active}
          type="button"
          onClick={() => {
            setCount(0);
          }}
        >
          RESTART
        </button>
        <Link className="link" to="/">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice6;
