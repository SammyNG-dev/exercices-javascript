import AddTask from "../components/AddTask";
import AFaireColumn from "../components/AFaireColumn";
import { addAFaire, moveToEnCours, moveToFait } from "../features/todo/todoSlice3";
import EnCoursColumn from "../components/EnCoursColumn";
import FaitColumn from "../components/FaitColumn";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyLists } from "../features/todo/todoSlice3";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


function Exercice7() {
  const { aFaire, enCours, fait } = useSelector((state) => state.todo3);
  const dispatch = useDispatch();

  const dispatchLocalStorage = (key, callback) => {
    const localContent = localStorage.getItem(key);
    if (localContent) {
      try {
        const localContentParsed = JSON.parse(localContent);
        if (Array.isArray(localContentParsed))
          if (localContentParsed.length > 0) {
            for (const item of localContentParsed) {
              dispatch(callback(item));
            }
          }
      } catch (e) {
        console.log(e);
      }
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: we only want this to run once on mount
  useEffect(() => {
    dispatchLocalStorage("aFaire", addAFaire);
    dispatchLocalStorage("enCours", moveToEnCours);
    dispatchLocalStorage("fait", moveToFait);
  }, []);

  return (
    <>
      <h1>TodoList rangée par colonne</h1>
      <div className="canva">
        <AFaireColumn aFaire={aFaire} />
        <EnCoursColumn enCours={enCours} />
        <FaitColumn fait={fait} />
      </div>
      <AddTask />
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => {
            dispatch(emptyLists());
            localStorage.setItem("aFaire", JSON.stringify([]));
            localStorage.setItem("enCours", JSON.stringify([]));
            localStorage.setItem("fait", JSON.stringify([]));
          }}
        >
          Vider la to do list
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice7;
