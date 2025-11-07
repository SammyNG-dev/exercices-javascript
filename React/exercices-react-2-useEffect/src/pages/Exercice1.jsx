import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Exercice1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Le composant a été rendu");
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <C'est voulu qu'il y ait la dépendance du compteur>
  useEffect(() => {
    console.log("Le compteur a changé");
  }, [count]);

  return (
    <>
      <h1>Exo 1 : (regarder dans la console)</h1>
      <h2>Compteur : {count}</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +1
      </button>
      <Link className="link" to="/">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice1;
