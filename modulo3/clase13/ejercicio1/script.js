// Intento de fetch a una API que NO permite CORS
fetch("https://api.ejemplo-sin-cors.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));


  // Solución: Access-Control-Allow-Origin: http://tudominio.com
