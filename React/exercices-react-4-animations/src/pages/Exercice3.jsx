import { useState } from "react";
import { Link } from "react-router-dom";
import "./Exercice3.css";

function Exercice3() {
  const [transition, setTransition] = useState(false);
  return (
    <>
      <div className="boxes">
        <div className={transition ? "exo3-box delay" : "exo3-box"}></div>
        <div className={transition ? "exo3-box delay" : "exo3-box"}></div>
        <div className={transition ? "exo3-box delay" : "exo3-box"}></div>
        <div className={transition ? "exo3-box delay" : "exo3-box"}></div>
        <div className={transition ? "exo3-box delay" : "exo3-box"}></div>
      </div>
      <nav>
        <button className="action-button" type="button" onClick={() => setTransition(!transition)}>
          Delay
        </button>
        <Link className="link" to="/">Revenir en arrière</Link>
      </nav>
    </>
  );
}

export default Exercice3;
