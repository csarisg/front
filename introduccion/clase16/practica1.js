// Encuentra los nombres más cortos y transforma su formato
// Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José',
// 'Pablo']. Queremos realizar varias tareas con esta lista:
// o Primero, filtra los nombres que tengan menos de 5 letras.
// o Luego, transforma los nombres resultantes para que estén en
// mayúsculas.
// o Finalmente, construye una frase que diga: "Los nombres
// seleccionados son: [nombres]", donde [nombres] sea la lista resultante
// unida por comas.
// Al final, imprime la frase en la consola.

const nombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

const nombresFiltrados = nombres.filter(nombre => nombre.length < 5);
const nombresEnMayusculas = nombresFiltrados.map(nombre => nombre.toUpperCase());
const fraseFinal = `Los nombres seleccionados son: ${nombresEnMayusculas.join(', ')}`;
console.log(fraseFinal);
