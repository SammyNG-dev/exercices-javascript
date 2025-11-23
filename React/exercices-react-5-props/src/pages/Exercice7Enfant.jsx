function Exercice7Enfant({ children, cbk }) {
  return (
    <button type="button" onClick={cbk}>
      {children}
    </button>
  );
}

export default Exercice7Enfant;
