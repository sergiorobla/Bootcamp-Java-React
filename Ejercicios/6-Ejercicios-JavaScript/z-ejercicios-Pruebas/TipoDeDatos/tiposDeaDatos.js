const nombre = "Sergio";
const edad = 24;
const estudiante = true;
const puntos = 9.5;
const frutas = ["melón", "fresa", "melocotón"];

// Objeto con la información
const informacion = {
  name: nombre,
  age: edad,
  score: puntos,
  list: frutas,
};

// Agregar la propiedad 'student' al objeto 'informacion' con la frase de si es estudiante o no
informacion.student = saberEstudiante(estudiante);

// Función para determinar si es estudiante o no
function saberEstudiante(estudiante) {
  if (estudiante) {
    return `eres estudiante.`;
  } else {
    return `no eres estudiante.`;
  }
}

// Convertir el objeto 'informacion' en una cadena de pares clave-valor concatenados
const informacionEnCadena = Object.entries(informacion)
  .map(([key, value]) => `${key}: ${value}`)
  .join(" | ");

// Imprimir los resultados
console.log(
  `Tu nombre es ${nombre}, tienes ${edad} años y ${saberEstudiante(estudiante)}`
);
console.log(`La información obtenida es: ${informacionEnCadena}`);
