// Crea un número aleatorio 0 y 1, y con ese número haz que la moneda caiga en cara o cruz.
const moneda = Math.round(Math.random());
const juegoMoneda = () => {
  if (moneda === 1) {
    return console.log("Ha salido Cara.");
  } else {
    return console.log("Ha salido Cruz.");
  }
};
juegoMoneda();
