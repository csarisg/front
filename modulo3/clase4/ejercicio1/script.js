// Seleccionamos el formulario y la sección donde mostraremos los resultados
const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

// Escuchamos el evento "submit" (cuando el usuario presiona el botón Enviar)
formulario.addEventListener('submit', (event) => {
  // Evitamos que la página se recargue al enviar el formulario
  event.preventDefault();

  // Obtenemos los valores escritos por la usuaria
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;

  // Mostramos los resultados directamente en la página
  resultado.innerHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Edad:</strong> ${edad}</p>
  `;
});
