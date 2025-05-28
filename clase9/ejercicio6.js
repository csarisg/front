const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("ingrese su edad: "));

if (numero > 18){console.log("usted es mayor de edad")
}else {console.log("usted es menor de edad")}
