// Contar hasta un número:
// Crea una función declarada llamada contarHasta que reciba un número y
// use un bucle para imprimir todos los números desde 1 hasta ese número.

function contarHasta(numero) {
    if (typeof numero !== 'number' || numero <= 0) {
        throw new Error('Por favor, ingresa un número válido mayor que 0.');
    }
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

contarHasta(5); 