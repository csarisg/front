// Seleccionamos los elementos
const botonMenu = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

// Escuchamos el clic en el botón
botonMenu.addEventListener('click', () => {
  // Si el sidebar está cerrado (ancho 0), lo abrimos
  if (sidebar.style.width === '250px') {
    sidebar.style.width = '0';
  } else {
    sidebar.style.width = '250px';
  }
});

// Cerrar el sidebar si se hace clic fuera de él
document.addEventListener('click', (evento) => {
  // Si el clic no fue dentro del sidebar ni en el botón
  if (!sidebar.contains(evento.target) && evento.target !== botonMenu) {
    sidebar.style.width = '0';
  }
});
