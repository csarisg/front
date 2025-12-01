// Seleccionamos los elementos del DOM
const form = document.getElementById("form-post");
const estado = document.getElementById("estado");

// Escuchamos el evento de envío del formulario
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita recargar la página

  // Obtenemos los valores ingresados por el usuario
  const titulo = document.getElementById("titulo").value;
  const contenido = document.getElementById("contenido").value;

  // Mostramos mensaje de estado mientras enviamos datos
  estado.textContent = "Enviando...";

  try {
    // Hacemos la solicitud POST usando async/await
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: titulo,
        body: contenido,
        userId: 1
      })
    });

    // Verificamos si la respuesta es correcta
    if (!response.ok) {
      throw new Error("Error en el servidor");
    }

    // Convertimos la respuesta a JSON
    const data = await response.json();
    console.log("Respuesta:", data);

    // Mostramos mensaje de éxito
    estado.textContent = "¡Post creado!";

  } catch (error) {
    // Mostramos mensaje si hubo un error
    estado.textContent = "Ocurrió un error al crear el post.";
    console.error("Error:", error);
  }
});
