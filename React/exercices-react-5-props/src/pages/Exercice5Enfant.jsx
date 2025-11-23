function Exercice5Enfant({ cbk, children }) {
  return (
    <button type="button" className="action-button" onClick={cbk}>
      {children}
    </button>
  );
}

export default Exercice5Enfant;
