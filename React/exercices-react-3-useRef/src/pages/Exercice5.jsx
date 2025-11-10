import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Exercice5() {
  const [text, setText] = useState("");
  const previousText = useRef("");

  useEffect(() => {
    if (text !== previousText.current) {
      console.log("Texte modifié");
      previousText.current = text;
    }
  }, [text]);

  return (
    <>
      <div>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <Link className="link" to="/">
          Revenir en arrière
        </Link>
      </div>
      <h2>Actuel : {text}</h2>
      <h2>Précédent : {previousText.current}</h2>
    </>
  );
}

export default Exercice5;
