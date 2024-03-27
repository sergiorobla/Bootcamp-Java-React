const carta = document.getElementById("carta");
const caraTrasera = document.getElementById("cara-trasera");

// Arreglo con nombres de las imágenes disponibles
const imagenes = [
  "A.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "J.jpg",
  "Q.jpg",
  "K.jpg",
  "pA.jpg",
  "p2.jpg",
  "p3.jpg",
  "p4.jpg",
  "p5.jpg",
  "p6.jpg",
  "p7.jpg",
  "p8.jpg",
  "p9.jpg",
  "p10.jpg",
  "pJ.jpg",
  "pQ.jpg",
  "pK.jpg",
  "rA.jpg",
  "r2.jpg",
  "r3.jpg",
  "r4.jpg",
  "r5.jpg",
  "r6.jpg",
  "r7.jpg",
  "r8.jpg",
  "r9.jpg",
  "r10.jpg",
  "rJ.jpg",
  "rQ.jpg",
  "rK.jpg",
  "tA.jpg",
  "t2.jpg",
  "t3.jpg",
  "t4.jpg",
  "t5.jpg",
  "t6.jpg",
  "t7.jpg",
  "t8.jpg",
  "t9.jpg",
  "t10.jpg",
  "tJ.jpg",
  "tQ.jpg",
  "tK.jpg",
  "rojo.jpg",
];

carta.addEventListener("click", () => {
  // Seleccionar una imagen aleatoria
  const indice = Math.floor(Math.random() * imagenes.length);
  const imagenAleatoria = imagenes[indice];

  // Asignar la imagen aleatoria a la carta
  caraTrasera.innerHTML = `<img src="./src/img/cartas/${imagenAleatoria}" alt="Imagen trasera">`;

  // Rotar la carta para revelar la imagen trasera
  carta.style.transform = "rotateY(180deg)";
});

carta.addEventListener("mouseleave", () => {
  timerId = setTimeout(() => {
    carta.style.transform = "rotateY(0deg)";
  }, 2000);
});
