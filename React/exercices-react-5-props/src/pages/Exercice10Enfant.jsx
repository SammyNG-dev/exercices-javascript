function Exercice10Enfant({ cbk, profil }) {
  return (
    <>
      <input type="text" onChange={(e) => cbk(e.target.value)} />
      <h2>{profil.nom}</h2>
    </>
  );
}

export default Exercice10Enfant;
