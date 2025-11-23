import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice8Enfant from "./Exercice8Enfant";

function Exercice8Parent() {
  const profil = {
    nom: "Arthur",
    age: 36,
    ville: "Lyon",
  };

  const [profile, setProfile] = useState(profil);

  const villes = ["Paris", "Marseille", "Bordeaux", "Lyon"];

  const changerVille = (nouvelleVille) => {
    setProfile({ ...profile, ville: nouvelleVille });
  };

  return (
    <>
      <h1>Nom : {profile.nom}</h1>
      <h1>Age : {profile.age} ans</h1>
      <h1>Ville : {profile.ville}</h1>
      <nav>
        {villes.map((ville) => {
          return (
            <Exercice8Enfant key={ville} cbk={() => changerVille(ville)}>
              {ville}
            </Exercice8Enfant>
          );
        })}
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice8Parent;
