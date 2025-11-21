import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice3Enfant from "./Exercice3Enfant";

function Exercice3Parent() {
  const [message, setMessage] = useState("Aucun message");

  const changerMessage = () => {
    setMessage("Message reçu depuis l'enfant");
  };

  return (
    <>
      <h1>{message}</h1>
      <nav>
        <Exercice3Enfant callback={changerMessage} />
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice3Parent;
