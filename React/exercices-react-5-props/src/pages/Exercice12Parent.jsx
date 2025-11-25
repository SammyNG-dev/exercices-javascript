import { useState } from "react";
import { Link } from "react-router-dom";
import Exercice12Enfant from "./Exercice12Enfant";

function Exercice12Parent() {
  const [filtre, setFiltre] = useState("");

  const countries = ["France", "Italie", "Espagne", "Portugal", "Suisse"];
  const countriesFiltered = countries.filter((country) =>
    country.toLowerCase().includes(filtre.toLowerCase()),
  );
  return (
    <>
      {countriesFiltered.map((country) => {
        return <h1 key={country}>{country}</h1>;
      })}
      <Exercice12Enfant setFiltre={setFiltre}/>
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice12Parent;
