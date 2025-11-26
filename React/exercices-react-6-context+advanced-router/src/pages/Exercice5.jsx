import { Link } from "react-router-dom";

function Exercice5() {
  return (
    <>
      <h1>Exercice 5</h1>
      <p>Bienvenue dans l'exercice 5 !</p>
      <Link to="/" className="link">
        Revenir
      </Link>
    </>
  );
}

export default Exercice5;
