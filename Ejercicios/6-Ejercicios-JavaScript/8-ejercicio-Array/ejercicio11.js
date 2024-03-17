console.log("Parte 1");
const comidas = ["🍔", "🥙", "🍣", "🍕", "🍜", "🥗", "🍙", "🍘", "🥩"];
comidas.fill("🍺");
console.log(comidas);

console.log("Parte 2");
let pizzaConPinya = ["🍕", "🍕", "🍍", "🍕", "🍕"];
if (pizzaConPinya.includes("🍍")) {
  console.log("La pizza lleva piña");
} else {
  console.log("La pizza no lleva piña");
}

console.log("Parte 3");
let pizzaSinPinya = pizzaConPinya.filter(function (pinya) {
  return pinya !== "🍍";
});
console.log(pizzaSinPinya);

console.log("Parte 4");
let FresaConNata = ["🍓", "🥛", "🍓", "🥛", "🍓"];
let HongosConNata = FresaConNata.map(function (fresa) {
  return fresa === "🍓" ? "🍄" : fresa;
});
console.log(HongosConNata);

console.log("Parte 5");
let picante = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
let MeMuero = picante
  .map(function (emoji, i) {
    if (emoji === "🌶") {
      return [emoji, "🥵"];
    } else {
      return emoji;
    }
  })
  .flat();
console.log(MeMuero);

console.log("Parte 6");
let cartas = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
let nuevasCartas = [];
for (let i = 0; i < cartas.length; i++) {
  nuevasCartas.push(cartas[i]);
  if (cartas[i] === "🎴" && cartas[i + 1] === "🎴") {
    nuevasCartas.push("🃏");
  }
}
console.log(nuevasCartas);
