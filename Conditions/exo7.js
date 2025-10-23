const note = 4;

if (note >= 0 && note <=20) {
  if (note >= 17) {
    console.log(note, " : Très bien");
  } else if (note >= 13 && note <= 16) {
    console.log(note, ": Bien");
  } else if (note >= 10 && note <= 12) {
    console.log(note, ": Passable");
  } else {
    console.log("Echec");
  }
} else {
  console.log("Note impossible !");
}
