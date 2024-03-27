"use strict";
function getChuckNorrisJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => {
        const jokeTextElement = document.getElementById("joke-text");
        if (jokeTextElement !== null) {
            jokeTextElement.textContent = data.value;
        }
        else {
            console.error("Elemento joke-text no encontrado en el documento.");
        }
    })
        .catch((error) => {
        console.error("Error al obtener la broma de Chuck Norris:", error);
    });
}
