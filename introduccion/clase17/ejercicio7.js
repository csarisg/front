// “La Floreria”
// Escribe una función "gestionarFloreria" que realice las siguientes tareas
// con una lista predefinida de nombres de flores:
// 1. Quite los espacios en blanco alrededor de cada flor.
// 2. Verifique si existe la flor "Margarita" y, si está presente, agregue
// "Azucena" al final de la lista.
// 3. Reemplace todas las flores "Orquídea" por "Clavel".
// 4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
// "Girasol" al inicio de la lista.
// Devuelva una cadena de flores en orden alfabético separadas por puntos.

let entrada = "Rosa, Tulipán, Orquídea, Lirio";

function gestionarFloreria() {
    // 1. quitar los espacios en blanco alrededor de cada flor
    let flores = entrada.trim().split(",").map(flor => flor.trim());

    // 2. Verificar si existe la flor "Margarita"
    let existeMargarita = flores.includes("Margarita");

    // Si existe, agregar "Azucena" al final de la lista
    if (existeMargarita) {
        flores.push("Azucena");
    }

    // 3. Reemplazar todas las flores "Orquídea" por "Clavel"
    flores = flores.map(flor => flor === "Orquídea" ? "Clavel" : flor);

    // 4. Encontrar el índice de la flor "Girasol"
    let indiceGirasol = flores.indexOf("Girasol");

    // Si no está presente, agregar "Girasol" al inicio de la lista
    if (indiceGirasol === -1) {
        flores.unshift("Girasol");
    }

    // Devolver una cadena de flores en orden alfabético separadas por puntos
    let floresOrdenadas = flores.sort().join(". ");

    // Mostrar resultados
    console.log("¿Existe la flor 'Margarita'?:", existeMargarita);
    console.log("Índice de la flor 'Girasol':", indiceGirasol);
    console.log("Flores en orden alfabético:", floresOrdenadas);
}

gestionarFloreria();