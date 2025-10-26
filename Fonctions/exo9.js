const notes = [12, 15, 18, 9, 10];

function moyenneTableau(arr) {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    total += arr[i];
    i++;
  }
  return total / arr.length;
}

console.log(moyenneTableau(notes)); // 12.8
