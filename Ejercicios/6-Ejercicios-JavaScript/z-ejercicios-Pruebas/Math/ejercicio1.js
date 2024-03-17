//! Escribe un programa que genere un número aleatorio entre 1 y 100 y lo imprima en la consola.
const numAleatorio100 = Math.floor(Math.random() * 100) + 1;
console.log(numAleatorio100);

//! Desarrolla un programa que tome un número decimal como entrada y lo redondee al entero más cercano
//! utilizando los métodos Math.floor(), Math.ceil() y Math.round().
const numeroDecimal = 1.4;
const redondeoFloor = Math.floor(numeroDecimal);
const redondeoCeil = Math.ceil(numeroDecimal);
const redondeoRound = Math.round(numeroDecimal);
console.log(redondeoFloor);
console.log(redondeoCeil);
console.log(redondeoRound);
//! Crea un programa que solicite al usuario dos números enteros: la base y el exponente.
//! Utiliza el método Math.pow() para calcular y mostrar el resultado de elevar la base al exponente.
const base = 2;
const exponente = 3;
const exponencial = Math.pow(base, exponente);
console.log(exponencial);
//! Escribe un programa que tome dos números (representando los catetos) como entrada y calcule la longitud
//! de la hipotenusa de un triángulo rectángulo utilizando el teorema de Pitágoras (Math.sqrt() podría ser útil).
const num1 = 3;
const num2 = 10;
const sumaCuadrados = num1 * num1 + num2 * num2;
const hipotenusa = Math.sqrt(sumaCuadrados);
console.log(hipotenusa);
//! Desarrolla un programa que solicite al usuario un rango de números (inicio y fin) y genere un número aleatorio
//! dentro de ese rango.
const inicio = 2;
const fin = 10;
const numAleatorioRango =
  Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
console.log(numAleatorioRango);
//! Crea un programa que determine si un número dado es primo o no. Puedes usar el método de prueba de
//! divisibilidad con números primos menores o una implementación más eficiente.
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
//! Desarrolla un programa que calcule el factorial de un número dado utilizando un bucle.
const numero = 4;
const factorialNumero = (numero) => {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * factorialNumero(numero - 1);
  }
};
console.log(`El número factorial de ${numero} es: ${factorialNumero(numero)}`);
//! Escribe un programa que genere un número aleatorio entre 0 y 1 con precisión de hasta 4 decimales.
const numberDecimal = Math.random().toFixed(4);
console.log(numberDecimal);
