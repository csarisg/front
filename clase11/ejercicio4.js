// ¿Es par o impar?
// Consigna:
// Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o 
// impar. Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número: "));

let resultado = (numero % 2 === 0) ? "par" : "impar";  //pongo un ternario para determinar si 'numero' es par o impar

console.log('el número ' + numero + ' es ' + resultado + '.'); //imprimo el resultado para que se muestre al usuario