let numero = 1;
let i = 0;
do {
  if (i === 0) {
    i++;
    numero--;
    console.log(numero);
  } else {
    numero++;
    console.log(numero);
  }
} while (numero < 5);

/*
En este ejercicio lo que se hace es, si el i (el index del bucle) esta a 0, entonces entra en el if
y lo incrementa a 1 para luego salir al else y seguir con el metodo else, al mismo tiempo, si el i es igual a 0,
hace que el numero se decremente y sea un numero menos, por eso en este ejemplo el numero es 1 pero como el i es 0,
entonces empieza por 0 porque hace que el numero sea 0, y como el i incrementa a 1, entonces a la siguiente vuelta
entra en el else y solo hace incrementar el numero hasta 5.
Porque especificamos en el while que el numero tiene que tener como valor maximo 5 y no puede ser mayor que el.
Entonces si el número es 1 y el i es 0, empezara el bucle incrementando el i a 1 y haciendo que numero sea 0,
entonces pasaria al else ya que i no es 0 y empezaria con el numero que ahora es 0 hasta 5.
*/
