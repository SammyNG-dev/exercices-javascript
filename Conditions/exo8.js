const a = 5;
const b = 6;
const c = 8;

if (a < b + c && b < a + c && c < a + b) {
  console.log("Triangle possible");
} else {
  console.log("Triangle impossible");
}
