import { Link } from "react-router-dom";

function Exercice2Parent() {
  return (
    <>
      <h1>Coucou</h1>
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice2Parent;
