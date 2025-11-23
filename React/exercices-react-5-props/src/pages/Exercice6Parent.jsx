import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice6Enfant from "./Exercice6Enfant";

function Exercice6Parent() {
  const [text, setText] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <Exercice6Enfant valeur={text} />
      <Link to="/" className="link">
        Revenir en errière
      </Link>
    </>
  );
}

export default Exercice6Parent;
