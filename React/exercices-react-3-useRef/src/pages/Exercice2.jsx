import { useRef } from "react";
import { Link } from "react-router-dom";

function Exercice2() {
  const inputRef = useRef(null);
  return (
    <>
      <input type="text" ref={inputRef} />
      <nav>
        <button type="button" onClick={() => inputRef.current.focus()}>
          Focus
        </button>
        <Link className="link" to="/">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice2;
