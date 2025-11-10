import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Exercice4() {
  const textRef = useRef(null);

  const [offsetWidth, setOffsetWitdh] = useState(null);
  const [offsetHeight, setOffsetHeight] = useState(null);

  return (
    <>
      <p ref={textRef}>Coucou tout le monde !</p>
      {offsetHeight !== null && <p>Offset height : {offsetHeight}</p>}
      {offsetWidth !== null && <p>Offset width : {offsetWidth}</p>}
      <button
        type="button"
        onClick={() => {
          setOffsetWitdh(textRef.current.offsetWidth);
          setOffsetHeight(textRef.current.offsetHeight);
        }}
      >
        Mesurer
      </button>
      <Link to="/exo4" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice4;
