// - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores 
// antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), 
// eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

let valor1 = 5; 
let valor2 = 10;
console.log("Antes del intercambio: valor 1 era", valor1, ", y valor 2 era ", valor2); 

// Intercambio de valores usando una variable temporal

let temp = valor1;
valor1 = valor2;
valor2 = temp;
console.log("Después del intercambio: valor 1 es", valor1, ", y valor 2 es ", valor2);
