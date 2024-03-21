//Crea una función arrow que retorne tu nombre y tus apellidos e imprímelos por pantalla desde fuera de la función.
const persona = () => {
  const name = "Sergio";
  const surname = "Robla";
  return console.log(`Eres ${name} ${surname}`);
};
persona();
/*
Crea una función con nombre y sin return.
Pásale un tipo de dato boolean y dentro de la función imprime el valor que hemos pasado por parámetros.
*/
function retornoValor(param) {
  param = true;
  console.log(`El valor del parametro es: ${param}.`);
}
retornoValor();
/*
Crea una función que reciba parámetros infinitos,
haz la llamada con los valores 1,2,3,4,5 y muestra dichos mediante un forEach.
*/
const numerosInfinitos = (...Numbers) => {
  Numbers.forEach((number) => {
    console.log(number);
  });
};
numerosInfinitos(1, 2, 3, 4, 5);
/*
Crea una función pasa 3 números por parámetros súmalos y devuelve el resultado mediante a return.
*/
const sumarNumeros = (num1, num2, num3) => {
  return console.log(
    `La suma de ${num1}, ${num2} y ${num3} es: ${num1 + num2 + num3}`
  );
};
sumarNumeros(1, 1, 1);
// Crea una función y escribe tu nombre completo en 3 parámetros, concaténalos y muéstralos.
const nombreCompleto = (name, surname1, surname2) => {
  return console.log(`Tu nombre es: ${name} ${surname1} ${surname2}.`);
};
nombreCompleto("Sergio", "Robla", "Rebollo");
// Crea una función que acepte dos números y devuelva el mayor.
const numeroMayor = (num1, num2) => {
  return console.log(
    `El número mayor de ${num1} y ${num2} es: ${Math.max(num1, num2)}`
  );
};
numeroMayor(2, 3);
