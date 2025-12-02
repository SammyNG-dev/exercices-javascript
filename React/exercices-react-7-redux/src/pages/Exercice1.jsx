import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Exercice1() {
  const { counter } = useSelector((state) => state.counter);
  return (
    <>
      <h1>Compteur : {counter}</h1>
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice1;
