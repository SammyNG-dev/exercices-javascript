import { useState } from "react";
import { Link } from "react-router-dom";

function Exercice4() {
  const [list, setList] = useState([]);
  const [valeur, setValeur] = useState(null);

  return (
    <div className="exo4">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          onChange={(event) => setValeur(event.target.value)}
        />
        <button type="button" onClick={() => setList([...list, valeur])}>
          Ajouter
        </button>
      </form>
      {list.length > 0 ? (
        <ul>
          {list.map((element) => {
            return (
              <div key={element} className="list-element">
                <li>{element}</li>
                <button
                  type="button"
                  onClick={() => setList(list.filter((e) => e !== element))}
                >
                  Supprimer
                </button>
              </div>
            );
          })}
        </ul>
      ) : null}
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </div>
  );
}

export default Exercice4;
