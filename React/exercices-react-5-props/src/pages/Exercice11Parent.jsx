import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice11Enfant from "./Exercice11Enfant";

function Exercice11Parent() {
  const [profil, setProfil] = useState({ nom: "", age: "", ville: "" });

  const mettreAjourProfil = (champ, valeur) => {
    setProfil({ ...profil, [champ]: valeur });
  };

  return (
    <>
      <Exercice11Enfant profil={profil} cbk={mettreAjourProfil} />
      <Link to="/" className="link">Revenir en arrière</Link>
    </>
  );
}

export default Exercice11Parent;
