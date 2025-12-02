import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

function Exercice2() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Compteur : {counter}</h1>
      <nav>
        <button type="button" onClick={() => dispatch(increment())}>
          +1
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          -1
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice2;
