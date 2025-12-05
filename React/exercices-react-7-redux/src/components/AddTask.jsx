import { useDispatch } from "react-redux";
import { useState } from "react";
import { addAFaire } from "../features/todo/todoSlice3";
import { store } from "../app/store";

function AddTask() {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState("")
  return (
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
  );
}

export default AddTask