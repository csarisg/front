// Orden, lugar y números
// Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso,
// aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
// mismo del ejercicio anterior (buscar la posición de un número en un
// array), pero partiendo de esta otra lista de números.
// Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor
// a mayor, utilizando bubble sort. Luego, respondan las siguientes
// preguntas:
// o ¿Cuál es la posición del número 12?
// o ¿Cuál es la posición del número 5?
// o ¿Cuál es la posición del número 22?
// o ¿Cuál es la posición del número 100?

const prompt = require('prompt-sync')({ sigint: true });

let lista = [12, 3, 5, 7, 1, 22, 47, 100];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar arr[j] y arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

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
    let numero = parseInt(prompt("Ingrese un número a buscar en la lista: "));
    let posicion = busquedaBinaria(lista, numero);
    
    if (posicion !== -1) {
        console.log(`El número ${numero} se encuentra en la posición: ${posicion}`);
    } else {
        console.log(`El número ${numero} no se encuentra en la lista.`);
    }
}

lista = bubbleSort(lista);
console.log("Lista ordenada:", lista);
buscarNumero();
