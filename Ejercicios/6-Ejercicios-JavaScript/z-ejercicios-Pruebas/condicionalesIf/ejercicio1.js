//! Escribe un programa que tome un número como entrada e imprima "Positivo"
//! si es mayor que 0, "Negativo" si es menor que 0, y "Cero" si es igual a 0.
const num = 0;
const resultado = () => {
  if (num > 0) {
    return console.log("Es un número positivo.");
  } else if (num < 0) {
    return console.log("Es un número negativo.");
  } else {
    return console.log("Es 0");
  }
};
resultado(num);

//! Crea un programa que tome la temperatura en grados Celsius como entrada y
//! la convierta a grados Fahrenheit. Si la temperatura es mayor o igual a 100 grados Celsius,
//! imprime "¡Cuidado! ¡Está muy caliente!", si está entre 50 y 99 grados Celsius imprime "Temperatura normal",
//! y si es menor de 50 grados Celsius imprime "¡Está frío!".

const temperatura = 50;
const celsiusToFahrenheit = () => {
  const fahrenheit = (temperatura * 9) / 5 + 32;
  return fahrenheit;
};
console.log(celsiusToFahrenheit());
const temperaturaF = celsiusToFahrenheit();
const controlarTemperatura = () => {
  if (temperatura >= 99.1 || temperatura >= 100) {
    return "¡Cuidado! ¡Está muy caliente!";
  } else if (temperatura <= 99 && temperatura >= 50) {
    return "Temperatura normal";
  } else {
    return "¡Está frío!";
  }
};
console.log(controlarTemperatura());

//! Escribe un programa que pida al usuario su edad y determine si es un niño (0-12 años),
//! adolescente (13-19 años), adulto (20-65 años), o adulto mayor (más de 65 años).

const edad = 20;
const etapaDeEdad = () => {
  if (edad >= 0 && edad <= 12) {
    return console.log("Eres un niño.");
  } else if (edad >= 13 && edad <= 19) {
    return console.log("Eres un adolescente.");
  } else if (edad >= 20 && edad <= 65) {
    return console.log("Eres un adulto.");
  } else if (edad > 65) {
    return console.log("Eres un adulto mayor.");
  } else {
    return console.log("Aún no has nacido.");
  }
};
etapaDeEdad();

//! Desarrolla un programa que determine si un año es bisiesto o no.
//! Un año es bisiesto si es divisible entre 4 pero no entre 100, o si es divisible entre 400.
const year = 2028;
const saberBisiesto = () => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return console.log("Es bisiesto.");
  } else {
    return console.log("No es bisiesto");
  }
};
saberBisiesto();
//! Crea un programa que pida al usuario un número del 1 al 7 e imprima el día de la semana correspondiente
//! (1 para Lunes, 2 para Martes, etc.). Si el número está fuera de ese rango, imprime "Número inválido".
const dayOfYear = 10;
const month = () => {
  if (dayOfYear === 1) {
    return console.log("Es lunes.");
  } else if (dayOfYear === 2) {
    return console.log("Es martes.");
  } else if (dayOfYear === 3) {
    return console.log("Es miercoles.");
  } else if (dayOfYear === 4) {
    return console.log("Es jueves.");
  } else if (dayOfYear === 5) {
    return console.log("Es viernes.");
  } else if (dayOfYear === 6) {
    return console.log("Es sabado.");
  } else if (dayOfYear === 7) {
    return console.log("Es domingo.");
  } else {
    return console.log("Tienes que ingresar un número del 1 al 7.");
  }
};
month();
