import { useId, useState } from "react";
import { Link } from "react-router-dom";

function Exercice3() {
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const firstnameId = useId();
  const lastnameId = useId();

  return (
    <>
      <form>
        <label htmlFor={firstnameId}>Prénom : </label>
        <input
          id={firstnameId}
          type="text"
          onChange={(event) => setFirstname(() => event.target.value)}
        />
        <label htmlFor={lastnameId}>Nom: </label>
        <input
          id={lastnameId}
          type="text"
          onChange={(event) => setLastname(() => event.target.value)}
        />
        <h2>
          {firstname} {lastname}
        </h2>
      </form>
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice3;
