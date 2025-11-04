import { useState } from "react";

function Exercice1() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Compteur : {count}</p>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setCount((count) => count - 1)}>
        -1
      </button>
    </>
  );
}

export default Exercice1