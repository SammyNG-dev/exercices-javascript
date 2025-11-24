import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice10Enfant from "./Exercice10Enfant";

function Exercice10Parent() {
  const [profil, setProfil] = useState({
    nom: "Arthur",
    age: 36,
    ville: "Lyon",
  });
  const changerNom = (nouveauNom) => {
    setProfil({ ...profil, nom: nouveauNom });
  };

  return (
    <>
      <Exercice10Enfant cbk={changerNom} profil={profil} />
      <Link to="/" className="link">Revenir en arrière</Link>
    </>
  );
}
export default Exercice10Parent;
