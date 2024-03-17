const juego = (moneda) => {
  moneda = Math.round(Math.random());
  if (moneda) {
    console.log("Sale cara");
  } else {
    console.log("Sale cruz");
  }
};
juego();
