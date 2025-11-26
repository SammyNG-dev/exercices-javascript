#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Gestion des chemins
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Récupérer le numéro d'exercice
const numero = process.argv[2];

if (!numero) {
  console.error("❌ Merci de préciser un numéro : npm run newexo 6");
  process.exit(1);
}

const filePath = path.resolve(__dirname, `../src/pages/Exercice${numero}.jsx`);
const mainPath = path.resolve(__dirname, "../src/main.jsx");

// Si le fichier existe déjà → STOP
if (fs.existsSync(filePath)) {
  console.error(`❌ Exercice${numero}.jsx existe déjà !`);
  process.exit(1);
}

// Template du composant
const template = `
import { Link } from "react-router-dom";

function Exercice${numero}() {
  return (
    <>
      <h1>Exercice ${numero}</h1>
      <p>Bienvenue dans l'exercice ${numero} !</p>
      <Link to="/" className="link">Reveniren arrière</Link>
    </>
  );
}

export default Exercice${numero};
`;

// Création du fichier
fs.writeFileSync(filePath, template);
console.log(`✅ Fichier créé : src/pages/Exercice${numero}.jsx`);

// Modification du router dans main.jsx
let mainFile = fs.readFileSync(mainPath, "utf-8");

// Regex qui trouve la zone du tableau de routes
const routeRegex = /const router = createBrowserRouter\(\s*\[(.*?)\]\s*\)/s;

// Extraction
const routesMatch = mainFile.match(routeRegex);

if (!routesMatch) {
  console.error("❌ Impossible de trouver le tableau de routes dans main.jsx");
  process.exit(1);
}

// La nouvelle route
const newRoute = `,
  {
    path: "/exo${numero}",
    element: <Exercice${numero} />,
  }`;

// Ajouter l'import du composant
mainFile = `import Exercice${numero} from "./pages/Exercice${numero}.jsx";\n${mainFile}`;

// Injecter la route dans le tableau
mainFile = mainFile.replace(routeRegex, (match, inner) => {
  return match.replace(inner, inner + newRoute);
});

// Écriture du fichier main.jsx modifié
fs.writeFileSync(mainPath, mainFile);
console.log(`🔧 Route ajoutée dans main.jsx`);

// Fini !
console.log(`🎉 Exercice ${numero} généré avec succès !`);
