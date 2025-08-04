// 8: Busca un nombre específico
// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber
// si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.

const nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
const nombreBuscado = 'Laura';
const resultado = nombres.find(nombre => nombre === nombreBuscado);
console.log(resultado);