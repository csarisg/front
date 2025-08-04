// Calculadora simple
// Consigna:
// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación 
// o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una 
// operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese otro número: "));
let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división): ").toLowerCase();
let resultado;

switch (operacion) {
    case 'suma':
        resultado = numero1 + numero2;
        console.log("El resultado de la suma es: " + resultado);
        break;
    case 'resta':
        resultado = numero1 - numero2;
        console.log("El resultado de la resta es: " + resultado);
        break;
    case 'multiplicacion':
        resultado = numero1 * numero2;
        console.log("El resultado de la multiplicacion es: " + resultado);
        break;
    case 'division':
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("El resultado de la division es: " + resultado);
        }
        else {
            console.log("Error: No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación inválida. Por favor, ingrese una operación válida (suma, resta, multiplicación, división).");
        break;
}