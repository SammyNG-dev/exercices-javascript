import { Link } from "react-router-dom";
import Exercice2Enfant from "./Exercice2Enfant";

function Exercice2Parent() {
  const users = [
    { id: 1, nom: "Alice", age: 24 },
    { id: 2, nom: "Bob", age: 30 },
    { id: 3, nom: "Charlie", age: 28 },
  ];

  return (
    <>
      <Exercice2Enfant users={users} />
      <Link to="/" className="link">Revenir en arrière</Link>
    </>
  );
}

export default Exercice2Parent;
