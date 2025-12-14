/* ======================================
   Referencias a elementos del DOM
   ====================================== */
const tituloActual = document.getElementById("tituloActual");
const nuevoTitulo = document.getElementById("nuevoTitulo");
const mensaje = document.getElementById("mensaje");
const btnGuardar = document.getElementById("btnGuardar");

/* ======================================
   Función para mostrar mensajes
   ====================================== */
function mostrarMensaje(texto, tipo) {
  mensaje.className = `notification ${tipo}`;
  mensaje.textContent = texto;
  mensaje.classList.remove("is-hidden");
}

/* ======================================
   PATCH /api/publicaciones/15
   Editar título de la publicación
   ====================================== */
btnGuardar.addEventListener("click", () => {
  const titulo = nuevoTitulo.value;

  // Simulación del body enviado al servidor
  const body = {
    titulo: titulo
  };

  // Validación simple (simula error 400)
  if (titulo === "") {
    mostrarMensaje(
      "Error: el título no puede estar vacío (400 Bad Request)",
      "is-danger"
    );
    return;
  }

  // Simulación de respuesta exitosa (200)
  tituloActual.textContent = body.titulo;

  mostrarMensaje(
    "Título actualizado correctamente (200 OK)",
    "is-success"
  );

  nuevoTitulo.value = "";
});
