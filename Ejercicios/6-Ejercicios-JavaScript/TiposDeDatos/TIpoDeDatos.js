let name = "Sergio";
alert(`Hola ${name}`);

function mostrarPrompt() {
  let nombre = prompt("Dime tu nombre:");
  let resultado = "Tu nombre es: " + nombre;
  alert(resultado);
}
mostrarPrompt();

Swal.fire(`Hola ${name}`);

function mostrarNombre() {
  let nombre = Swal.fire({
    title: "Escribe tu nombre",
    input: "text",
  });
  let resultado = "Tu nombre es: " + nombre;
  Swal.fire(resultado);
}
mostrarNombre();
