// Seleccionamos los elementos del DOM
const estado = document.getElementById("estado");
const lista = document.getElementById("lista-posts");

// URL correcta de la API que SÍ permite CORS
const url = "https://jsonplaceholder.typicode.com/posts";

// Función que carga los posts
async function cargarPosts() {
  try {
    // Petición GET a la API
    const response = await fetch(url);

    // Si la respuesta no es válida (error 404, 500, etc.)
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    // Convertimos la respuesta a JSON
    const data = await response.json();

    // Cambiamos el mensaje una vez que llegan los datos
    estado.textContent = "Posts cargados:";

    // Recorremos los posts y los agregamos al <ul>
    data.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;   // título del post
      lista.appendChild(li);
    });

  } catch (error) {
    // Si ocurre un error, mostramos mensaje en pantalla
    estado.textContent = "Error al cargar los datos.";
    console.error("Error:", error);
  }
}

// Llamamos a la función al cargar la página
cargarPosts();
