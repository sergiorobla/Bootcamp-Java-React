//! Función de saludo.
function saludar(name) {
  return console.log(`Hola ${name}.`);
}
saludar("Sergio");

//! Función de suma.
const num1 = 2;
const num2 = 10;
function suma(num1, num2) {
  return num1 + num2;
}
console.log(`La suma de ${num1} y ${num2} es: ${suma(num1, num2)}.`);

//! Función de verificación de par.
const num = 2;
function esPar(num) {
  if (num % 2 === 0) {
    return `El número ${num} es par.`;
  } else {
    return `El número ${num} es impar.`;
  }
}
console.log(esPar(num));

//! Función de potenciación.
const base = 2;
const exponente = 10;
function potencia(base, exponente) {
  return base ** exponente;
}
console.log(
  `La potencia de ${base} elevado al ${exponente} es: ${potencia(
    base,
    exponente
  )}.`
);

//! Función de conversión de temperatura

const celsius = 45;
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(`${celsius}ºC, equivaldría a ${celsiusToFahrenheit(celsius)}ºF.`);

//! Función de factorial
const numero = 50;
const Factorial = (numero) => {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * Factorial(numero - 1);
  }
};
console.log(`El factorial del número ${numero} es: ${Factorial(numero)}.`);

//! Función de reversión de cadena
const cadena = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const revertiCadena = () => {
  return cadena.reverse().join(" - ");
};
console.log("La cadena revertida es: " + revertiCadena());

//! Función de filtrado
const cadenaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtrarNumerosPares = () => {
  return (numerosPares = cadenaNumeros.filter((numero) => numero % 2 === 0));
};

console.log("Los numeros pares son: " + filtrarNumerosPares().join(" - "));
