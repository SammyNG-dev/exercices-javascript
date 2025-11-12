import { useRef, useState } from "react"
import { Link } from "react-router-dom";

function Exercice8() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <h1>Chronomètre : {timer}</h1>
      <nav>
        <button
          disabled={!isActive}
          type="button"
          onClick={() => {
            setIsActive(!isActive);
            intervalRef.current = setInterval(() => {
              setTimer((prev) => prev + 1);
            }, 1000);
          }}
        >
          DEMARRER
        </button>
        <button
          disabled={isActive}
          type="button"
          onClick={() => {
            clearInterval(intervalRef.current);
            setIsActive(!isActive);
          }}
        >
          PAUSE
        </button>
        <button disabled={!isActive} type="button" onClick={() => setTimer(0)}>
          REMETTRE A 0
        </button>
        <Link className="link" to="/">Revenir en arrière</Link>
      </nav>
    </>
  );
}

export default Exercice8;
