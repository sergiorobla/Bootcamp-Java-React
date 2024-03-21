import foods from "./foods.mjs";
console.log("----------------------------------------------------------------");
// Imprimimos todas las categorias que tenemos en la carta.
const buscarCategorias = [...new Set(foods.map((food) => food.category))];
console.log(buscarCategorias);

// Función que busque si existe una categoria o no en la carta.
const categoriaExistente = (categoria) => {
  if (buscarCategorias.includes(categoria)) {
    return `Existe esta categoria.`;
  } else {
    return `No existe esta categoria.`;
  }
};
console.log(categoriaExistente("Healthy"));
console.log("----------------------------------------------------------------");
// Función que dice los nombres de los platos de la categoria que pide.
const comidasCategoria = (categoria) => {
  const comidasFiltradas = foods.filter((food) => food.category === categoria);
  if (comidasFiltradas.length > 0) {
    comidasFiltradas.forEach((food) => console.log(food.name));
  } else {
    console.log(`No existe comida de esta categoria.`);
  }
};
comidasCategoria("Healthy");
console.log("----------------------------------------------------------------");
// Funciones para calcular el total, el resultado tiene que salir en 2 decimales.
const ticket = ["🥜", "🌮", "🥗", "🍕", "🍣", "🧀"];
const calculartotalTicket = (ticket, foods) =>
  ticket
    .map((item) => foods.find((food) => food.icon === item))
    .filter(Boolean)
    .reduce((total, food) => total + food.price, 0);
const totalTicket = calculartotalTicket(ticket, foods);
console.log(
  `El total del ticket: ${ticket.join(" - ")} es ${totalTicket.toFixed(2)}}`
);
console.log("----------------------------------------------------------------");
// Añadiendo el batido que nos piden
const shake = ["🥛", "🍓", "🍌"];
console.log(shake.join(" + "));
console.log("----------------------------------------------------------------");
// Haciendo sort en los diferentes tickets
const tickets = [1, 100000, 21, 30, 4];
// Utilizando el .sort()
const mayorMenor = tickets.sort((a, b) => b - a);
console.log(mayorMenor);
// utilizando un bucle for
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(tickets));
console.log("----------------------------------------------------------------");
// Comprueba si en los dos tickets tenemos solo cafés.
const ticket01 = ["☕", "☕", "☕", "☕"];
const ticket02 = ["☕", "🥖", "☕", "🥯", "🍵", "🥐", "🥪"];
const saberSiEsTodoCafe = (arr) => {
  const resultado = arr.every((element) => element === "☕");
  if (resultado === true) {
    return console.log(`Tiene solo cafés con leche.`);
  } else {
    return console.log(`Tiene algo más que cafés con leche.`);
  }
};
saberSiEsTodoCafe(ticket01);
saberSiEsTodoCafe(ticket02);
console.log("----------------------------------------------------------------");
const ticket02E = ["🍹", "🥖", "☕", "🥯", "🍵", "🥐", "🥪"];
const persona1 = ["☕", "🥐"];
const persona2 = ["🍵", "🥖"];
const persona3 = ["🍹", "🥪"];

// Function to create individual tickets using splice
const createIndividualTicket = (ticket, consumicion) => {
  const ticketIndividual = [];
  for (const item of consumicion) {
    const index = ticket.indexOf(item);
    if (index !== -1) {
      ticketIndividual.push(ticket.splice(index, 1)[0]);
    }
  }
  return ticketIndividual;
};

// Create individual tickets
const persona1Ticket = createIndividualTicket(ticket02E, persona1);
const persona2Ticket = createIndividualTicket(ticket02E, persona2);
const persona3Ticket = createIndividualTicket(ticket02E, persona3);

// Con metodo Splice
console.log("Ticket de la persona 1:", persona1Ticket);
console.log("Ticket de la persona 2:", persona2Ticket);
console.log("Ticket de la persona 3:", persona3Ticket);
console.log("No se ha añadiendo a los tickets:", ticket02E);
console.log("----------------------------------------------------------------");
// Con metodo Slice
const ticket02A = ["🍹", "🥖", "☕", "🥯", "🍵", "🥐", "🥪"];
const person1Consumption = ["☕", "🥐"];
const person2Consumption = ["🍵", "🥖"];
const person3Consumption = ["🍹", "🥪"];

const createIndividualTickets = (ticket, consumption) => {
  const individualTicket = [];
  for (const item of consumption) {
    const index = ticket.indexOf(item);
    if (index !== -1) {
      individualTicket.push(item);
      ticket.splice(index, 1);
    }
  }
  return individualTicket;
};

const person1Ticket = createIndividualTickets(
  ticket02A.slice(),
  person1Consumption
);
const person2Ticket = createIndividualTickets(
  ticket02A.slice(),
  person2Consumption
);
const person3Ticket = createIndividualTickets(
  ticket02A.slice(),
  person3Consumption
);

const notAdded = ticket02A.filter((item) => {
  return (
    !person1Ticket.includes(item) &&
    !person2Ticket.includes(item) &&
    !person3Ticket.includes(item)
  );
});

console.log("Ticket de la persona 1:", person1Ticket);
console.log("Ticket de la persona 2:", person2Ticket);
console.log("Ticket de la persona 3:", person3Ticket);
console.log("No se ha añadido a los tickets:", notAdded);
console.log("----------------------------------------------------------------");
const drinksConsumed = [
  { nombre: "Alice", bebida: "🍹", hora: "18:30:00" },
  { nombre: "Bob", bebida: "🍷", hora: "19:15:00" },
  { nombre: "Charlie", bebida: "🍹", hora: "20:00:00" },
  { nombre: "Alice", bebida: "🍸", hora: "21:45:00" },
  { nombre: "Bob", bebida: "🥂", hora: "22:30:00" },
  { nombre: "Charlie", bebida: "🍵", hora: "23:15:00" },
  { nombre: "Alice", bebida: "🍹", hora: "03:30:00" },
  { nombre: "Bob", bebida: "🍺", hora: "04:15:00" },
  { nombre: "Charlie", bebida: "🍸", hora: "05:00:00" },
];
// Quiero saber quién a sido el primero en beber.
function findFirstOccurrenceIndexAndPerson(array, targetDrink) {
  const firstOccurrenceIndex = array
    .map((item) => item.bebida)
    .indexOf(targetDrink);

  if (firstOccurrenceIndex !== -1) {
    const personName = array[firstOccurrenceIndex].nombre;
    console.log(
      `El primero en beber ${targetDrink} ha sido ${personName} en la posición: ${firstOccurrenceIndex}`
    );
  } else {
    console.log(`No hay ${targetDrink} en el ticket.`);
  }
}
findFirstOccurrenceIndexAndPerson(drinksConsumed, "🍹");
findFirstOccurrenceIndexAndPerson(drinksConsumed, "🥂");
console.log("----------------------------------------------------------------");
// Buscar si alguien ha tomado café.
function findFirstOccurrenceIndexAndPersonal(array, targetDrink) {
  const firstOccurrenceIndex = array
    .map((item) => item.bebida)
    .indexOf(targetDrink);

  if (firstOccurrenceIndex !== -1) {
    const personName = array[firstOccurrenceIndex].nombre;
    console.log(
      `First occurrence of ${targetDrink} found by ${personName} at index: ${firstOccurrenceIndex}`
    );
  } else {
    console.log(`${targetDrink} not found in the array.`);
  }
}
findFirstOccurrenceIndexAndPersonal(drinksConsumed, "☕");
console.log("----------------------------------------------------------------");
// Buscar quien a sido el ultimo en beber un martini.
function findFirstOccurrenceIndexAndPersonel(array, targetDrink) {
  const firstOccurrenceIndex = array
    .map((item) => item.bebida)
    .indexOf(targetDrink);

  if (firstOccurrenceIndex !== -1) {
    const personName = array[firstOccurrenceIndex].nombre;
    console.log(
      `First occurrence of ${targetDrink} found by ${personName} at index: ${firstOccurrenceIndex}`
    );
  } else {
    console.log(`${targetDrink} not found in the array.`);
  }
}
findFirstOccurrenceIndexAndPersonel(drinksConsumed, "🍸");
console.log("----------------------------------------------------------------");
