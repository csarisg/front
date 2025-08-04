// Factorial de un número (Ejercicio entrevista):
// Crea una función expresada llamada calcularFactorial que reciba un número
// y devuelva su factorial.
// Fórmula del factorial:
// n! = n * (n-1) * (n-2) * ... * 1

const calcularFactorial = function(numero) {
    if (typeof numero !== 'number' || numero < 0) {
        throw new Error('Por favor, ingresa un número válido mayor o igual a 0.');
    }
    if (numero === 0 || numero === 1) {
        return 1; 
    }
    for (let i = numero - 1; i >= 1; i--) {
        numero *= i; 
    }
    return numero;
}

console.log(calcularFactorial(5)); 