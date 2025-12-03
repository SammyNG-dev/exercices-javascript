import { useState } from "react";
import { Link } from "react-router-dom";
import { addTodo, removeTodo, toggleTodo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Exercice4() {
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todoData, setTodoData] = useState("");

  return (
    <>
      {todo.length > 0 ? (
        <ul>
          {todo.map((item) => {
            return (
              <li key={item.id}>
                <input type="checkbox" onChange={()=> dispatch(toggleTodo(item))}/>
                <h2>{item.todo} {item.done ? "(Fait)" : null}</h2>
                <button
                  className="action-button"
                  type="button"
                  onClick={() => dispatch(removeTodo(item.id))}
                >
                  Supprimer
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>Aucune notification à afficher</h1>
      )}
      <input
        value={todoData}
        type="text"
        onChange={(e) => setTodoData(e.target.value)}
      />
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => {
            dispatch(addTodo(todoData));
            setTodoData("");
          }}
        >
          Ajouter une tâche
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice4;
