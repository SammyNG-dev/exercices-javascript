import { Link } from "react-router-dom";
import Exercice3Enfant from "./Exercice3Enfant";

function Exercice3Parent() {
  return (
    <>
      <Exercice3Enfant />
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice3Parent;
