// Seleccionamos el formulario
const formulario = document.getElementById('formulario');

// Escuchamos el evento "submit"
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita recargar la página

  // Obtenemos el nombre ingresado
  const nombre = document.getElementById('nombre').value.trim();

  // Si el campo no está vacío, redirigimos con el nombre en la URL
  if (nombre !== '') {
    // encodeURIComponent asegura que el nombre se envíe correctamente en la URL
    window.location.href = `bienvenida.html?nombre=${encodeURIComponent(nombre)}`;
  }
});
