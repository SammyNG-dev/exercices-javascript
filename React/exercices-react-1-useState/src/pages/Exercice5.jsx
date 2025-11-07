import { useId, useState } from "react";
import { Link } from "react-router-dom";

function Exercice5() {
  const [list, setList] = useState([]);
  const [valeur, setValeur] = useState("");
  const [filtre, setFiltre] = useState(null);
  const searchId = useId();

  return (
    <div className="exo4">
      <form>
        <div>
          <input
            type="text"
            onChange={(event) => {
              setValeur(event.target.value);
            }}
          />

          <button
            type="button"
            onClick={() =>
              valeur.length > 0
                ? list.includes(valeur.toLowerCase())
                  ? alert(
                      "ATTENTION : cet élément se trouve déjà dans la liste !",
                    )
                  : setList([...list, valeur])
                : alert("ATTENTION : Le champ ne doit pas être vide !")
            }
          >
            Ajouter
          </button>
        </div>
        <label htmlFor={searchId}>Rechercher dans la liste : </label>
        <input
          id={searchId}
          type="text"
          onChange={(event) => {
            setFiltre(event.target.value);
          }}
        />
      </form>
      {list.length > 0 ? (
        <ul>
          {filtre ? (
            list
              .filter((element) =>
                element.toLowerCase().startsWith(filtre.toLowerCase()),
              )
              .map((element) => {
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
              })
          ) : (
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
          )}
        </ul>
      ) : null}
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </div>
  );
}

export default Exercice5;
