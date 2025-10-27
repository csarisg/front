// Seleccionamos todos los botones del acordeón
const titulos = document.querySelectorAll('.acordeon-titulo');

// Recorremos cada título para agregarle un evento click
titulos.forEach(titulo => {
  titulo.addEventListener('click', () => {
    // Obtenemos el contenido que sigue justo después del título
    const contenido = titulo.nextElementSibling;

    // Alternamos entre mostrar y ocultar el contenido
    if (contenido.style.display === 'block') {
      contenido.style.display = 'none';
    } else {
      contenido.style.display = 'block';
    }
  });
});
