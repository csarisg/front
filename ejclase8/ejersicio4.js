const prompt = require("prompt-sync")({ sigint: true })

let numero = prompt("ingrese un numero: ")
const resultado = numero % 2

if (resultado === 0){console.log("numero par")}
else {console.log("numero impar")}
