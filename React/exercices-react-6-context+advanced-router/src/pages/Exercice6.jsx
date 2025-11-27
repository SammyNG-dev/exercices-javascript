import { Link } from "react-router-dom";
import { useHistoryContext } from "../context/HistoryContext";

function Exercice6() {
  const { history, removeEntry, clearHistory } = useHistoryContext();

  return (
    <>
      {history.length > 0 ? (
        <ul>
          {history.map((item) => {
            return (
              <li key={item.id}>
                <h2>{item.text}</h2>
                <button
                  type="button"
                  className="action-button"
                  onClick={() => removeEntry(item.id)}
                >
                  Supprimer Entrée
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>Aucun historique à afficher</h1>
      )}
      <nav>
        <Link to="/add-history" className="link">
          Ajouter une entrée
        </Link>
        <button
          type="button"
          className="action-button"
          onClick={() => clearHistory()}
        >
          Vider le tableau
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice6;
