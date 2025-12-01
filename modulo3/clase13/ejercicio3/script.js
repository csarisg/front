// Obtenemos elementos del DOM
const form = document.getElementById("form-post");
const estado = document.getElementById("estado");

// Escuchamos el envío del formulario
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita recargar la página

  // Obtenemos los valores del formulario
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  // Mostramos mensaje de carga
  estado.textContent = "Enviando...";

  try {
    // Ejecutamos POST usando fetch
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      })
    });

    // Si la respuesta es incorrecta (404, 500, etc.)
    if (!response.ok) {
      throw new Error("Error en la respuesta");
    }

    // Convertimos la respuesta a JSON
    const data = await response.json();
    console.log("Respuesta de la API:", data);

    // Mensaje final de éxito
    estado.textContent = "¡Post creado!";

  } catch (error) {
    // Si algo falla
    console.error("Error:", error);
    estado.textContent = "Error al enviar";
  }
});
