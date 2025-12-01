// Referencia al elemento donde mostraremos el mensaje
const mensaje = document.getElementById("mensaje");

// Función asíncrona para cargar datos
async function cargarDatos() {
  try {
    // URL incorrecta para forzar un error
    const response = await fetch("https://jsonplaceholder.typicode.com/INVALIDO");

    // Si la respuesta no es correcta (404, 500, etc.)
    if (!response.ok) {
      throw new Error("Respuesta no válida del servidor");
    }

    // Convertimos la respuesta a JSON
    const data = await response.json();
    console.log(data);

    // Si todo va bien
    mensaje.textContent = "Datos cargados correctamente";

  } catch (error) {
    // Si ocurre un error en cualquier parte del proceso
    console.error("Error capturado:", error);
    mensaje.textContent = "No se pudieron cargar los datos. Intente más tarde.";
  }
}

// Ejecutamos la función al cargar la página
cargarDatos();
