//Crea una función arrow que retorne tu nombre y tus apellidos e imprímelos por pantalla desde fuera de la función.
var persona = function () {
    var name = "Sergio";
    var surname = "Robla";
    return console.log("Eres ".concat(name, " ").concat(surname));
};
persona();
/*
  Crea una función con nombre y sin return.
  Pásale un tipo de dato boolean y dentro de la función imprime el valor que hemos pasado por parámetros.
  */
function retornoValor(param) {
    console.log("El valor del parametro es: ".concat(param, "."));
}
retornoValor(true);
/*
  Crea una función que reciba parámetros infinitos,
  haz la llamada con los valores 1,2,3,4,5 y muestra dichos mediante un forEach.
  */
var numerosInfinitos = function () {
    var Numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Numbers[_i] = arguments[_i];
    }
    Numbers.forEach(function (number) {
        console.log(number);
    });
};
numerosInfinitos(1, 2, 3, 4, 5);
/*
  Crea una función pasa 3 números por parámetros súmalos y devuelve el resultado mediante a return.
  */
var sumarNumeros = function (num1, num2, num3) {
    return console.log("La suma de ".concat(num1, ", ").concat(num2, " y ").concat(num3, " es: ").concat(num1 + num2 + num3));
};
sumarNumeros(1, 1, 1);
