// Manipulación Completa de un Objeto Literal y Arrays:
// Crea un objeto literal que represente un estudiante. El mismo debe tener
// las siguientes propiedades: nombre, edad y un array de notas (con 5
// notas).
// Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
// realizar las siguientes tareas:
// 1. Agregar una nueva nota al array de notas.
// 2. Eliminar la primera nota del array.
// 3. Calcular el promedio de las notas restantes.
// 4. Convertir el nombre del estudiante a mayúsculas. Para esto
// use el método “toUpperCase()”
// 5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
// las notas.

const estudiante = {
    nombre: "sara cantillo",
    edad: 20,
    notas: [8, 9, 7, 6, 10]
};

function procesarEstudiante(estudiante, nuevaNota) {
    // 1. Agregar una nueva nota al array de notas.
    estudiante.notas.push(nuevaNota);

    // 2. Eliminar la primera nota del array.
    estudiante.notas.shift();

    // 3. Calcular el promedio de las notas restantes.
    const sumaNotas = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;

    // 4. Convertir el nombre del estudiante a mayúsculas.
    const nombreMayusculas = estudiante.nombre.toUpperCase();

    // 5. Devolver un objeto con el nombre en mayúsculas y el promedio de las notas.
    return {
        nombre: nombreMayusculas,
        promedio: promedio
    };
}

console.log(procesarEstudiante(estudiante, 9));

