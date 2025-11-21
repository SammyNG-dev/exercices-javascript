#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Permet d'avoir __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Récupération du nom du dossier passé en argument
const targetFolder = process.argv[2];

if (!targetFolder) {
  console.error("❌ Merci de préciser un nom de dossier :");
  console.error("   npx my-personal-template mon-projet");
  process.exit(1);
}

// Dossier cible
const projectPath = path.join(process.cwd(), targetFolder);

// Vérifie si le dossier existe déjà
if (fs.existsSync(projectPath)) {
  console.error(`❌ Le dossier "${targetFolder}" existe déjà.`);
  process.exit(1);
}

// Copie récursive
function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Chemin du template (dans ton package)
const templatePath = path.join(__dirname, "..");

console.log("📁 Création du projet :", targetFolder);
copyRecursive(templatePath, projectPath);

console.log("✅ Projet créé !");
console.log(`➡️ cd ${targetFolder}`);
console.log("➡️ npm install");
console.log("➡️ npm run dev");
