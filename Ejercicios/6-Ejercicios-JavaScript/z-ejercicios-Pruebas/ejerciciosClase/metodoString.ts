// Coge una frase y cambia todas las A o a por O e o.
const frase: string = "Hola AaAaAaAaaAAaaAaAa la vida es Así.";
const cambiarLetra: Function = (letra: string) => {
  return letra.replace(/[Aa]/g, function (MayusMinus: string) {
    if (MayusMinus === "A") {
      return "O";
    } else {
      return "o";
    }
  });
};
const fraseCambiada: string = cambiarLetra(frase);
console.log(fraseCambiada);
// Crea una función que compruebe si un string empieza por aca o no.
const principioString = (palabra: string) => {
  return palabra.startsWith("aca");
};
const palabras: Array = ["academia", "escuela"];
palabras.forEach((pal) => {
  if (principioString(pal)) {
    return console.log(`La palabra ${pal} empieza por aca.`);
  } else {
    return console.log(`La palabra ${pal} no empieza por aca.`);
  }
});
// Crea una función que multiplique 3 veces utilizando métodos String.
const saludo: string = "Hello";
function multiplicador(palabra) {
  const mult = palabra.repeat(3);
  return mult;
}
const saludoRepe: string = multiplicador(saludo);
console.log(saludoRepe);
