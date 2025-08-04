// Análisis y Modificación de Cadenas de Texto:
// Pide al usuario que ingrese una oración. Luego, escribe la función
// “procesarOracion” que haga lo siguiente:
// 1. Quite los espacios en blanco al principio y al final.
// 2. Divida la oración en palabras.
// 3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar
// “/a/g” que indica que se debe buscar todas las apariciones del
// carácter 'a' en la cadena (la bandera g es para global, lo que
// significa que reemplazará todas las apariciones, no solo la primera).
// 4. Encuentre la posición de la primera aparición de la palabra
// "javascript". De no aparecer retornar -1
// 5. Convierta la oración a una cadena de palabras separadas por
// guiones.

const prompt = require("prompt-sync")({ sigint: true });

function procesarOracion(oracion) {
    // 1. Quitar espacios al principio y al final
    oracion = oracion.trim();

    // 2. Dividir en palabras
    let palabras = oracion.split(" ");

    // 3. Reemplazar todas las 'a' por '@'
    let oracionReemplazada = oracion.replace(/a/g, "@");

    // 4. Encontrar la posición de la palabra "javascript" 
    let posicion = oracion.toLowerCase().indexOf("javascript");

    // 5. separar por guiones
    let conGuiones = palabras.join("-");

    // Mostrar resultados 
    console.log("Oración original:", oracion);
    console.log("Oración con 'a' reemplazadas:", oracionReemplazada);
    console.log("Posición de 'javascript':", posicion);
    console.log("Oración separada por guiones:", conGuiones);
}

// Ejemplo de uso
let oracionUsuario = prompt("Ingresa una oración:");
procesarOracion(oracionUsuario);



