// 10: Construye una frase a partir de una lista de palabras
// Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una
// frase completa concatenando cada palabra en orden, separadas por
// espacios. Al final, deberíamos obtener el texto 'Me gusta aprender
// JavaScript'.

const palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];
const fraseCompleta = palabras.join(' ');
console.log(fraseCompleta);