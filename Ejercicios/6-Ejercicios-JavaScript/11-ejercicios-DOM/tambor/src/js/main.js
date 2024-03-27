document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".tambor button");
  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const idBoton = this.id;
      reproducirSonido(idBoton);
    });
  });

  document.addEventListener("keydown", function (event) {
    const tecla = event.key.toLowerCase();
    if (
      tecla === "q" ||
      tecla === "w" ||
      tecla === "e" ||
      tecla === "r" ||
      tecla === "t"
    ) {
      reproducirSonido(tecla);
    }
  });

  function reproducirSonido(id) {
    const audio = new Audio(`./src/sounds/${id}.mp3`);
    audio.play();
  }
});
