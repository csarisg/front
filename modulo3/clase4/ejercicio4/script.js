// Seleccionamos el formulario y la sección de resultados
const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

// Escuchamos el evento "submit"
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue

  // ====== OBTENER COLOR SELECCIONADO ======
  const colorSeleccionado = document.querySelector('input[name="color"]:checked');

  // Si no se seleccionó color, dejamos un mensaje vacío
  const color = colorSeleccionado ? colorSeleccionado.value : 'No seleccionaste color';

  // ====== OBTENER PASATIEMPOS SELECCIONADOS ======
  const pasatiemposSeleccionados = document.querySelectorAll('input[name="pasatiempo"]:checked');
  const listaPasatiempos = Array.from(pasatiemposSeleccionados).map(p => p.value);

  // Si no se seleccionó ningún pasatiempo, mostrar mensaje
  const pasatiempos = listaPasatiempos.length > 0 ? listaPasatiempos.join(', ') : 'No seleccionaste pasatiempos';

  // ====== MOSTRAR RESULTADO EN PANTALLA ======
  resultado.innerHTML = `
    <p><strong>Color elegido:</strong> ${color}</p>
    <p><strong>Pasatiempos:</strong> ${pasatiempos}</p>
  `;
});
