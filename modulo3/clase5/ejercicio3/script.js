// Seleccionamos los elementos del DOM
const abrirModal = document.getElementById('abrir-modal');
const cerrarModal = document.getElementById('cerrar-modal');
const overlay = document.getElementById('overlay');

// Mostrar el modal al hacer clic en el botón principal
abrirModal.addEventListener('click', () => {
  overlay.style.display = 'flex'; // Mostramos el overlay y el modal centrado
});

// Cerrar el modal al hacer clic en el botón "Cerrar"
cerrarModal.addEventListener('click', () => {
  overlay.style.display = 'none'; // Ocultamos el modal
});

// También cerrar el modal si se hace clic fuera del área del modal
overlay.addEventListener('click', (evento) => {
  // Si el clic NO fue dentro del modal
  if (evento.target === overlay) {
    overlay.style.display = 'none';
  }
});
