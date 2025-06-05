// Semáforo inteligente
// Consigna:
// Vamos a programar un semáforo. Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
// •	Rojo: "Alto, no puedes avanzar."
// •	Amarillo: "Precaución, prepárate para avanzar."
// •	Verde: "Avanza con seguridad."
// Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
// Utiliza un switch para resolver este ejercicio.

const prompt = require('prompt-sync')();

let Semaforo = prompt("Ingrese en que color esta el semáforo (rojo, amarillo o verde): ").toLowerCase();

switch (Semaforo) {          //inicio un switch para ponerle un valor a la variable Semaforo
    case "rojo":
        console.log("Alto, no puede avanzar.");      //este mensaje se muestra si se pone "rojo"
        break;
    case "amarillo":
        console.log("Precaución, prepárese para avanzar.");   //este mensaje se muestra si se pone "amarillo"
        break;
    case "verde":
        console.log("Avanze con seguridad.");     //este mensaje se muestra si se pone "verde"
        break;
    default:
        console.log("Color no reconocido, ingrese rojo, amarillo o verde.");  //este mensaje se muestra si se pone un color diferente a los anteriores
}