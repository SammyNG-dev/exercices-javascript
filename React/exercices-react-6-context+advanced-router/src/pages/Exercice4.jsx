import { Link } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

function Exercice4() {
  const { notifications } = useMessageContext();

  return (
    <>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((n) => {
            return (
              <li key={n.id}>
                <h1>{n.notif}</h1>
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>Aucune notification</h1>
      )}
      <nav>
        <Link to="/add-notification" className="link">
          Ajouter une notification
        </Link>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice4;
