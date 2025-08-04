// Positivo, negativo o cero?
// Consigna:
// Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. 
// El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un 
// mensaje explicativo en cada caso.

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Ingrese un número: "));  

if (numero > 0) {                                                 // si el número es mayor que 0, es positivo  
    console.log("El número " + numero + " es positivo.");
}                                                                 
else if (numero < 0) {                                            // si el numero es menos que 0, es negativo
    console.log("El número " + numero + " es negativo.");               
}
else {                                                            // si el número no es positivo ni negativo, solo puede ser cero
    console.log("El número es cero.");                             
}

