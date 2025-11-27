import { Link } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

function Exercice3() {
  const { message, username } = useMessageContext();
  return (
    <>
      <h1>
        {message} {username}
      </h1>
      <nav>
        <Link to="/change-username" className="link">
          Changer username
        </Link>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice3;
