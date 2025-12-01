// Obtenemos el botón y el mensaje
const btn = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

// Escuchamos el clic en el botón
btn.addEventListener("click", () => {

  // Deshabilitamos el botón
  btn.disabled = true;

  // Mostramos mensaje al usuario
  mensaje.textContent = "Espere 3 segundos...";

  // Iniciamos temporizador de 3 segundos
  setTimeout(() => {
    // Cuando pasan los 3 segundos:
    btn.disabled = false;         // habilitamos el botón
    mensaje.textContent = "¡Listo!"; // mostramos mensaje final
  }, 3000);
});
