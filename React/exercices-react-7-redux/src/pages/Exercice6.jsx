import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addAFaire,
  moveToEnCours,
  moveToFait,
  emptyLists,
  removeTask,
} from "../features/todo/todoSlice3";
import "./Exercice5.css";
import { useEffect, useState } from "react";
import { store } from "../app/store";

function Exercice5() {
  const { aFaire, enCours, fait } = useSelector((state) => state.todo3);
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState("");

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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    dispatchLocalStorage("aFaire", addAFaire);
    dispatchLocalStorage("enCours", moveToEnCours);
    dispatchLocalStorage("fait", moveToFait);
  }, []);

  return (
    <>
      <h1>TodoList rangée par colonne</h1>
      <div className="canva">
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
        <article className="todo-column">
          <header className="header-todo-column">Fait</header>
          {fait.length > 0 ? (
            <ul>
              {fait.map((task) => {
                return <li key={task.id}>{task.name}</li>;
              })}
            </ul>
          ) : null}
        </article>
      </div>
      <div className="add-task-div">
        <input
          type="text"
          value={taskData}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <button
          type="button"
          className="action-button"
          onClick={() => {
            dispatch(addAFaire(taskData));
            localStorage.setItem(
              "aFaire",
              JSON.stringify(store.getState().todo3.aFaire),
            );
            setTaskData("");
          }}
        >
          Ajouter une tâche
        </button>
      </div>
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

export default Exercice5;
