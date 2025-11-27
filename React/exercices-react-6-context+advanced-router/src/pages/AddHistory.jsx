import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useHistoryContext } from "../context/HistoryContext";

function AddHistory() {
  const [value, setValue] = useState("");
  const { addEntry } = useHistoryContext();
  const navigate = useNavigate()


  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => {
            if (value) {
              addEntry(value);
              navigate("/exo6");
            }
          }}
        >
          Ajouter
        </button>
        <Link to="/exo6" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default AddHistory;
