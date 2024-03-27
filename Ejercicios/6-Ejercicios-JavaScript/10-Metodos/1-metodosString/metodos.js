"use strict";
// Contar caracteres
// Escribe un programa que cuente cuántas veces aparece una letra específica en una cadena dada por el usuario.
console.log("------------------------ Contar caracteres ------------------------");
console.log(" ");
console.log("Escribe un programa que cuente cuántas veces aparece");
console.log("una letra específica en una cadena dada por el usuario.");
console.log(" ");
const frase = "Hola el otro dia me encontré con un oso hormiguero.";
const letra = "o";
function encontrarLetra(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}
const resultado = encontrarLetra(frase, letra);
console.log(`La letra ${letra} se repite ${resultado} veces.`);
// Invertir una cadena
// Escribe un programa que tome una cadena como entrada y devuelva la misma cadena
// pero con los caracteres en orden inverso.
console.log(" ");
console.log("----------------------- Invertir una cadena -----------------------");
console.log(" ");
console.log("Escribe un programa que tome una cadena como entrada y");
console.log("devuelva la misma cadena pero con los caracteres en orden inverso.");
console.log(" ");
function fraseAlReves(frase) {
    let fraseInvertida = "";
    for (let i = frase.length - 1; i >= 0; i--) {
        fraseInvertida += frase[i];
    }
    return fraseInvertida;
}
console.log(frase);
console.log(fraseAlReves(frase));
// Eliminar espacios en blanco
// Escribe un programa que elimine todos los espacios en blanco de una cadena dada.
console.log(" ");
console.log("------------------- Eliminar espacios en blanco -------------------");
console.log(" ");
console.log("Escribe un programa que elimine todos los espacios en blanco de una cadena dada.");
console.log(" ");
function eliminarEspacios(frase) {
    const espacio = " ";
    let fraseSinEspacios = "";
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== espacio) {
            fraseSinEspacios += frase[i];
        }
    }
    return fraseSinEspacios;
}
console.log(eliminarEspacios(frase));
// Contar palabras
// Escribe un programa que cuente cuántas palabras hay en una cadena dada.
// Puedes asumir que las palabras están separadas por un solo espacio.
console.log(" ");
console.log("------------------------- Contar palabras -------------------------");
console.log(" ");
console.log("Escribe un programa que cuente cuántas palabras hay en una cadena dada. ");
console.log("Puedes asumir que las palabras están separadas por un solo espacio.");
console.log(" ");
function contarPalabras(frase) {
    const palabras = frase.split(" ");
    return palabras.length;
}
console.log(frase);
console.log(`La frase de arriba tiene ${contarPalabras(frase)} palabras.`);
// Verificar palíndromos
// Escribe un programa que verifique si una cadena es un palíndromo, es decir,
// si se lee igual de izquierda a derecha que de derecha a izquierda
// (ignorando los espacios y la capitalización).
console.log(" ");
console.log("---------------------- Verificar palíndromos ----------------------");
console.log(" ");
console.log("Escribe un programa que verifique si una cadena es un palíndromo.");
console.log(" ");
const palabra = "aca";
function verificarPalindromo(palabra) {
    let palabraInvertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    if (palabraInvertida === palabra) {
        return console.log(`La frase "${palabra}" es palindroma.`);
    }
    else {
        return console.log(`La palabra "${palabra}" no es palindroma.`);
    }
}
verificarPalindromo(palabra);
// Capitalizar palabras
// Escribe un programa que tome una cadena de palabras separadas por espacios
// y devuelva una cadena donde cada palabra comience con mayúscula.
console.log(" ");
console.log("---------------------- Capitalizar palabras -----------------------");
console.log(" ");
console.log("Escribe un programa que tome una cadena de palabras separadas por espacios");
console.log("y devuelva una cadena donde cada palabra comience con mayúscula.");
console.log(" ");
const fraseMinusculas = "abeja mosca mosquito murcielago isla";
function ponerMayuscula(frase) {
    const palabra = frase.split(" ");
    let fraseMayusculas = "";
    for (let i = 0; i < palabra.length; i++) {
        fraseMayusculas += palabra[i][0].toUpperCase() + palabra[i].slice(1);
        if (i != palabra.length - 1) {
            fraseMayusculas += " ";
        }
    }
    return fraseMayusculas;
}
console.log(ponerMayuscula(fraseMinusculas));
// Contar vocales y consonantes
// Escribe un programa que cuente el número de vocales y consonantes en una cadena dada.
console.log(" ");
console.log("------------------- Contar vocales y consonantes -------------------");
console.log(" ");
console.log("Escribe un programa que cuente el número de vocales y consonantes en una cadena dada.");
console.log(" ");
function contarVocalesConsonantes(frase) {
    const vocales = [
        "a",
        "á",
        "à",
        "ä",
        "e",
        "é",
        "è",
        "i",
        "í",
        "ì",
        "o",
        "ó",
        "ò",
        "u",
        "ú",
        "ù",
        "ü",
    ];
    let contadorVocales = 0;
    let contadorConsonantes = 0;
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i].toLowerCase();
        if (vocales.includes(caracter)) {
            contadorVocales++;
        }
        else if (/^[a-z]$/.test(caracter)) {
            contadorConsonantes++;
        }
    }
    return `Hay en total: ${contadorVocales} vocales y ${contadorConsonantes} consonantes.`;
}
console.log(contarVocalesConsonantes(frase));
