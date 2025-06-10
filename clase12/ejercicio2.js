// Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a 
// pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".
const prompt = require('prompt-sync')();

let claveingreada = '';


do {
    claveingreada = prompt('Por favor, ingresa la contraseña:');
    if (claveingreada !== '1234') {
        console.log('Contraseña incorrecta.');
    }
}
while (claveingreada != '1234');
console.log('Contraseña correcta, acceso concedido.');







