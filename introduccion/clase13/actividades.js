// //funciones

// //agrupa funciones que realizan una tarea específica

// //declarada ej

// function multiplicacion(a, b) {
//     return a * b;
// }
// console.log(multiplicacion(5, 3));  // el 5 y el 3 se pueden cambiar por cualquier número

// //expresada ej

// let multiplicacion = function(a, b) {
//     return a * b;
// }
// console.log(multiplicacion(5, 3));  // el 5 y el 3 se pueden cambiar por cualquier número

// si en la expresada declaro antes la variabre "multiplicacion" no me va a funcionar
// pero en declarada no hay problema.

// scope local ej

// function correr () {              //lo que esta dentro de los corchetes es un scope local
//     return "corri mucho";
// }
// console.log(correr()); 

// // scope global ej

// let objetivo = 10

// function correr() {
//     let objeto = 5; 
//     return "corri "+ objetivo ;
// }
//                                 //lo que esta afuera y adentro de los corchetes forman un scope global
// console.log(correr()); 

// funciones flecha (se ua con operaciones sensillas) ej

// function sumar (a, b) {
//     return a + b;                             //esta es la funcion normal
// }

// let sumar = (a, b) => a + b;                  // esta es la funcion flecha y el > remplaza al function

// propiedades de objetos ej

// let cantante = {
//     nombre : "sara",
//     apellido : "cantillo",
//     edad : 22,
//     saludar : function() {           //esto es una funcion dentro de el objeto
//         return "Hola, mi nombre es " + this.nombre   //this llama a nombre
//     }
// }
// console.log(cantante.saludar()); 
