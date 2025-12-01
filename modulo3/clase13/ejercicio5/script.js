// URL de un post que NO existe (ID 9999)
const url = "https://jsonplaceholder.typicode.com/posts/9999";

// Hacemos la petición fetch
fetch(url)
  .then(response => {
    // Verificamos el código de estado (status code)
    if (response.status === 404) {
      // Si el servidor devuelve 404, el post no existe
      document.getElementById("resultado").textContent = "Post no encontrado (404)";
      return;
    }

    // Si la respuesta es correcta (status 200), procesamos el JSON
    if (response.status === 200) {
      return response.json();
    }
  })
  .then(data => {
    // Si data existe, significa que sí se obtuvo un post
    if (data) {
      document.getElementById("resultado").textContent = `Título: ${data.title}`;
    }
  })
  .catch(error => {
    // Cualquier error de conexión o red se captura aquí
    document.getElementById("resultado").textContent = "Error al realizar la petición";
    console.error("Error:", error);
  });
