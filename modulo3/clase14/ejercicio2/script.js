/* ======================================
   Referencia al contenedor del mensaje
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
   POST - Registro de usuario
   ======================================
   Método: POST
   Código: 201 Created
*/
document.getElementById("btnRegistro").addEventListener("click", () => {
  mostrarMensaje(
    "Usuario registrado correctamente (201 Created)",
    "is-success"
  );
});

/* ======================================
   DELETE - Producto inexistente
   ======================================
   Método: DELETE
   Código: 404 Not Found
*/
document.getElementById("btnEliminar").addEventListener("click", () => {
  mostrarMensaje(
    "Error: el producto no existe (404 Not Found)",
    "is-danger"
  );
});

/* ======================================
   PATCH - Actualizar correo
   ======================================
   Método: PATCH
   Código: 200 OK
*/
document.getElementById("btnActualizar").addEventListener("click", () => {
  mostrarMensaje(
    "Correo actualizado correctamente (200 OK)",
    "is-warning"
  );
});

/* ======================================
   GET - Pedidos recientes
   ======================================
   Método: GET
   Código: 200 OK
*/
document.getElementById("btnPedidos").addEventListener("click", () => {
  mostrarMensaje(
    "Mostrando lista de pedidos recientes (200 OK)",
    "is-info"
  );
});
