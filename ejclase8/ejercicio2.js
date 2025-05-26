const prompt = require("prompt-sync")({ sigint: true })

let numero = parseFloat(prompt("ingrese numero: "))


if (numero > 0) {console.log("numero positivo")}
else if (numero < 0) {console.log("numero negativo")}
else {console.log("0")}

