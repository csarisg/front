// Seleccionamos el formulario
const formulario = document.getElementById('calculadora');

// Seleccionamos el elemento donde mostraremos el resultado
const resultado = document.getElementById('resultado');

// Escuchamos el evento "submit" del formulario
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita recargar la página

  // Obtenemos los valores ingresados y los convertimos a número
  const numero1 = parseFloat(document.getElementById('numero1').value);
  const numero2 = parseFloat(document.getElementById('numero2').value);
  const operacion = document.getElementById('operacion').value;

  let resultadoFinal;

  // Validamos división por cero
  if (operacion === '/' && numero2 === 0) {
    resultado.textContent = 'Error: no se puede dividir por cero';
    resultado.style.color = 'red';
    return;
  }

  // Realizamos la operación seleccionada
  switch (operacion) {
    case '+':
      resultadoFinal = numero1 + numero2;
      break;
    case '-':
      resultadoFinal = numero1 - numero2;
      break;
    case '*':
      resultadoFinal = numero1 * numero2;
      break;
    case '/':
      resultadoFinal = numero1 / numero2;
      break;
  }

  // Mostramos el resultado en pantalla
  resultado.textContent = `Resultado: ${resultadoFinal}`;
  resultado.style.color = '#00bfa6';
});
