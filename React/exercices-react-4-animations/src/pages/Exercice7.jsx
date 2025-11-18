import { useState } from "react";
import { Link } from "react-router-dom";
import "./Exercice7.css";

function Exercice7() {
  const [anime, setAnime] = useState(false);
  return (
    <>
      <div className={anime ? "exo7-box anime" : "exo7-box"}></div>
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => setAnime(!anime)}
        >
          {anime ? "Arrêter" : "Animer"}
        </button>
        <Link className="link" to="/">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice7;
