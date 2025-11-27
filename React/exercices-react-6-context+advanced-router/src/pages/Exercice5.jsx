import { Link } from "react-router-dom";
import { useCounterContext } from "../context/CounterContext";

function Exercice5() {
  const { count, increment, decrement, reset } = useCounterContext();
  return (
    <>
      <h1>Context Counter : {count}</h1>
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => increment()}
        >
          +1
        </button>
        <button
          type="button"
          className="action-button"
          onClick={() => decrement()}
        >
          -1
        </button>
        <button type="button" className="action-button" onClick={() => reset()}>
          Reset
        </button>
        <Link to="/" className="link">
          Revenir
        </Link>
      </nav>
    </>
  );
}

export default Exercice5;
