//! Método toUpperCase() y toLowerCase():
//! Escribe un programa que solicite al usuario ingresar una cadena y luego imprima esa cadena en mayúsculas y minúsculas.
const frase = "Hola muy buenas Alfredo, como estas? I'm fine and you?";
const upperLower = () => {
  console.log(frase.toLowerCase());
  console.log(frase.toUpperCase());
};
upperLower();
//! Método charAt():
//! Desarrolla un programa que tome una cadena como entrada y devuelva el primer carácter de esa cadena.
const primerCaracter = () => {
  return console.log(frase.charAt());
};
primerCaracter();
//! Método indexOf():
//! Crea un programa que solicite al usuario ingresar una frase y luego solicite ingresar una palabra.
//! El programa debe verificar si la palabra está presente en la frase y, si lo está, imprimir la posición
//! de la primera ocurrencia de la palabra en la frase.
const palabra = "muy";
const posicion = frase.indexOf(palabra);
const encontrarPalabra = () => {
  if (posicion !== -1) {
    console.log(
      `La palabra '${palabra}' está presente en la frase en la posición ${posicion}.`
    );
  } else {
    console.log(`La palabra '${palabra}' no está presente en la frase.`);
  }
};
encontrarPalabra();
//! Método substring():
//! Escribe un programa que tome una cadena como entrada y devuelva los primeros 5 caracteres de esa cadena.
//! Solicitar al usuario ingresar una frase y una palabra
const cincoCaracteres = () => {
  return console.log(frase.substring(0, 5));
};
cincoCaracteres();
//! Optimiza tu lista de nombres con nuestro programa. Convierte una cadena de nombres separados por
//! comas en una lista ordenada y sin espacios adicionales.
const listaNombres = "Juan,María,Pedro,Laura";
const procesarNombres = () => {
  const nombres = listaNombres.split(",");
  nombres.forEach((nombre) => {
    console.log(nombre.trim());
  });
};
procesarNombres();
//! Método replace():
//! Crea un programa que tome una cadena y reemplace todas las instancias de una palabra dada por otra palabra.
//! Por ejemplo, si la cadena es "Hola mundo" y la palabra a reemplazar es "mundo"
//! por "JavaScript", la salida sería "Hola JavaScript".
const fras = "Hola mundo!";
const fraseReplace = () => {
  return console.log(fras.replace("mundo", "JavaScript"));
};
fraseReplace();
//! Método trim():
//! Escribe un programa que tome una cadena con espacios en blanco al principio y/o al final,
//! y luego elimine esos espacios en blanco utilizando el método trim().
const cadenaTexto = " A B C D E F G H ";
const cadenaTrim = () => {
  return console.log(cadenaTexto.trim());
};
cadenaTrim();
//! Método concat():
//! Desarrolla un programa que tome dos cadenas como entrada y las concatene para formar una sola cadena.
const frase1 = "Hola";
const espacio = " ";
const frase2 = "Mundo";
const concatFrases = () => {
  return console.log(frase1.concat(espacio, frase2));
};
concatFrases();
