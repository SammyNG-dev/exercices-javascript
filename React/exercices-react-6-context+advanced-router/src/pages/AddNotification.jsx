import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

function AddNotification() {
  const { addNotification } = useMessageContext();
  const navigate = useNavigate();
  const [value, setValue] = useState();

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
            addNotification(value);
            navigate("/exo4");
          }}
        >
          Ajouter
        </button>
        <Link to="/exo4" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default AddNotification;
