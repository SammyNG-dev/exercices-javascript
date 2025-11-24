import { useId, useState } from "react";
import { Link } from "react-router-dom";
import Exercice9Enfant from "./Exercice9Enfant";

function Exercice9Parent() {
  const [profil, setProfile] = useState({ nom: "", age: "", ville: "" });
  const idNom = useId();
  const idAge = useId();
  const idVille = useId();

  return (
    <>
      <label htmlFor={idNom}>Nom : </label>
      <input
        id={idNom}
        type="text"
        onChange={(e) => setProfile({ ...profil, nom: e.target.value })}
      />
      <label htmlFor={idAge}>Age : </label>
      <input
        id={idAge}
        type="text"
        onChange={(e) => setProfile({ ...profil, age: e.target.value })}
      />
      <label htmlFor={idVille}>Ville : </label>
      <input
        id={idVille}
        type="text"
        onChange={(e) => setProfile({ ...profil, ville: e.target.value })}
      />
      <Exercice9Enfant profil={profil}/>
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice9Parent;
