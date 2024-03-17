console.log("Parte 1");
function sustituirLetras(letra) {
  return letra.replace(/[Aa]/g, function (MayusMinus) {
    if (MayusMinus === "A") {
      return "O";
    } else {
      return "o";
    }
  });
}
const frase =
  "HolaA AaAaAaAaAa me llaman Alberto, pero tu puedes llamarme Abeja Maya.";
const fraseModificada = sustituirLetras(frase);
console.log(fraseModificada);

console.log("Parte 2");
function EmpiezaPor(palabra) {
  return palabra.startsWith("aca");
}
const palabras = ["academia", "escuela"];
palabras.forEach((palabritas) => {
  if (EmpiezaPor(palabritas)) {
    console.log(`La palabra ${palabritas} empieza por aca.`);
  } else {
    console.log(`La palabra ${palabritas} no empieza por aca.`);
  }
});

console.log("Parte 3");
function multiplicador(palabra) {
  const x3 = palabra.repeat(3);
  return x3;
}
const saludo = "Hola ";
const saludoRepetido = multiplicador(saludo);
console.log(saludoRepetido);
