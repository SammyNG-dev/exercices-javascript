import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice5Enfant from "./Exercice5Enfant";

function Exercice5Parent() {
  const [count, setCount] = useState(0);

  const incrementer = () => {
    setCount((prev) => prev + 1);
  };

  const decrementer = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <nav>
        <Exercice5Enfant cbk={incrementer}>+1</Exercice5Enfant>
        <Exercice5Enfant cbk={decrementer}>-1</Exercice5Enfant>
        <Exercice5Enfant cbk={reset}>Reset</Exercice5Enfant>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice5Parent;
