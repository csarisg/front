// Seleccionamos el botón y el cuerpo del documento
const botonTema = document.getElementById('toggle-tema');
const cuerpo = document.body;

// Escuchamos el clic en el botón
botonTema.addEventListener('click', () => {
  // Alternamos entre las clases modo-claro y modo-oscuro
  cuerpo.classList.toggle('modo-claro');
  cuerpo.classList.toggle('modo-oscuro');

  // Cambiamos el texto del botón según el modo activo
  if (cuerpo.classList.contains('modo-claro')) {
    botonTema.textContent = 'Cambiar a Modo Oscuro';
  } else {
    botonTema.textContent = 'Cambiar a Modo Claro';
  }
});
