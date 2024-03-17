//Escribe una función que tome dos números como argumentos y devuelva su suma.
console.log("- Ejercico de sumar los dos números.");
const Suma = (num1, num2) => {
  return `La suma de ${num1} y ${num2} es: ${num1 + num2}`;
};
console.log(Suma(2, 10));
console.log(" ");

//Escribe una función que tome tres números como argumentos y devuelva el mayor de ellos.
console.log("- Ejercicio de encontrar el número mayor de los tres.");
const elMayorDeTres = (num1, num2, num3) => {
  return `El número mayor entre ${num1}, ${num2} y ${num3} es: ${Math.max(
    num1,
    num2,
    num3
  )}`;
};
console.log(elMayorDeTres(20, 4, 8));
console.log(" ");

//Escribe una función que tome un número entero positivo como argumento y devuelva su factorial.
//El factorial es la multiplicación de el número por todos los números enteros positivos menores que él.
//Por ejemplo si es 3, seria 3*2*1 = 6
//Serviria para encontrar el tipo de opciones que tiene un número en ordenarse, o el tipo de oportunidades
//que tiene para salir algo dependiendo del número de opciones que haya (referido al número).
console.log("- Ejercicio de encontrar el factorial del número.");
const Factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * Factorial(num - 1);
  }
};
const num = 5;
console.log(`El número factorial de ${num} es: ${Factorial(num)}`);
console.log(" ");

//Escribe una función que tome un número entero positivo como argumento y devuelva true si es primo,
// de lo contrario, devuelve false.
//El número primo es el número que solo se puede dividir por el mismo o por 1 y dar un número entero,
//Si lo divides por otro número y da decimales, es primo, de lo contrario, sería compuesto.
//El número compuesto es el número que se puede dividir con otro número y dar un número entero,
//No significa que sea con todos, pero ejemplo el 10, se puede dividir de manera exacta con 1, 2, 5 y 10.
//En cambio el 7, solo se puede dividir por 1 y 7, con todos los demás números dará decimales.
console.log("- Ejercicio de saber si el número es Primo o Compuesto.");
const Primo = (num) => {
  if (num <= 1) {
    return `El número ${num} es compuesto.`;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `El número ${num} es compuesto.`;
    }
  }
  return `El número ${num} es primo.`;
};
console.log(Primo(7));
console.log(Primo(12));
console.log(" ");

//Escribe una función que tome una cadena como argumento y devuelva la cadena invertida.
console.log(
  "- Ejercicio de coger una cadena y devolverla de manera invertida."
);
const Cadena = (numbers) => {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return numbers.reverse().join();
};
console.log(`La cadena invertida se veria asi: ${Cadena()}`);
console.log(" ");
