const num = 1;
const word = "Hola";
const boolean = true;
const nulo = null;
let indefinido;
const simbolo = Symbol("Es un simbolo");
const persona = { name: "Sergio", surname: "Robla", age: 24 };

console.log(num);
console.log(word);
console.log(boolean);
console.log(indefinido);
console.log(simbolo.description);
console.log(persona);
console.log(typeof num);
console.log(typeof word);
console.log(typeof boolean);
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof persona);

function scope() {
  let prueba1 = 10;
  console.log(prueba1);
  console.log(word);
}
scope();

//console.log(prueba1); CON ESTO DARIA ERROR, PORQUE PRUEBA1 ESTA DENTRO DE LA FUNCIÓN NO EN EL GLOBAL
