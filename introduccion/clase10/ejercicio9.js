// Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula: 
//let imc = peso / (altura * altura);
 

// Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));
let imc = peso / (altura * altura);

console.log("Su Índice de Masa Corporal (IMC) es: " + imc.toFixed(2));