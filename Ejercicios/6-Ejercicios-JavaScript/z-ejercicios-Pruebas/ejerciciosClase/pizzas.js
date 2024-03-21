"use strict";
// Ejercicio Cerveza
const merienda = ["🍔", "🥙", "🍕", "🍜", "🍣", "🍙", "🍘", "🥩"];
const cambiarCerveza = merienda.fill("🍺");
console.log(cambiarCerveza.join(" - "));
// Ejercicio Piña
const pizzaPinya = ["🍕", "🍕", "🍕", "🍍", "🍕", "🍕", "🍕"];
if (pizzaPinya.includes("🍍")) {
    console.log(`Incluye piña`);
}
else {
    console.log(`No incluye piña.`);
}
// Ejercicio hongos
let fresaLimon = ["🍓", "🍋", "🍓", "🍋", "🍓", "🍋"];
let fresaHongo = fresaLimon.map(function (fresa) {
    return fresa === "🍓" ? "🍄" : fresa;
});
console.log(fresaHongo);
// Ejercicio Chili
let chiliLeche = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
let chiliPicante = chiliLeche
    .map(function (chili, picante) {
    if (chili === "🌶") {
        return [chili, "🥵"];
    }
    else {
        return [chili];
    }
})
    .join(" - ");
console.log(chiliPicante);
// Ejercicio cartas
const cartas = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
let cartasNuevas = [];
for (let i = 0; i < cartas.length; i++) {
    cartasNuevas.push(cartas[i]);
    if (cartas[i] === "🎴" && cartas[i + 1] === "🎴") {
        cartasNuevas.push("🃏");
    }
}
console.log(cartasNuevas);
