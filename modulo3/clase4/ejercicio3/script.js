// Seleccionamos el textarea y el contador
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

// Definimos el límite máximo de caracteres
const limite = 150;

// Escuchamos el evento "input", que se activa cada vez que el usuario escribe o borra algo
mensaje.addEventListener('input', () => {
  // Obtenemos la cantidad actual de caracteres escritos
  const caracteresUsados = mensaje.value.length;

  // Calculamos cuántos caracteres quedan
  const restantes = limite - caracteresUsados;

  // Actualizamos el texto del contador
  contador.textContent = `${restantes} caracteres restantes`;

  // Si se supera el límite, recortamos el texto automáticamente
  if (caracteresUsados > limite) {
    mensaje.value = mensaje.value.slice(0, limite);
  }

  // Cambiamos el color del contador si quedan pocos caracteres
  if (restantes <= 20) {
    contador.style.color = '#ff4d4d'; // rojo cuando queda poco
  } else {
    contador.style.color = '#ccc'; // gris normal
  }
});
