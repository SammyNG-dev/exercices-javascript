import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

function ChangeUsername() {
  const { setUsername } = useMessageContext();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => {
            setUsername(value);
            navigate("/exo3");
          }}
        >
          Changer username
        </button>
        <Link to="/exo3" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default ChangeUsername;
