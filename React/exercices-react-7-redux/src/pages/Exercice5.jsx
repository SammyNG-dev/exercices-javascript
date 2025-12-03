import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addAFaire,
  moveToEnCours,
  moveToFait,
  emptyLists,
  removeTask,
} from "../features/todo/todoSlice2";
import "./Exercice5.css";
import { useState } from "react";

function Exercice5() {
  const { aFaire, enCours, fait } = useSelector((state) => state.todo2);
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState();

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
                      onClick={() => dispatch(moveToEnCours(task.id))}
                    >
                      Let's go !
                    </button>
                    <button
                      className="list-button"
                      type="button"
                      onClick={() => dispatch(removeTask(task.id))}
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
                      onClick={() => dispatch(moveToFait(task.id))}
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
          onClick={() => dispatch(emptyLists())}
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
