// Clasificación de edades: 
// Solicita al usuario una edad y usa una función flecha para clasificarla en 
// niño, adolescente, adulto o adulto mayor.

const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Introdusca su edad: "));

const clasificarEdad = (edad) => {
    if (edad < 0) {
        return "Edad no válida";
    } else if (edad <= 12) {
        return "usted es un niño";
    } else if (edad <= 18) {
        return "usted es un adolescente";
    } else if (edad <= 60) {
        return "usted es un adulto";
    } else {
        return "usted es un dulto mayor";
    }
}

console.log(clasificarEdad(edad));
