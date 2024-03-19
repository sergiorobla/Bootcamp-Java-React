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
function retornoValor(param: boolean) {
  console.log(`El valor del parametro es: ${param}.`);
}
retornoValor(true);
/*
  Crea una función que reciba parámetros infinitos,
  haz la llamada con los valores 1,2,3,4,5 y muestra dichos mediante un forEach.
  */
const numerosInfinitos = (...Numbers: number[]) => {
  Numbers.forEach((number: number) => {
    console.log(number);
  });
};
numerosInfinitos(1, 2, 3, 4, 5);
/*
  Crea una función pasa 3 números por parámetros súmalos y devuelve el resultado mediante a return.
  */
const sumarNumeros = (num1: number, num2: number, num3: number) => {
  return console.log(
    `La suma de ${num1}, ${num2} y ${num3} es: ${num1 + num2 + num3}`
  );
};
sumarNumeros(1, 1, 1);
