// Consigna:
// Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. 
// Usa un ciclo for.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("¿que tabla de multiplicar quiere ver?: "));

console.log("la tabla de multiplicar del " + numero + " es: "); 

for (let i = 1; i <= 10; i++) { // Recorro del 1 al 10
    console.log(numero + " x " + i + " = " + (numero * i)); // Calculo el resultado de la multiplicación
}


