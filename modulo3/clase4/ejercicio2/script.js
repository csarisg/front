// Seleccionamos los elementos del formulario
const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Seleccionamos los mensajes de error y el resultado
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
const resultado = document.getElementById('resultado');

// Escuchamos el evento "submit" del formulario
formulario.addEventListener('submit', (event) => {
  // Limpiamos los mensajes anteriores
  errorEmail.textContent = '';
  errorPassword.textContent = '';
  resultado.textContent = '';

  // Obtenemos los valores de los campos
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let hayError = false; // Variable para saber si hay errores

  // ===== VALIDACIÓN DEL EMAIL =====
  if (!email.includes('@')) {
    errorEmail.textContent = 'El correo debe contener un @';
    hayError = true;
  }

  // ===== VALIDACIÓN DE LA CONTRASEÑA =====
  if (password.length < 6) {
    errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres';
    hayError = true;
  }

  // ===== SI HAY ERRORES, SE DETIENE EL ENVÍO =====
  if (hayError) {
    event.preventDefault(); // Evita que el formulario se envíe
    return; // Sale de la función
  }

  // ===== SI NO HAY ERRORES, SE MUESTRA ÉXITO =====
  event.preventDefault(); // Evita recarga de página
  resultado.textContent = 'Formulario enviado correctamente ✅';
});
