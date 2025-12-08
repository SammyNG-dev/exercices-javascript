import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>Coucou</h1>
      <nav>
        <Link to="/exo1" className="link">
          Exercice 1 : Afficher la valeur du compteur Redux
        </Link>
        <Link to="/exo2" className="link">
          Exercice 2 : Créer un compteur interactif avec Redux
        </Link>
        <Link to="/exo3" className="link">
          Exercice 3 : Formulaire contrôlé + Mise à jour du store Redux
        </Link>
        <Link to="/exo4" className="link">
          Exercice 4 : Gestion d’une Todo List avec Redux (CRUD + Toggle)
        </Link>
        <Link to="/exo5" className="link">
          Exercice 5 : TodoList avec colonnes “À faire”, “En cours” et “Fait”
        </Link>
        <Link to="/exo6" className="link">
          Exercice 6 : Ajouter la persistance localStorage à l’application de
          l’Exercice 5”
        </Link>
        <Link to="/exo7" className="link">
          Exercice 7 : Refactorisation + Persistance dans le LocalStorage +
          Structure en Composants”
        </Link>
        <Link to="/exo8" className="link">
          Exercice 8 : Refactorisation + Persistance dans le LocalStorage +
          Structure en Composants”
        </Link>
      </nav>
    </>
  );
}

export default App;
