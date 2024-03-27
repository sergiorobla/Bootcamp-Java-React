"use strict";
const bombilla = document.getElementById("imagenBombilla");
const boton = document.getElementById("botonEncendido");
let encendida = false;
boton?.addEventListener("click", function () {
    if (encendida) {
        boton.src = "./src/img/off.png";
        bombilla.src = "./src/img/bombilla1.png";
    }
    else {
        boton.src = "./src/img/on.png";
        bombilla.src = "./src/img/bombilla2.png";
    }
    encendida = !encendida;
});
