// Calcula el total de ventas de productos seleccionados
// Supón que tienes una lista de productos con sus precios en formato de
// objeto:
// const products = [
// { name: 'Laptop', price: 1000 },
// { name: 'Mouse', price: 25 },
// { name: 'Teclado', price: 50 },
// { name: 'Monitor', price: 200 },
// { name: 'Audífonos', price: 75 }
// ];
// Queremos:
// o Seleccionar los productos cuyo precio sea mayor o igual a 50.
// o Obtener solo los nombres de esos productos.
// o Calcular el precio total sumando los precios de los productos
// seleccionados.
// o Imprime el total y los nombres de los productos seleccionados en la
// consola.

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Teclado', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Audífonos', price: 75 }
    ];

// Filtrar productos con precio mayor o igual a 50
const productosSeleccionados = products.filter(product => product.price >= 50);

// Obtener solo los nombres de los productos seleccionados
function obtenerNombres(producto) {
    return producto.name;
}

const nombresProductos = productosSeleccionados.map(obtenerNombres);

// Calcular el precio total de los productos seleccionados
const totalPrecio = productosSeleccionados.reduce((acumulador, producto) => acumulador + producto.price, 0);

// Imprimir el total y los nombres de los productos seleccionados
console.log(`Total de ventas: $${totalPrecio}`);
console.log(`Productos seleccionados: ${nombresProductos.join(', ')}`);
