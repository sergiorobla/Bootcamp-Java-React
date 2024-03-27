// Añado las frutas en este array.
const frutas: string[] = [
  "🥝",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍎",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🥥",
  "🥭",
];
// Agrego el espacio del HTML para visualizar las frutas.
const contentEmojis: HTMLElement | null = document.querySelector(".content");

// Hago esta función para agregar una fruta aleatoria por delante en el contenedor donde se guardarán las frutas.
function elementoDelante(arr: string[], container: HTMLElement | null) {
  const nuevaFruta = arr[Math.floor(Math.random() * arr.length)];
  if (container) {
    const emoji = container.innerHTML.trim().split(" ");
    emoji.unshift(nuevaFruta);
    container.innerHTML = emoji.join(" ");
  }
}

// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonDelante: HTMLElement | null = document.getElementById("unshift");
buttonDelante?.addEventListener("click", function () {
  elementoDelante(frutas, contentEmojis);
});

// Hago esta función para agregar una fruta aleatoria por detrás en el contenedor donde se guardarán las frutas.
function elementoDetras(arr: string[], container: HTMLElement | null) {
  const nuevaFruta = arr[Math.floor(Math.random() * arr.length)];
  if (container) {
    const emoji = container.innerHTML.trim().split(" ");
    emoji.push(nuevaFruta);
    container.innerHTML = emoji.join(" ");
  }
}

// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonDetras: HTMLElement | null = document.getElementById("push");
buttonDetras?.addEventListener("click", function () {
  elementoDetras(frutas, contentEmojis);
});

// Hago esta función para agregar una fruta aleatoria en la posición dada en el contenedor donde se guardarán las frutas.
function elementoPosicion(arr: string[], container: HTMLElement | null) {
  const inputPosition = document.getElementById(
    "addPosition"
  ) as HTMLInputElement;
  if (inputPosition && container) {
    const position = parseInt(inputPosition.value);
    if (!isNaN(position) && position >= 0) {
      const nuevaFruta = arr[Math.floor(Math.random() * arr.length)];
      const emojis = container.innerHTML.trim().split(" ");
      emojis.splice(position, 0, nuevaFruta);
      container.innerHTML = emojis.join(" ");
    }
  }
}

// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonPosition: HTMLElement | null = document.getElementById("insertAt");
buttonPosition?.addEventListener("click", function () {
  elementoPosicion(frutas, contentEmojis);
});

// Hago esta función para eliminar una fruta aleatoria por detrás del contenedor donde se guardarán las frutas.
function eliminarDetras(container: HTMLElement | null) {
  if (container) {
    const emoji = container.innerHTML.trim().split(" ");
    emoji.pop();
    container.innerHTML = emoji.join(" ");
  }
}

// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonPop: HTMLElement | null = document.getElementById("pop");
buttonPop?.addEventListener("click", function () {
  eliminarDetras(contentEmojis);
});

// Hago esta función para eliminar una fruta aleatoria por detrás del contenedor donde se guardarán las frutas.
function eliminarDelante(container: HTMLElement | null) {
  if (container) {
    const emoji = container.innerHTML.trim().split(" ");
    emoji.shift();
    container.innerHTML = emoji.join(" ");
  }
}

// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonShift: HTMLElement | null = document.getElementById("shift");
buttonShift?.addEventListener("click", function () {
  eliminarDelante(contentEmojis);
});

function eliminarPosicion(container: HTMLElement | null) {
  const inputPosicion = document.getElementById(
    "deletePosition"
  ) as HTMLInputElement;
  if (inputPosicion && container) {
    let posicion = parseInt(inputPosicion.value);
    if (!isNaN(posicion) && posicion >= 0) {
      posicion -= 0;
      const emojis = container.innerHTML.trim().split(" ");
      emojis.splice(posicion, 1);
      container.innerHTML = emojis.join(" ");
    } else {
      console.error("La posición ingresada no es válida.");
    }
  }
}

// Hago que la función anterior sea ejecutada en el documento HTML cuando presiono el botón.
const buttonDelete: HTMLElement | null = document.getElementById("deleteAt");
buttonDelete?.addEventListener("click", function () {
  eliminarPosicion(contentEmojis);
});
