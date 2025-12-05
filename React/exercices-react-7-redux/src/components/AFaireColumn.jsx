import { useDispatch } from "react-redux";
import { moveToEnCours, removeTask } from "../features/todo/todoSlice3";

function AFaireColumn({aFaire}) {
  const dispatch = useDispatch();

  return (
    <article className="todo-column">
      <header className="header-todo-column">A faire</header>
      {aFaire.length > 0 ? (
        <ul>
          {aFaire.map((task) => {
            return (
              <li key={task.id}>
                {task.name}
                <button
                  className="list-button"
                  type="button"
                  onClick={() => {
                    dispatch(moveToEnCours(task.id));
                    localStorage.setItem(
                      "enCours",
                      JSON.stringify(store.getState().todo3.enCours),
                    );
                    localStorage.setItem(
                      "aFaire",
                      JSON.stringify(store.getState().todo3.aFaire),
                    );
                  }}
                >
                  Let's go !
                </button>
                <button
                  className="list-button"
                  type="button"
                  onClick={() => {
                    dispatch(removeTask(task.id));
                    localStorage.setItem(
                      "aFaire",
                      JSON.stringify(store.getState().todo3.aFaire),
                    );
                  }}
                >
                  Supprimer tâche
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </article>
  );
}

export default AFaireColumn