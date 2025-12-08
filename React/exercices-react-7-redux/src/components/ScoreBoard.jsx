import { useSelector, useDispatch } from "react-redux";
import { incrementScore, addBonus, reset } from "../features/score/scoreSlice";
import { Link } from "react-router-dom";

function ScoreBoard() {
  const { score } = useSelector((state) => state.score);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Score : {score}</h1>
      <nav>
        <button
          className="action-button"
          type="button"
          onClick={() => dispatch(incrementScore())}
        >
          +1
        </button>
        <button
          className="action-button"
          type="button"
          onClick={() => dispatch(addBonus())}
        >
          +10
        </button>
        <button className="action-button" type="button" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <Link to="/" className="link">Revenir en arrière</Link>
      </nav>
    </>
  );
}

export default ScoreBoard;
