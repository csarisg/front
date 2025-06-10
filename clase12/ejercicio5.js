// Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario
// ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les 
// facilita su desarrollo)


const prompt = require("prompt-sync")();

const nombres = []; 

for (let i = 0; i < 5; i++) {
    const nombre = prompt(`Ingrese el nombre ${i + 1}: `);
    nombres.push(nombre); 
}

const buscar = prompt("Ingrese un nombre para buscar: ");

if (nombres.includes(buscar)) {
    console.log(`El nombre "${buscar}" se encuentra en el array.`);
}
else {
    console.log(`El nombre "${buscar}" no se encuentra en el array.`);
}

