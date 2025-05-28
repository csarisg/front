const prompt = require("prompt-sync")({ sigint: true });

let a= parseFloat(prompt("ingrese la primera longitud de su triangulo: "));
let b= parseFloat(prompt("ingrese la segunda longitud: "));
let c= parseFloat(prompt("ingrese la ultima longitud: "));

if (a + b > c && a + c > b && b + c + a) 
if (a === b && b === c){console.log("su triangulo es equilatero")
} else if (a === b || a === c || b === c){console.log("su triangulo es isoceles")
} else {console.log("su triangulo es escaleno")
} 
else {console.log("los lados ingresados no forman un triangulo valido")}



