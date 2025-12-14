/* ======================================
   Referencia al mensaje
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
   POST - Crear nuevo post
   Endpoint: POST /posts
   ====================================== */
document.getElementById("btnCrear").addEventListener("click", () => {
  const titulo = document.getElementById("tituloPost").value;
  const contenido = document.getElementById("contenidoPost").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: titulo,
      body: contenido,
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => {
      mostrarMensaje(
        `Post creado correctamente (ID ${data.id})`,
        "is-success"
      );
    });
});

/* ======================================
   PATCH - Editar título de un post
   Endpoint: PATCH /posts/1
   ====================================== */
document.getElementById("btnEditar").addEventListener("click", () => {
  const nuevoTitulo = document.getElementById("nuevoTitulo").value;

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: nuevoTitulo
    })
  })
    .then(response => response.json())
    .then(data => {
      mostrarMensaje(
        "Título actualizado correctamente (PATCH)",
        "is-warning"
      );
    });
});

/* ======================================
   DELETE - Eliminar un post
   Endpoint: DELETE /posts/1
   ====================================== */
document.getElementById("btnEliminar").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        mostrarMensaje(
          "Post eliminado correctamente (DELETE)",
          "is-danger"
        );
      }
    });
});
