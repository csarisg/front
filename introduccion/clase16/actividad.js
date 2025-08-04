// .map() ej:

// const prompt = require("prompt-sync")();

// let usuario = prompt("ingrase un color: ")
// let colores = ["rojo", "azul", "verde", "amarillo", "naranja"]

// let nuevoColor = colores.map(color => color + " claro");  //el map esta agregando la palabra claro a todos los colores

// nuevoColor.push(usuario);
// console.log (nuevoColor);    

// .filter() ej

// const edades = [2, 22, 13, 92]

// const mayores = edades.filter(function(edad){
//     return edad > 18;
// })

// console.log (mayores); //va a devolver todos los numero mayores a 18

// // .reduce() ej:

// const nums = [5,7,16]

// const suma = nums.reduce (function(acum,num){
//     return acum + num;
// })

// console.log(suma);         //aqui se suman todos lo elementos del array

// .forEach   ej:

// let paises = ["argentina", "cuba", "peru"]

// paises.forEach(function(pais){
//     console.log(pais)  //va a devolver los tres paises que hay en el array
// })

// .find() ej:

// let perrosEncontrados = [{
//     breed: "beagle",
//     color: "blanco", 
// },
// {
//     raza: "chihuahua",
//     color: "amarillo",
// }
// ]

// function encuentraMiPerro(perro){
//     return perro.raza === "chihuahua"  //lo que se va a buscar es la raza "chihuahua"
// }

// let miPerro = perrosEncontrados.find (perro => encuentraMiPerro) 

// console.log(miPerro)  //el find va a buscar a mi perro en perros encontrados
