function Exercice8Enfant({ cbk, children }) {
  return (
    <button className="action-button" type="button" onClick={cbk}>
      {children}
    </button>
  );
}

export default Exercice8Enfant;
