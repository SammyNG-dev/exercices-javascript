function Exercice3Enfant({ callback }) {
  return (
    <button className="action-button" type="button" onClick={callback}>
      Changer le message
    </button>
  );
}

export default Exercice3Enfant;
