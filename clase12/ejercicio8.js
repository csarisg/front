// Rojo y Verde
// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505
// Verde 505
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. 
// ¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!

//definir matriz 10x10 
let matriz =[];
let diagonalRoja = [];
let diagonalVerde = [];

for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = i * 10 + j + 1; 
        if (i === j ) {
            diagonalRoja.push(matriz[i][j]); // Agregar a la diagonal roja
        }
        if (i + j === 9) {
            diagonalVerde.push(matriz[i][j]); // Agregar a la diagonal verde
        }
    }
}



let sumaDiagonalRoja = diagonalRoja.reduce((a, b) => a + b, 0);
let sumaDiagonalVerde = diagonalVerde.reduce((a, b) => a + b, 0);
console.log("suma de la diagonal roja:", sumaDiagonalRoja);
console.log("suma de la diagonal verde:", sumaDiagonalVerde);