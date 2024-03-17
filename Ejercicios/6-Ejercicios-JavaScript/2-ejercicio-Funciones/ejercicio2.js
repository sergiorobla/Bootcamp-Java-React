console.log("Parte 1");
const persona = (name, surname1, surname2) => {
  return `Te llamas ${name} ${surname1} ${surname2}`;
};
console.log(persona("Sergio", "Robla", "Rebollo"));

console.log("Parte 2");
function interruptor(boton) {
  boton = true;
  if (boton) {
    console.log("El interruptor esta encendido.");
  } else {
    console.log("El interruptor esta apagado.");
  }
}
interruptor();

console.log("Parte 3");
const suma = [1, 2, 3, 4, 5];

suma.forEach((item) => {
  console.log(item);
});
