import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice4Enfant from "./Exercice4Enfant.jsx";

function Exercice4Parent() {
  const products = [
    { id: 1, nom: "Chaise", prix: 49 },
    { id: 2, nom: "Table", prix: 129 },
    { id: 3, nom: "Lampe", prix: 35 },
    { id: 4, nom: "Canapé", prix: 499 },
    { id: 5, nom: "Tapis", prix: 89 },
  ];

  const [productsList, setProductsList] = useState(products);

  const augmenterPrix = (id) => {
    setProductsList((prev) => {
      return prev.map((product) => {
        return product.id === id
          ? { ...product, prix: product.prix + 10 }
          : product;
      });
    });
  };

  return (
    <>
      {productsList.map((product) => {
        return (
          <>
            <h1 key={product.id}>{`${product.nom} : ${product.prix}€`}</h1>
            <Exercice4Enfant
              cbk={() => augmenterPrix(product.id)}
              product={product.nom}
            />
          </>
        );
      })}
      <nav>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice4Parent;
