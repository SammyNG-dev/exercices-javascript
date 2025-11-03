const createCounter = () => {
  let counter = 0;
  const incrementCounter = () => {
    counter += 1;
    return counter;
  };
  return incrementCounter;
};

const counter1 = createCounter();

const interval = setInterval(() => {
  const valeur = counter1();
  console.log(valeur);
  if (valeur === 10) {
    clearInterval(interval);
  }
}, 1000);
