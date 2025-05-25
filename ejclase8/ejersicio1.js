const prompt = require("prompt-sync")({ sigint: true });


let numero = prompt("ingrese un numero: ");
const resultado = numero * 2

console.log("resultado:", resultado);

