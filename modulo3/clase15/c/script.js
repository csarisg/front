/* ======================================
   Referencia al contenedor de mensajes
   ====================================== */
const mensaje = document.getElementById("mensaje");

/* ======================================
   Función para mostrar mensajes
   ====================================== */
function mostrarMensaje(texto, tipo) {
  mensaje.className = `notification ${tipo}`;
  mensaje.textContent = texto;
  mensaje.classList.remove("is-hidden");
}

/* ======================================
   GET válido (200 OK)
   ====================================== */
document.getElementById("btnOk").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw response;
    }

    mostrarMensaje(
      "Recurso obtenido correctamente (200 OK)",
      "is-success"
    );

  } catch (error) {
    mostrarMensaje(
      "Error inesperado",
      "is-danger"
    );
  }
});

/* ======================================
   GET recurso inexistente (404)
   ====================================== */
document.getElementById("btn404").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/99999"
    );

    if (response.status === 404) {
      mostrarMensaje(
        "Error 404: recurso no encontrado",
        "is-danger"
      );
      return;
    }

  } catch (error) {
    mostrarMensaje(
      "Error de conexión",
      "is-warning"
    );
  }
});

/* ======================================
   Error de conexión (try/catch)
   ====================================== */
document.getElementById("btnError").addEventListener("click", async () => {
  try {
    // URL incorrecta para forzar error
    await fetch("https://url-falsa-api.com/posts");
  } catch (error) {
    mostrarMensaje(
      "No se pudo conectar con el servidor",
      "is-warning"
    );
  }
});
