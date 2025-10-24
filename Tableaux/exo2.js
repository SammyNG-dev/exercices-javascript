const nombres = [5, 10, 15, 20];

for (let i = 0; i < 3; i++) {
  if (i === 2) {
    console.log(nombres[nombres.length - 1]);
  } else {
    console.log(nombres[i]);
  }
}
