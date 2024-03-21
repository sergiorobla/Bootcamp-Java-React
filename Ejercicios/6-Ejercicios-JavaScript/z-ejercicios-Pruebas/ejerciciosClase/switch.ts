// Realiza un switch case que muestre el mes del año cuando introduzcamos un número (1 al 12)
const mes: number = 2;
switch (mes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;
  default:
    console.log("No has introducido un número del 1 al 12.");
    break;
}
const numeroEnString: string = "1";
const numero: number = parseInt(numeroEnString);
switch (numero) {
  case 1:
    console.log(`Es el número 1.`);
    break;
  case 2:
    console.log(`Es el número 2.`);
    break;
  case 3:
    console.log(`Es el número 3.`);
    break;
  case 4:
    console.log(`Es el número 4.`);
    break;
  case 5:
    console.log(`Es el número 5.`);
    break;
  default:
    console.log(`Tienes que ingresar un número del 1 al 5.`);
    break;
}
