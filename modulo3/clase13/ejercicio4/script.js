// Referencias al HTML
const mensaje = document.getElementById("mensaje");
const btnReintentar = document.getElementById("btn-reintentar");

// URL incorrecta para generar error
const url = "https://jsonplaceholder.typicode.com/INVALIDO";

// Función que hace la petición
function cargarDatos() {
  mensaje.textContent = "Cargando...";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Si por algún motivo no da error (poco probable), mostramos lo recibido
      mensaje.textContent = "Datos cargados correctamente";
      console.log(data);
    })
    .catch(error => {
      // Aquí cae cuando hay un error
      console.error("Error detectado:", error);
      mensaje.textContent = "No se pudieron cargar los datos";
    });
}

// Llamamos la función cuando se hace clic en "Reintentar"
btnReintentar.addEventListener("click", () => {
  cargarDatos();
});

// Llamamos la función al cargar la página (opcional)
cargarDatos();
