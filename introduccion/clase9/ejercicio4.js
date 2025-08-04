const prompt = require("prompt-sync")({ sigint: true });

let resultado = ("sara");
let nombre = prompt("ingrese nombre: ").toLowerCase();

if (nombre === resultado){console.log("hola " + resultado)
}else if (nombre !== resultado){console.log("incorrecto")};