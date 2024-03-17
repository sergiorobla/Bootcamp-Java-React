console.log("La comanda.");
const dinner = [];
dinner.push("🍔", "🌭");
console.log(dinner.join(" "));

console.log("Reclamación de patatas.");
dinner.push("🍟", "🍟");
console.log(dinner.join(" "));

console.log("Reclamación de las bebidas.");
dinner[dinner.length] = "🍷";
dinner[dinner.length] = "🍹";
console.log(dinner.join(" "));

console.log("Nuevo orden del jefe.");
const dinnerCopy = dinner.slice();
dinnerCopy.reverse();
console.log(dinnerCopy.join(" "));

console.log("Con bucle for y array auxiliar");
let dinnerCopy1 = [];
for (let i = dinner.length - 1; i >= 0; i--) {
  dinnerCopy1.push(dinner[i]);
}
console.log(dinnerCopy1.join(" "));

console.log("La copita al compi del jefe.");
const copita = "🍸";
let CopitaWithDinner = [];
CopitaWithDinner[0] = copita;
for (let i = 0; i < dinner.length; i++) {
  CopitaWithDinner.push(dinner[i]);
}
console.log(CopitaWithDinner.join(" "));

console.log("");
