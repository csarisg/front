const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("ingrese su nombre galactico: ");
let edad = parseInt(prompt("cual es tu edad terrestre: "));
let especie = prompt("cual es tu especie: (humano, alien, cyborg) ");

let tienePermiso = (edad>18 && especie !== "") || nombre === "capitana";

const mensaje = tienePermiso
    ?"bienvenido a bordo" + (nombre || "tripulante desconosido") + "!"
    :"ecceso denegado";
    
console.log(mensaje);
