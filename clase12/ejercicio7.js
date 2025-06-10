// Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. Luego, 
// escribe un algoritmo para sumar todos los números en la matriz.

let matriz = [
    [0, 8, 0, 8, 0],
    [0, 8, 0, 8, 0],
    [8, 0, 0, 0, 8],
    [0, 8, 8, 8, 0],
    [0, 0, 0, 0, 0],
];

let suma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}

console.log(`La suma de todos los números en la matriz es: ${suma}`); 
