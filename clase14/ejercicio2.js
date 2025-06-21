// Calcular promedio de calificaciones: 
// Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
// el promedio.

const prompt = require('prompt-sync')();

let calificaciones = [];
for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt("Introduce la calificación " + (i + 1) + ": "));
    calificaciones.push(calificacion);
}

const calcularPromedio = (calificaciones) => {
    let suma = calificaciones.reduce((a, b) => a + b, 0);
    return suma / calificaciones.length;
}

let promedio = calcularPromedio(calificaciones);
console.log("El promedio de las calificaciones es: " + promedio.toFixed(2));
