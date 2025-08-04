// Calcular el precio final con IVA: 
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
// función flecha para calcular el precio final.

const prompt = require('prompt-sync')();

let precio = parseFloat(prompt("Introduce el precio del producto:"));
let IVA = parseFloat(prompt("Introduce el porcentaje de IVA:"));

const calcularPrecioFinal = (precio, IVA) => {
    let precioConIVA = precio * (1 + IVA / 100);
    return precioConIVA;
}


console.log("El precio final con IVA es: " + calcularPrecioFinal(precio, IVA).toFixed(2));



