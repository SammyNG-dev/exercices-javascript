import { useState } from "react";
import { Link } from "react-router-dom";
import "./Exercice5.css";

function Exercice5() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={visible ? "div-exo5 visible" : "div-exo5"}></div>
      <div className={visible ? "div-exo5 visible" : "div-exo5"}></div>
      <div className={visible ? "div-exo5 visible" : "div-exo5"}></div>
      <div className={visible ? "div-exo5 visible" : "div-exo5"}></div>
      <div className={visible ? "div-exo5 visible" : "div-exo5"}></div>
      <nav>
        <button type="button" onClick={() => setVisible(!visible)}>
          {visible ? "Disparaître" : "Apparaître"}
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice5;
