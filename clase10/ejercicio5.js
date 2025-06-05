// Pasos a seguir:
// Declaración y Asignación de Variables:
// 1.	Declara y asigna un valor numérico a dos variables: primerNumero y segundoNumero.
// Operaciones Matemáticas:

// 2.	Declara las siguientes variables: resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision.
// 3.	Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de las variables primerNumero y segundoNumero.

// Mostrar Resultados:

// 1.	Utiliza console.log(nombreDeLaVariable) para imprimir cada uno de los resultados y ver cómo se ven los mismos.

const prompt = require("prompt-sync")()

let numero1 = parseFloat(prompt("Ingrese el primer número: ")); //1
let numero2 = parseFloat(prompt("Ingrese el segundo número: ")); //1

let suma = numero1 + numero2; //2
let resta = numero1 - numero2; //2
let multiplicacion = numero1 * numero2; //2
let division = numero1 / numero2; //2

console.log("resultado de la suma: " + suma); //3
console.log("resultado de la resta: " + resta); //3
console.log("resultado de la multiplicación: " + multiplicacion); //3
console.log("resultado de la división: " + division); //3
