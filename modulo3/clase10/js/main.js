// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {

  // ---------------------------------------------------------
  // Manejo del menú hamburguesa para móviles
  // ---------------------------------------------------------
  const navbarBurger = document.querySelector(".navbar-burger");

  navbarBurger.addEventListener("click", () => {
    const target = navbarBurger.dataset.target; // Obtiene el menú objetivo
    const menu = document.getElementById(target);

    // Activa/desactiva clases de Bulma para mostrar el menú
    navbarBurger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });


  // ---------------------------------------------------------
  // Verifica si hay un usuario logueado en localStorage o sessionStorage
  // ---------------------------------------------------------
  const currentUser =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");

  // Si hay usuario, oculta botones de login y muestra logout
  if (currentUser) {
    document.getElementById("login-button").classList.add("is-hidden");
    document.getElementById("login-link-nav").classList.add("is-hidden");
    document.getElementById("logout-button").classList.remove("is-hidden");
  
  // Si NO hay usuario logueado, muestra login y oculta logout
  } else {
    document.getElementById("login-button").classList.remove("is-hidden");
    document.getElementById("login-link-nav").classList.remove("is-hidden");
    document.getElementById("logout-button").classList.add("is-hidden");
  }
});


// ---------------------------------------------------------
// Función para cerrar sesión
// ---------------------------------------------------------
function handleLogout(event) {
  event.preventDefault();

  // Borra datos del usuario en ambas memorias
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");

  // Recarga la página para actualizar el navbar
  window.location.reload();
}
