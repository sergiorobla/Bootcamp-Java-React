// Datos Primitivos
const number = 1; //! Variable de Number.
const string = "Hola"; //! Variable de String.
const boolean = true; //! Variable de Boolean.
const nulo = null; //! Variable de Null
const undefinded = undefined; //! Variable de Undefined.
const symbol = Symbol("simbolo"); //! Variable de Symbol.

// Datos compuestos
const object = { name: "Sergio", surname: "Robla", age: 24 }; //! Variable de Object.
const array = ["Primero", "Segundo", "Tercero", "Cuarto"]; //! Variable de Array.
const funcion = function () {
  const num1 = 1;
  const num2 = 2;
  return console.log(num1 + num2);
}; //! Variable de Function.
const fecha = Date(); //! Variable de Date.
const expresionRegular = new RegExp("mundo"); //! Variable de RegExp.
const BigInt = 1234567890123456789012345678901234567890n; //! Variable de BigInt.
const valorNaN = NaN; //! Variable de NaN.

// Imprimir en consola
console.log("number:" + " " + typeof number);
console.log("string:" + " " + typeof string);
console.log("boolean:" + " " + typeof boolean);
console.log("null:" + " " + typeof nulo);
console.log("undefinded:" + " " + typeof undefinded);
console.log("symbol:" + " " + typeof symbol);
console.log("object:" + " " + typeof object);
console.log("array:" + " " + typeof array);
console.log("function:" + " " + typeof funcion);
console.log("Date:" + " " + typeof fecha);
console.log("RegExp:" + " " + typeof expresionRegular);
console.log("BigInt:" + " " + typeof BigInt);
console.log("NaN:" + " " + typeof valorNaN);
