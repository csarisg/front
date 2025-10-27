// Seleccionamos todos los botones de preguntas
const preguntas = document.querySelectorAll('.pregunta');

// Recorremos cada pregunta para añadir el evento click
preguntas.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Usamos nextElementSibling para acceder a la respuesta correspondiente
    const respuesta = boton.nextElementSibling;

    // Alternamos entre mostrar y ocultar
    if (respuesta.style.display === 'block') {
      respuesta.style.display = 'none'; // Oculta si ya está visible
    } else {
      respuesta.style.display = 'block'; // Muestra si estaba oculta
    }
  });
});
