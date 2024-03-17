console.log("Parte 1");
const numeros = (num1, num2, num3) => {
  const suma = num1 + num2 + num3;
  return `La suma de los numeros ${num1} + ${num2} + ${num3} es: ${suma}`;
};
console.log(numeros(100, 5, 3));

console.log("Parte 2");
const nombre = (name, surname1, surname2) => {
  console.log(`Tu nombre es ${name} ${surname1} ${surname2}`);
};
nombre("Sergio", "Robla", "Rebollo");

console.log("Parte 3");
const Numeros = (num1, num2) => {
  const NumeroMayor = Math.max(num1, num2);
  console.log(`El numero mayor de ${num1} y ${num2} es: ${NumeroMayor}`);
};

Numeros(30, 5);
