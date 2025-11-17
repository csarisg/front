// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el JS
document.addEventListener("DOMContentLoaded", function () { 
  initUsers(); // Inicializa los usuarios por defecto si no existen
  setupEventListeners(); // Activa los eventos de los formularios
});


// ---------------------------------------------------------------
// Función que inicializa usuarios por defecto en localStorage
// ---------------------------------------------------------------
function initUsers() {
  // Si no existe la clave "users" en localStorage, la crea
  if (!localStorage.getItem("users")) {
    const initialUsers = [
      {
        username: "admin",
        email: "admin@ejemplo.com",
        password: "admin123",
      },
      {
        username: "estudiante",
        email: "estudiante@ejemplo.com",
        password: "estudiante123",
      },
    ];

    // Guarda los usuarios en formato JSON dentro del navegador
    localStorage.setItem("users", JSON.stringify(initialUsers));
  }
}


// ---------------------------------------------------------------
// Función que conecta los formularios con sus funciones respectivas
// ---------------------------------------------------------------
function setupEventListeners() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  // Si existe el formulario de login, activa su evento submit
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  // Si existe el formulario de registro, activa su evento submit
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }
}


// ---------------------------------------------------------------
// Manejador del formulario de inicio de sesión
// ---------------------------------------------------------------
function handleLogin(e) {
  e.preventDefault(); // Evita que la página se recargue

  // Obtiene valores ingresados
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  // Validación básica
  if (!username || !password) {
    showError("Por favor, completa todos los campos");
    return;
  }

  // Obtiene los usuarios guardados
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Busca usuario que coincida por username/email y contraseña
  const user = users.find(
    (u) =>
      (u.username === username || u.email === username) &&
      u.password === password
  );

  if (user) {
    showSuccess("¡Inicio de sesión exitoso! Redirigiendo...");

    // Guarda sesión permanente si eligió "Recordarme"
    if (remember) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          email: user.email,
        })
      );
    } else {
      // Si no, la guarda sólo por la sesión activa
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          email: user.email,
        })
      );
    }

    // Redirige después de 1 segundo
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 1000);
  } else {
    showError("Usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
  }
}


// ---------------------------------------------------------------
// Manejador del formulario de registro
// ---------------------------------------------------------------
function handleRegister(e) {
  e.preventDefault();

  // Obtiene valores del formulario
  const username = document.getElementById("reg-username").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const passwordConfirm = document.getElementById("reg-password-confirm").value;

  // Validaciones de campos
  if (!username || !email || !password || !passwordConfirm) {
    showError("Por favor, completa todos los campos");
    return;
  }

  if (username.length < 3) {
    showError("El nombre de usuario debe tener al menos 3 caracteres");
    return;
  }

  if (!isValidEmail(email)) {
    showError("Por favor, ingresa un email válido");
    return;
  }

  if (password.length < 6) {
    showError("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  if (password !== passwordConfirm) {
    showError("Las contraseñas no coinciden");
    return;
  }

  // Obtiene lista de usuarios actuales
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Verifica si el usuario ya existe
  const userExists = users.some(
    (u) => u.username === username || u.email === email
  );

  if (userExists) {
    showError("El usuario o email ya está registrado. Por favor, usa otro.");
    return;
  }

  // Crea nuevo usuario
  const newUser = {
    username: username,
    email: email,
    password: password,
  };

  // Agrega y guarda en localStorage
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  showSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");

  // Limpia formulario
  document.getElementById("register-form").reset();

  // Muestra formulario de login y autocompleta el username
  setTimeout(() => {
    showLogin();
    document.getElementById("username").value = username;
  }, 2000);
}


// ---------------------------------------------------------------
// Verifica formato válido de email mediante expresión regular
// ---------------------------------------------------------------
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// ---------------------------------------------------------------
// Muestra mensajes de error del login o registro según corresponda
// ---------------------------------------------------------------
function showError(message) {
  const registerBox = document.getElementById("register-box");

  // Detecta si está visible el formulario de registro
  const isRegisterVisible =
    registerBox && !registerBox.classList.contains("is-hidden");

  let errorDiv, errorText, successDiv;

  // Dependiendo del formulario muestra el error adecuado
  if (isRegisterVisible) {
    errorDiv = document.getElementById("error-message-register");
    errorText = document.getElementById("error-text-register");
    successDiv = document.getElementById("success-message-register");
  } else {
    errorDiv = document.getElementById("error-message");
    errorText = document.getElementById("error-text");
    successDiv = document.getElementById("success-message");
  }

  if (errorDiv && errorText) {
    errorText.textContent = message;
    errorDiv.classList.remove("is-hidden");

    // Oculta mensaje de éxito si estaba activo
    if (successDiv) {
      successDiv.classList.add("is-hidden");
    }

    // Cierra automáticamente después de 5 segundos
    setTimeout(() => {
      if (isRegisterVisible) {
        closeErrorRegister();
      } else {
        closeError();
      }
    }, 5000);
  }
}


// ---------------------------------------------------------------
// Muestra mensajes de éxito del login o registro
// ---------------------------------------------------------------
function showSuccess(message) {
  const registerBox = document.getElementById("register-box");
  const isRegisterVisible =
    registerBox && !registerBox.classList.contains("is-hidden");

  let successDiv, successText, errorDiv;

  if (isRegisterVisible) {
    successDiv = document.getElementById("success-message-register");
    successText = document.getElementById("success-text-register");
    errorDiv = document.getElementById("error-message-register");
  } else {
    successDiv = document.getElementById("success-message");
    successText = document.getElementById("success-text");
    errorDiv = document.getElementById("error-message");
  }

  successText.textContent = message;
  successDiv.classList.remove("is-hidden");

  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}


// ---------------------------------------------------------------
// Oculta mensajes de error del login
// ---------------------------------------------------------------
function closeError() {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}

// ---------------------------------------------------------------
// Oculta mensajes de error del registro
// ---------------------------------------------------------------
function closeErrorRegister() {
  const errorDiv = document.getElementById("error-message-register");
  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}


// ---------------------------------------------------------------
// Muestra formulario de registro y oculta el de login
// ---------------------------------------------------------------
function showRegister() {
  const loginBox = document.querySelector(".box");
  const registerBox = document.getElementById("register-box");

  loginBox.classList.add("is-hidden");
  registerBox.classList.remove("is-hidden");
  closeError();
  closeErrorRegister();
}


// ---------------------------------------------------------------
// Muestra formulario de login y oculta el de registro
// ---------------------------------------------------------------
function showLogin() {
  const loginBox = document.querySelector(".box");
  const registerBox = document.getElementById("register-box");

  loginBox.classList.remove("is-hidden");
  registerBox.classList.add("is-hidden");
  closeError();
  closeErrorRegister();
}

