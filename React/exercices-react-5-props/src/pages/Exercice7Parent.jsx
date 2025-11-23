import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice7Enfant from "./Exercice7Enfant";

function Exercice7Parent() {
  const fruits = [
    { id: 1, nom: "Pomme" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ];

  const [nomFruit, setNomFruit] = useState("");

  const choisirFruit = (idFruit) => {
    const fruitChoisi = fruits.find((fruit) => fruit.id === idFruit);
    setNomFruit(fruitChoisi.nom);
  };

  return (
    <>
      {fruits.map((fruit) => {
        return (
          <>
            <h2 key={fruit.id}>{fruit.nom}</h2>
            <Exercice7Enfant cbk={() => choisirFruit(fruit.id)}>
              {fruit.nom}
            </Exercice7Enfant>
          </>
        );
      })}
      <h1>{`Tu as choisi : ${nomFruit}`}</h1>
      <Link to="/" className="link">Revenir en arrière</Link>
    </>
  );
}

export default Exercice7Parent;
