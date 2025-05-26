const prompt = require("prompt-sync")({ sigint: true })

let a = parseFloat(prompt("ingrese un numeros: "))
let b = parseFloat(prompt("ingrese otro numero: "))

const resultado = a + b
console.log("resultado: ", resultado)




