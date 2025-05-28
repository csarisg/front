const prompt = require("prompt-sync")({ sigint: true });

let a = parseFloat(prompt("ingrese un numeros: "))
let b = parseFloat(prompt("ingrese otro numero: "))

if (b > a){console.log(b +" es mayor que "+ a)}
else if (a > b){console.log(a +" es mayos que "+ b)}
else if(a = b){console.log(a +" es igual a "+ b)}

