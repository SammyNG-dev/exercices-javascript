import { useDispatch } from "react-redux";
import { moveToFait } from "../features/todo/todoSlice3";

function EnCoursColumn({ enCours }) {
  const dispatch = useDispatch();

  return (
    <article className="todo-column">
      <header className="header-todo-column">En cours</header>
      {enCours.length > 0 ? (
        <ul>
          {enCours.map((task) => {
            return (
              <li key={task.id}>
                {task.name}
                <button
                  className="list-button"
                  type="button"
                  onClick={() => {
                    dispatch(moveToFait(task.id));
                    localStorage.setItem(
                      "fait",
                      JSON.stringify(store.getState().todo3.fait),
                    );
                    localStorage.setItem(
                      "enCours",
                      JSON.stringify(store.getState().todo3.enCours),
                    );
                  }}
                >
                  C'est fait !
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </article>
  );
}

export default EnCoursColumn;
