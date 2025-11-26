import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

function ChangerMessage() {
  const [value, setValue] = useState("");
  const { setMessage } = useMessageContext();
  const navigate = useNavigate();

  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => {
            setMessage(value);
            navigate("/exo2");
          }}
        >
          Changer le message
        </button>
        <Link to="/exo2" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default ChangerMessage;
