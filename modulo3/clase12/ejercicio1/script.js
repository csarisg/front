document.getElementById("btn").addEventListener("click", function () {
  console.log("Inicio"); // Síncrono

  setTimeout(() => {
    console.log("Timeout"); // Asíncrono (macrotarea)
  }, 0);

  console.log("Fin"); // Síncrono
});

