import { Link } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

function About() {
  const { message } = useMessageContext();
  return (
    <>
      <h1>{message}</h1>
      <Link to="/exo1" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default About;
