function Exercice4Enfant({ product, cbk }) {
  return (
    <button className="action-button" type="button" onClick={cbk}>
      {product}
    </button>
  );
}

export default Exercice4Enfant;
