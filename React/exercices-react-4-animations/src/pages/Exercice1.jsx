import { useState } from "react";
import { Link } from "react-router-dom";
import "./Exercice1.css"

function Exercice1() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={active ? "box active" : "box"}></div>
      <nav>
        <button type="button" onClick={() => setActive(!active)}>
          {active ? "Aller à gauche" : "Aller à droite"}
        </button>
        <Link className="link" to="/">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice1