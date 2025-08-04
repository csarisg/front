// Flores Favoritas:
// Escribe un programa en JavaScript para contar cuántas veces el usuario 
// menciona sus flores favoritas. Realiza las siguientes acciones: 
// 1. Inicializa un array vacío para almacenar las flores favoritas. 
// 2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
// agrega cada una al array manualmente (sin usar métodos como push). 
// 3. Pregunta al usuario por una flor específica y verifica si está entre sus 
// favoritas. 
// 4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto 
// debe hacerse manualmente).

const prompt = require('prompt-sync')();



let floresFavoritas = new Array(3);

floresFavoritas[0] = prompt("Ingresa tu primera flor favorita: ");
floresFavoritas[1] = prompt("Ingresa tu segunda flor favorita: ");
floresFavoritas[2] = prompt("Ingresa tu tercera flor favorita: ");

let florBuscada = prompt("¿Qué flor quieres verificar si está entre tus favoritas?: ");

let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i].toLowerCase().trim() === florBuscada.toLowerCase().trim()) {
        contador++;
    }
}

if (contador > 0){
    console.log(`la flor "${florBuscada}" fue mencionada ${contador} vez/veces entre tus favoritas.`)
} else {
    console.log(`la flor "${florBuscada}" no esta entre tus favoritas.`) 

}
