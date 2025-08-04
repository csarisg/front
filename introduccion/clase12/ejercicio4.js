// 1.	Crear un array para almacenar las notas.
// 2.	Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
// 3.	Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
// 4.	Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
// 5.	Imprime en consola las notas ingresadas usando el array notas.

const prompt = require("prompt-sync")();

const notas = [];                      
const cantidadNotas = parseInt(prompt("¿Cuántas notas deseas ingresar?: "));

for (let i = 0; i < cantidadNotas; i++) {
    const nota = parseFloat(prompt(`Ingresa la nota del estudiante ${i + 1}: `));
    notas[i] = nota; 
}

console.log("Notas ingresadas:", notas);

