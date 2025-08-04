const prompt = require("prompt-sync")({ sigint: true });

function kgToLibras(kg){
const libras = kg * 2.20462;
return libras.toFixed(2);
}

let kg = parseFloat(prompt("ingrese su peso en kilogramos: "));
let libras = kgToLibras(kg);
console.log( kg + "kg convertido a libras es " + libras + " libras");