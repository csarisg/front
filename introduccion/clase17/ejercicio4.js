// 4: Transformación y Análisis de Cadenas
// Pide al usuario que ingrese una lista de nombres separados por comas.
// Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
// “Pablo” y “Pedro”.
// Luego, escribe la función “transformarYAnalizarNombres”que realice las
// siguientes tareas:
// 1. Quite los espacios en blanco alrededor de cada nombre.
// 2. Verifique si existe el nombre "Juan".
// 3. Reemplace todos los nombres "María" por "Ana".
// 4. Encuentre el índice del nombre "Pedro".
// 5. Devuelva una cadena de nombres en orden alfabético separados
// por puntos. usa el método “.sort()

const prompt = require("prompt-sync")({ sigint: true });

function transformarYAnalizarNombres() {
    // 1. Pedir al usuario que ingrese una lista de nombres separados por comas
    let input = prompt("Ingresa una lista de nombres separados por comas: ");
    let nombres = input.split(",").map(nombre => nombre.trim());

    // 2. Verificar si existe el nombre "Juan"
    let existeJuan = nombres.includes("juan");

    // 3. Reemplazar todos los nombres "María" por "Ana"
    nombres = nombres.map(nombre => nombre === "maria" ? "ana" : nombre);

    // 4. Encontrar el índice del nombre "Pedro"
    let indicePedro = nombres.indexOf("pedro");

    // 5. Devolver una cadena de nombres en orden alfabético separados por puntos
    let nombresOrdenados = nombres.sort().join(". ");

    // Mostrar resultados
    console.log("¿Existe el nombre 'juan'?:", existeJuan);
    console.log("Índice del nombre 'pedro':", indicePedro);
    console.log("Nombres en orden alfabético:", nombresOrdenados);
}

transformarYAnalizarNombres();
