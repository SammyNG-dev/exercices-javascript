import { Link } from "react-router-dom";
import "./Exercice8.css";

function Exercice8() {
  return (
    <>
      <div className="exo8-container">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <Link className="link" to="/">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice8;
