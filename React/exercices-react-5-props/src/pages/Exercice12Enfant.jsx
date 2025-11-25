function Exercice12Enfant({ setFiltre }) {
  return <input type="text" onChange={(e) => setFiltre(e.target.value)} />;
}

export default Exercice12Enfant;
