/* ======================================
   Referencias al DOM
   ====================================== */
const btnCargar = document.getElementById("btnCargar");
const listaPosts = document.getElementById("listaPosts");

/* ======================================
   GET /posts?_limit=10
   Consume datos desde JSONPlaceholder
   ====================================== */
btnCargar.addEventListener("click", () => {

  // Endpoint con parámetro de búsqueda
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  fetch(url)
    .then(response => response.json()) // Convertir respuesta a JSON
    .then(data => {
      // Limpiar lista antes de mostrar nuevos datos
      listaPosts.innerHTML = "";

      // Recorrer los posts recibidos
      data.forEach(post => {

        // Crear una tarjeta Bulma por cada post
        const card = document.createElement("div");
        card.className = "card mb-4";

        card.innerHTML = `
          <div class="card-content">
            <p class="title is-5">${post.title}</p>
            <p class="content">${post.body}</p>
          </div>
        `;

        // Agregar tarjeta al contenedor
        listaPosts.appendChild(card);
      });
    })
    .catch(error => {
      // Manejo básico de errores
      listaPosts.innerHTML = `
        <div class="notification is-danger">
          Error al cargar los datos
        </div>
      `;
      console.error(error);
    });
});
