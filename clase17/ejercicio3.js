// Gestión Compleja de Arrays:
// A partir del siguiente array de productos, escriba la función
// ‘gestionarProductos’ que realice las siguientes tareas:
// 1. Añada un nuevo producto al array.
// 2. Elimine el último producto del array.
// 3. Encuentre el índice de un producto específico. En este punto
// pueden usar forEach o el método “findIndex()”
// 4. Verifique si existe un producto con precio mayor a 50. Para esto
// use el método “.some()
// 5. Devuelva una cadena de nombres de productos separados por
// comas.

const prompt = require("prompt-sync")({ sigint: true });

function gestionarProductos(productos) {
    // 1. Añadir un nuevo producto al array
    let nuevoProducto = prompt("Ingresa el nombre del nuevo producto: ");
    let precioNuevo = parseFloat(prompt("Ingresa el precio del nuevo producto: "));
    productos.push({ nombre: nuevoProducto, precio: precioNuevo });

    // 2. Eliminar el último producto del array
    productos.pop();

    // 3. Encontrar el índice de un producto específico
    let productoBuscado = prompt("Ingresa el nombre del producto a buscar: ");
    let indiceProducto = productos.findIndex(producto => producto.nombre.toLowerCase() === productoBuscado.toLowerCase());

    // 4. Verificar si existe un producto con precio mayor a 50
    let existeMayor50 = productos.some(producto => producto.precio > 50);

    // 5. Devolver una cadena de nombres de productos separados por comas
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");

    // Mostrar resultados
    console.log("Productos actuales:", productos);
    console.log("Índice del producto buscado:", indiceProducto);
    console.log("¿Existe un producto con precio mayor a 50?:", existeMayor50);
    console.log("Nombres de productos:", nombresProductos);
}

let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 30 },
    { nombre: "Monitor", precio: 150 },
    { nombre: "Impresora", precio: 100 }
];

gestionarProductos(productos);
