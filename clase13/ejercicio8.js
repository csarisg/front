// Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
// Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba
// una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
// Fórmula:
// F = C * 9/5 + 32

const convertirCelsiusAFahrenheit = function(celsius) {
    if (typeof celsius !== 'number') {
        throw new Error('Por favor, ingresa un número válido de grados Celsius.');
    }
    return celsius * 9 / 5 + 32;
}

console.log(convertirCelsiusAFahrenheit(25)); // Imprime 77