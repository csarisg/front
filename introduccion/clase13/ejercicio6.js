// Convertir a minutos:
// Crea una función declarada llamada convertirHorasAMinutos que reciba un
// número de horas como parámetro y devuelva el total en minutos.

function convertirHorasAMinutos(horas) {
    if (typeof horas !== 'number' || horas < 0) {
        throw new Error('Por favor, ingresa un número válido de horas.');
    }
    return horas * 60;
}

console.log(convertirHorasAMinutos(7)); 