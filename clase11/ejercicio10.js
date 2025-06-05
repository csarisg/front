// Adivina el número
// Consigna:
// Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el 
// número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén 
// los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este 
// ejercicio.

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
let intentos = 3;
let numero = prompt("Adivina el número entre 1 y 10: ");


for (let i = 1; i <= intentos; i++) {
    if (parseInt(numero) === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número secreto: " + numeroSecreto);
        break;
    } else if (i < intentos) {
        console.log("Incorrecto. Te quedan " + (intentos - i) + " intentos.");
        numero = prompt("Intenta nuevamente: ");
    } else {
        console.log("Lo siento, no adivinaste el número. El número secreto era: " + numeroSecreto);
    }
}
