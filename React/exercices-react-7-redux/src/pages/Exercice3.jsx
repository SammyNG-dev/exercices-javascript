import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setEmail } from "../features/user/userSlice";

function Exercice3() {
  const value = useSelector((state) => state.user);
  const [emailData, setEmailData] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <h1>Nom : {value.name}</h1>
      <h1>Email : {value.email}</h1>
      <input
        type="text"
        value={emailData}
        onChange={(e) => setEmailData(e.target.value)}
      />
      <nav>
        <button
          type="button"
          className="action-button"
          onClick={() => {
            dispatch(setEmail(emailData));
            alert("Email mis à jour");
          }}
        >
          Mettre à jour l'email
        </button>
        <Link to="/" className="link">
          Revenir en arrière
        </Link>
      </nav>
    </>
  );
}

export default Exercice3;
