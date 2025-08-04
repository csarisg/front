const prompt = require("prompt-sync")({ sigint: true });

//¡Estás a cargo de organizar un desfile! Tenés que decidir cuántos personajes 
// van a participar y qué emoji representa a tu equipo. 
// Usando un bucle for, mostrá cómo desfilan uno a uno por la pasarela.


let cantidadPersonajes = parseInt(prompt("¿Cuántos personajes van a participar en el desfile?: "));
let equipo = prompt("¿Qué emoji representa a tu equipo? ej ❤️ : ");

for (let i = 1; i <= cantidadPersonajes; i++) {
    console.log ( i + ". " + equipo + " Desfilando por la pasarela");
}
console.log("¡el desfile a comenzado!🎉" );