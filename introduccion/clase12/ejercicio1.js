// While
// Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. 
// Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

let numero = prompt("Ingrese tantos numero como quiera, uno a la vez, asegurece de incluir uno negativo: ");
let suma = 0;

while (numero >= 0) {
    suma += parseFloat(numero);
    numero = prompt("Ingrese tantos numeros como quiera, uno a la vez, asegurese de incluir uno negativo: ");
}
console.log("La suma de todos los números ingresados es: " + suma);

