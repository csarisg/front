/* ======================================
   JSON simulado recibido desde la API
   ====================================== */
const usuario = {
  id: 101,
  nombre: "Ana López",
  email: "ana@example.com",
  ultimo_acceso: "2023-10-05"
};

/* ======================================
   Mostrar datos en la interfaz
   ====================================== */
document.getElementById("nombre").textContent = usuario.nombre;
document.getElementById("email").textContent = usuario.email;
document.getElementById("idUsuario").textContent = usuario.id;
document.getElementById("ultimoAcceso").textContent = usuario.ultimo_acceso;
