//! Escribe un programa que tome un número del 1 al 7 como entrada e imprima
//! el día de la semana correspondiente (1 para Lunes, 2 para Martes, etc.).

const numero = 5;

switch (numero) {
  case 1:
    console.log("Es Lunes.");
    break;
  case 2:
    console.log("Es Martes.");
    break;
  case 3:
    console.log("Es Miercoles.");
    break;
  case 4:
    console.log("Es Jueves.");
    break;
  case 5:
    console.log("Es Viernes.");
    break;
  case 6:
    console.log("Es Sabado.");
    break;
  case 7:
    console.log("Es Domingo.");
    break;
  default:
    console.log("Ingresa un número del 1 al 7.");
    break;
}

//! Desarrolla un programa que tome un carácter (letra) como entrada y determine si es una vocal o una consonante.

const letra = "A";

const letraMinuscula = letra.toLowerCase();

switch (letraMinuscula) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "á":
  case "é":
  case "í":
  case "ó":
  case "ú":
  case "ü":
    console.log("Es vocal.");
    break;
  default:
    console.log("Es consonante.");
    break;
}

//! Crea un programa que tome un número del 1 al 12 como entrada e imprima el nombre del mes correspondiente.

const monthOfYear = 12;

switch (monthOfYear) {
  case 1:
    console.log("Es Enero.");
    break;
  case 2:
    console.log("Es Febrero.");
    break;
  case 3:
    console.log("Es Marzo.");
    break;
  case 4:
    console.log("Es Abril.");
    break;
  case 5:
    console.log("Es Mayo.");
    break;
  case 6:
    console.log("Es Junio.");
    break;
  case 7:
    console.log("Es Julio.");
    break;
  case 8:
    console.log("Es Agosto.");
    break;
  case 9:
    console.log("Es Septiembre.");
    break;
  case 10:
    console.log("Es Octubre.");
    break;
  case 11:
    console.log("Es Noviembre.");
    break;
  case 12:
    console.log("Es Diciembre.");
    break;
  default:
    console.log("Tienes que ingresar un número del 1 al 12.");
    break;
}

//! Escribe un programa que tome una letra como entrada e imprima si es una letra mayúscula,
//! minúscula o un carácter especial (no alfabético).

const letrita = "y";

//! Obtener el código ASCII de la letra
const codigoAscii = letrita.charCodeAt(0);

switch (true) {
  //! Rango de caracteres de letras mayúsculas (65 a 90)
  case codigoAscii >= 65 && codigoAscii <= 90:
    console.log("Es una letra mayúscula.");
    break;
  //! Rango de caracteres de letras minúsculas (97 a 122)
  case codigoAscii >= 97 && codigoAscii <= 122:
    console.log("Es una letra minúscula.");
    break;
  //! Caracteres especiales
  default:
    console.log("Es un caracter especial.");
    break;
}

//! Desarrolla un programa que tome una clave de acceso como entrada y verifique
//! si coincide con una de las siguientes: "secreto123", "contraseña", "abc123".
//! Si coincide con alguna de estas claves, imprime "Acceso concedido", de lo contrario, imprime "Acceso denegado".

const contrasenya = "secreto123";

switch (contrasenya) {
  case "secreto123":
  case "abc123":
  case "contraseña":
    console.log("Acceso concedido.");
    break;

  default:
    console.log("Acceso denegado.");
    break;
}
