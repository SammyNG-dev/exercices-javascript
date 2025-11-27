import { Link } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

function Exercice1() {
  const { message } = useMessageContext();

  return (
    <>
      <h1>{message}</h1>
      <nav>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice1;
