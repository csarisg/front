/* ======================================
   Datos simulados (como si fuera la API)
   ====================================== */

const libros = [
  {
    id: 58,
    titulo: "Duna",
    genero: "ciencia ficcion",
    fecha_publicacion: 1965,
    resenas: ["Excelente libro", "Un clásico"]
  },
  {
    id: 22,
    titulo: "El Hobbit",
    genero: "fantasia",
    fecha_publicacion: 1937,
    resenas: []
  }
];

// Contenedor donde se muestran los resultados
const resultado = document.getElementById("resultado");

/* ======================================
   GET /api/libros
   Obtiene todos los libros
   ====================================== */
document.getElementById("btnLibros").addEventListener("click", () => {
  resultado.textContent = JSON.stringify(libros, null, 2);
});

/* ======================================
   GET /api/libros/58
   Obtiene un libro por su ID
   ====================================== */
document.getElementById("btnLibro").addEventListener("click", () => {
  const libro = libros.find(l => l.id === 58);
  resultado.textContent = JSON.stringify(libro, null, 2);
});

/* ======================================
   GET /api/libros/58/resenas
   Obtiene las reseñas de un libro
   ====================================== */
document.getElementById("btnResenas").addEventListener("click", () => {
  const libro = libros.find(l => l.id === 58);
  resultado.textContent = JSON.stringify(libro.resenas, null, 2);
});

/* ======================================
   GET /api/libros?genero=ciencia-ficcion
   Filtra y ordena libros
   ====================================== */
document.getElementById("btnFiltrar").addEventListener("click", () => {
  const filtrados = libros
    .filter(l => l.genero === "ciencia ficcion")
    .sort((a, b) => b.fecha_publicacion - a.fecha_publicacion);

  resultado.textContent = JSON.stringify(filtrados, null, 2);
});

/* ======================================
   POST /api/libros/58/resenas
   Agrega una nueva reseña
   ====================================== */
document.getElementById("btnAgregar").addEventListener("click", () => {
  const libro = libros.find(l => l.id === 58);

  // Simulación del body de una petición POST
  libro.resenas.push("Nueva reseña agregada");

  resultado.textContent = "Reseña agregada correctamente";
});
