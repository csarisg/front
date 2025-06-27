// Autos y más autos…
// Escribe una función "gestionarAutos" que realice las siguientes tareas con
// una lista predefinida de marcas de autos:
// 1. Quite los espacios en blanco alrededor de cada marca.
// 2. Verifique si existe la marca "Tesla".
// 3. Reemplace todas las marcas "Ford" por "BMW".
// 4. Encuentre el índice de la marca "Chevrolet".
// 5. Devuelva una cadena de marcas en orden alfabético separadas por
// puntos. Utilizar “.sort()”

let entradas = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos() {
    // 1. Dividir la cadena de entradas en un array de marcas
    let marcas = entradas.split(",").map(marca => marca.trim());

    // 2. Verificar si existe la marca "Tesla"
    let existeTesla = marcas.includes("Tesla");

    // 3. Reemplazar todas las marcas "Ford" por "BMW"
    marcas = marcas.map(marca => marca === "Ford" ? "BMW" : marca);

    // 4. Encontrar el índice de la marca "Chevrolet"
    let indiceChevrolet = marcas.indexOf("Chevrolet");

    // 5. Devolver una cadena de marcas en orden alfabético separadas por puntos
    let marcasOrdenadas = marcas.sort().join(". ");

    // Mostrar resultados
    console.log("¿Existe la marca 'Tesla'?:", existeTesla);
    console.log("Índice de la marca 'Chevrolet':", indiceChevrolet);
    console.log("Marcas en orden alfabético:", marcasOrdenadas);
}

gestionarAutos();