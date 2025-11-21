import { Link } from "react-router-dom";
import Exercice1Enfant from "./Exercice1Enfant";

function Exercice1Parent() {
  const nom = "John Doe";
  const age = 25;
  const ville = "Mulhouse";

  return (
    <>
      <Exercice1Enfant nom={nom} age={age} ville={ville} />
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice1Parent;
