// Lugar y números
// Dada la lista
// Utilizar el algoritmo de búsqueda binaria para responder los items
// o ¿Cuál es la posición del número 1?
// o ¿Cuál es la posición del número 5?
// o ¿Cuál es la posición del número 6?
// o ¿Cuál es la posición del número 9?
// o ¿Cuál es la posición del número 11?
// Sabemos que responder estas preguntas es extremadamente fácil, ya
// que podemos leer el array, y determinar con un cálculo visual la posición
// de cada elemento, pero, la propuesta que les hago es que codeen un
// algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
// 6, y nos indique por consola la posición del mismo.
// El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir
// complejidad extra.

const promt = require('prompt-sync')({ sigint: true });

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function busquedaBinaria(lista, numero) {
    let inicio = 0;
    let fin = lista.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        
        if (lista[medio] === numero) {
            return medio; // Retorna la posición del número encontrado
        } else if (lista[medio] < numero) {
            inicio = medio + 1; // Busca en la mitad derecha
        } else {
            fin = medio - 1; // Busca en la mitad izquierda
        }
    }
    
    return -1; // Retorna -1 si el número no se encuentra
}

function buscarNumero() {
    let numero = parseInt(promt("Ingrese un número a buscar en la lista: "));
    let posicion = busquedaBinaria(lista, numero);
    
    if (posicion !== -1) {
        console.log(`El número ${numero} se encuentra en la posición: ${posicion}`);
    } else {
        console.log(`El número ${numero} no se encuentra en la lista.`);
    }
}

buscarNumero();
