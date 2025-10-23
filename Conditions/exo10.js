const motDePasseAttendu = "azerty123";
const motDePasseSaisi = "bonjour";

if (motDePasseSaisi === "") {
  console.log("Aucun mot de passe saisi");
} else if (motDePasseAttendu === motDePasseSaisi) {
  console.log("Accès autorisé");
} else {
  console.log("Accès refusé");
}
