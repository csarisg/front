const resultado = document.getElementById("resultado");

/* ================================
   Caso 1
   ================================ */
document.getElementById("btn1").addEventListener("click", () => {
  resultado.innerHTML = `
    <p><strong>❌ Incorrecto:</strong> GET /obtenerUsuario/25</p>
    <p><strong>✅ Correcto:</strong> GET /usuarios/25</p>
    <p>La URI no debe contener verbos.</p>
  `;
});

/* ================================
   Caso 2
   ================================ */
document.getElementById("btn2").addEventListener("click", () => {
  resultado.innerHTML = `
    <p><strong>❌ Incorrecto:</strong> POST /actualizarProducto/10</p>
    <p><strong>✅ Correcto:</strong> PATCH /productos/10</p>
    <p>El método HTTP define la acción.</p>
  `;
});

/* ================================
   Caso 3
   ================================ */
document.getElementById("btn3").addEventListener("click", () => {
  resultado.innerHTML = `
    <p><strong>❌ Incorrecto:</strong> DELETE /usuarios?userId=5</p>
    <p><strong>✅ Correcto:</strong> DELETE /usuarios/5</p>
    <p>Los IDs van en la ruta, no como query.</p>
  `;
});

/* ================================
   Caso 4
   ================================ */
document.getElementById("btn4").addEventListener("click", () => {
  resultado.innerHTML = `
    <p><strong>❌ Incorrecto:</strong> GET /libros/ciencia-ficcion</p>
    <p><strong>✅ Correcto:</strong> GET /libros?genero=ciencia-ficcion</p>
    <p>Los filtros se hacen con query parameters.</p>
  `;
});
