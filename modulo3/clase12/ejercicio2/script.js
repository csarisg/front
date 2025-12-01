// Seleccionamos los elementos donde mostraremos mensajes y la lista
const estado = document.getElementById("estado");
const listaPosts = document.getElementById("lista-posts");

// URL correcta para obtener los posts
const url = "https://jsonplaceholder.typicode.com/posts";

// Para simular un error, descomenta la línea de abajo:
// const url = "https://jsonplaceholder.typicode.com/postss"; // ❌ URL incorrecta

// Iniciamos solicitud con fetch
fetch(url)
  .then(response => {
    // Verificamos si la respuesta es correcta (status 200–299)
    if (!response.ok) {
      // Si falla, lanzamos un error que será capturado en .catch()
      throw new Error("Error en la respuesta de la API");
    }

    // Convertimos la respuesta a JSON (promesa)
    return response.json();
  })
  .then(data => {
    // Cambiamos el texto del estado una vez que los datos se cargan
    estado.textContent = "Datos cargados:";

    // Recorremos cada post recibido
    data.forEach(post => {
      // Creamos un elemento <li>
      const li = document.createElement("li");

      // Insertamos el título del post
      li.textContent = post.title;

      // Agregamos el <li> dentro del <ul>
      listaPosts.appendChild(li);
    });
  })
  .catch(error => {
    // Si ocurre un error, mostramos mensaje al usuario
    estado.textContent = "Error al cargar los datos.";

    // Mostramos más detalles en la consola
    console.error("Error:", error);
  });
