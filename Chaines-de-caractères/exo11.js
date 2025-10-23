const phrase = "Les développeurs aiment JavaScript".toLowerCase().split(" ");

if (phrase[phrase.length - 1] === "JavaScript".toLowerCase()) {
  console.log("La phrase se termine par JavaScript");
} else {
  console.log("La phrase ne se termine pas par JavaScript");
}
