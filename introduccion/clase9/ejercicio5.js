const prompt = require("prompt-sync")({ sigint: true });

let a = parseFloat(prompt("ingrese un numeros: "));
let b = parseFloat(prompt("ingrese otro numero: "));
let c = parseFloat(prompt("ingre un numero mas: "));

if ( a < b && c < b){console.log(b +" es el numero mayor")
} else if ( b < a && c < a){console.log(a + " es el numero mayor")
} else if ( a < c && b < c){console.log(b + " es el numero mayor")}

