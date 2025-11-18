import { useState } from "react";
import { Link } from "react-router-dom";
import "./Exercice2.css";

function Exercice2() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={visible ? "div-exo2 visible" : "div-exo2"}></div>
      <nav>
        <button className="action-button" type="button" onClick={() => setVisible(!visible)}>
          {visible ? "Disparaîs !!" : "Apparaîs !!"}
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice2;
