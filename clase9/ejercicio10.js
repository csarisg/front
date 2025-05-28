const prompt = require("prompt-sync")({ sigint: true });

let numero= parseFloat(prompt("ingrese un numero: "));

const dia = {
1 : "lunes",
2 : "martes",
3 : "miercoles",
4 : "jueves",
5 : "viernes",
6 : "sabado",
7 : "domingo"
}


if (numero in dia){console.log("el dia de la semana es " + dia[numero])}
else {console.log("porfavor solo numeros del 1 al 7")}

