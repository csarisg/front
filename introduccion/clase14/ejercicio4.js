// Calcular descuento por cantidad:
// Solicita al usuario la cantidad de productos comprados y el precio unitario. 
// Usa una función flecha para calcular el total con descuento según la 
// cantidad.

const prompt = require('prompt-sync')();

let cantidad = parseInt(prompt("Introduce la cantidad de productos comprados: "));
let precios = [] 
for (let i = 0; i < cantidad; i++) {
    let precio = parseFloat(prompt("Introduce el precio del producto " + (i + 1) + ": "));
    precios.push(precio);
}

const calcularDescuento = (precios) => {
    let cantidad = precios.length;
    let descuento = 0;

if (cantidad >= 10) {
    descuento = 0.2
}
else if (cantidad >= 5) {
    descuento = 0.1;
}

let total = precios.reduce((acc, precio) => acc + precio, 0);
conDescuento = total * (1 - descuento);

return conDescuento;
}

console.log("El total con descuento es: " + calcularDescuento(precios).toFixed(2));
