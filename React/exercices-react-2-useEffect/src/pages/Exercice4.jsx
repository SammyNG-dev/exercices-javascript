import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Exercice4() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interville = setInterval(() => {
      setCount((prev) => {
        if (prev === 10) {
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interville);
  }, []);

  return (
    <>
      <h1>Compteur : {count}</h1>
      <Link to="/" className="link">Revenir en arrière</Link>
    </>
  );
}

export default Exercice4;
