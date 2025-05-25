const prompt = require("prompt-sync")({ sigint: true })

let nombre = prompt("digite su nombre: ")
resultado = "quiubo" + nombre + "bienvenida"

console.log("resultado:", resultado)
