//Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje 
// personalizado que incluya toda esta información.
const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre:") .toLowerCase(); 
let edad = parseInt(prompt("Ingrese su edad:")); 
let peso = parseFloat(prompt("Ingrese su peso en kg:"));

console.log('Hola '+ nombre + ' tienes ' + edad + ' años y pesas ' + peso + ' kg.');




