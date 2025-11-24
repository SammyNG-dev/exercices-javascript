import { useId } from "react";

function Exercice11Enfant({ profil, cbk }) {
  const idNom = useId();
  const idAge = useId();
  const idVille = useId();
  return (
    <>
      <label htmlFor={idNom}>Nom : </label>
      <input
        id={idNom}
        type="text"
        onChange={(e) => cbk("nom", e.target.value)}
      />
      <label htmlFor={idAge}>Age : </label>
      <input
        id={idAge}
        type="text"
        onChange={(e) => cbk("age", e.target.value)}
      />
      <label htmlFor={idVille}>Ville : </label>
      <input
        id={idVille}
        type="text"
        onChange={(e) => cbk("ville", e.target.value)}
      />
      <h2>Nom : {profil.nom}</h2>
      <h2>Age : {profil.age}</h2>
      <h2>Ville: {profil.ville}</h2>
    </>
  );
}
export default Exercice11Enfant;
