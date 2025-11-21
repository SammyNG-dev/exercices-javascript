import { Link } from "react-router-dom";
import "./Exercice9.css";
import { useState } from "react";

function Exercice9() {

    const [visible, setVisible] = useState(false)
  return (
    <>
      <div className={visible ? "circle visible" : "circle reverse"}></div>
      <div className={visible ? "circle visible" : "circle reverse"}></div>
      <div className={visible ? "circle visible" : "circle reverse"}></div>
      <nav>
      <button type="button" className="action-button" onClick={()=> setVisible(!visible)}>{visible ? "Disparaître" : "Apparaître"}</button>
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
      </nav>
    </>
  );
}

export default Exercice9;
