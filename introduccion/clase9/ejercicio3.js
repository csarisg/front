const prompt = require("prompt-sync")({ sigint: true });

let respuesta1 = prompt("ingrese falso o verdadero: ").toLowerCase();
let respuesta2 = prompt("ingrese falso o verdadero: ").toLowerCase();

let condicion1 = (respuesta1 === "verdadero");
let condicion2 = (respuesta2 === "verdadero");

console.log("los resultados son: ")
console.log("condicion1 AND condicion2 : ", condicion1 && condicion2)
console.log("condicion1 OR condicion2: ", condicion1 || condicion2)
console.log("NOT condicio1: ", !condicion1)
console.log("NOT condicion2: ", !condicion2)




