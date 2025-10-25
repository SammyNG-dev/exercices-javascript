const etudiants = [
  { nom: "Alice", moyenne: 12, admis: false },
  { nom: "Bob", moyenne: 8, admis: false },
  { nom: "Charlie", moyenne: 15, admis: false },
  { nom: "David", moyenne: 9, admis: false },
];

for (const etudiant of etudiants) {
  if (etudiant.moyenne >= 10) {
    etudiant.admis = true;
  }
}

for(const etudiant of etudiants){
    if(etudiant.admis){
        console.log(etudiant.nom, ": admis");
    } else {
        console.log(etudiant.nom, ": non admis");
        
    }
}