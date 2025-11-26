import { Link } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

function Exercice2() {
  const { message } = useMessageContext();

  return (
    <>
      <h1>{message}</h1>
      <nav>
        <Link to="/change-message" className="link">
          Modifier le message
        </Link>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}
export default Exercice2;
