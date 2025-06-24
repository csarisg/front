// 6: Agrega un prefijo y un sufijo a cada palabra
// Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript'].
// Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un
// sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".

const palabras = ['hola', 'mundo', 'javascript'];
const palabrasTransformadas = palabras.map(palabra => `¡${palabra}!`);

console.log(palabrasTransformadas);