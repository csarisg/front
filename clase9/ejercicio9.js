const prompt = require("prompt-sync")({ sigint: true });


const PI = 3.14159;
let radio = parseFloat(prompt("ingrese el radio de un circulo: "))

let area = PI * Math.pow(radio, 2);
let perimetro = 2 * PI * radio;

console.log("el area del circulo es: " + area);
console.log("el perimetro del ceirculo es: " + perimetro);