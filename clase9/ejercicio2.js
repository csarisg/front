const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("ingrese un numero: "));
const RANGO_MINIMO = 11;
const RANGO_MAXIMO = 66;

if(numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO){console.log ("numero dentro de rango")
}else if(numero < RANGO_MINIMO) {console.log("numero fuera de rango")
}else{console.log("numero fuera de rango")}

