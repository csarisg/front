// Encuentra los números pares entre dos valores
// Consigna:
// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números 
// pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
// los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje 
// indicando que los valores son inválidos.

const prompt = require('prompt-sync')();

let inicio = parseInt(prompt("Ingrese el número inicial: "));
let fin = parseInt(prompt("Ingrese el número final: "));
let numerosPares = [];

    
for (let i = inicio; i <= fin; i++) {        //recorro los números entre inicio y fin
        if (i % 2 === 0)                   //verifico si el número es par
             numerosPares.push(i)        //si es par, lo agrego al array numerosPares
 }

 console.log("Los números pares entre " + inicio + " y " + fin + " son: " + numerosPares.join(", "));  //muestro los números pares encontrados