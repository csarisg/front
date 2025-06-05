// Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en grados Celsius a grados 
// Fahrenheit. La fórmula para la conversión es: F = C * 9/5 + 32.

 
// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.

const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
let fahrenheit = celsius * 9 / 5 + 32;

console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");