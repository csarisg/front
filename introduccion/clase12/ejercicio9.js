// //a)	Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, 
// es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan 
// siempre en posición 0. 
// b)	La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en 
// particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// c)	Por último, es necesario tener el total de gastos realizados en el mes.
// ✔	Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// ✔	Posibles matrices para comprobar los resultados.

//   	Día 1	Día 2	Día 3	Día 4	Día 5	Día 6	Día 7
// Semana 1	 1135	 2500	 900	 1600	 2800	 3650	 1100
// Semana 2	 1750	 1890	 1900	 1300	 898	 1750	 2800
// Semana 3	 1700	 1150	 1690	 1900	 1770	 4500	 2560
// Semana 4	 800	 1250	 1430	 2100	 1980	 1270	 950




const prompt = require('prompt-sync')({ sigint: true });

let gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950],
];

// a) Total de gastos en una semana especifica

let semana = prompt("Ingrese el número de la semana (1-4):");
 semana = parseInt(semana) - 1; 

  function totalGastosSemana(semana) {
     let total = 0;
     for (let i = 0; i < gastos[semana].length; i++) {
         total += gastos[semana][i];
    }
     return total;
         
}
console.log(`Total de gastos en la semana ${semana + 1}: $${totalGastosSemana(semana)}`);

// b) Total de gastos en un día específico

let dia = prompt("Ingrese el número del día (1-7): ");
 dia = parseInt(dia) - 1;
 function totalGastosDia(dia) {
    let total = 0;
    for (let j = 0; j < gastos.length; j++) {
        total += gastos[j][dia];
    }
    return total;
       
}
console.log(`Total de gastos en el día ${dia + 1}: $${totalGastosDia(dia)}`);

// c) Total de gastos en el mes

function totalGastosMes() {
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
        for (let j = 0; j < gastos[i].length; j++) {
            total += gastos[i][j];
        }
    }
    return total;
}
console.log(`Total de gastos en el mes: $${totalGastosMes()}`);

// d) Semana con más gastos y día con más gastos
  
function semanaMasGastos() {
    let maxSemana = 0;
    let maxGastos = 0;
    for (let i = 0; i < gastos.length; i++) {
        let totalSemana = totalGastosSemana(i);
        if (totalSemana > maxGastos) {
            maxGastos = totalSemana;
            maxSemana = i;
        }
    }
    return maxSemana + 1; // 
}
console.log(`La semana con más gastos es la semana ${semanaMasGastos()}`);

function diaMasGastos() {
    let maxDia = 0;
    let maxGastos = 0;
    for (let j = 0; j < gastos[0].length; j++) {
        let totalDia = totalGastosDia(j);
        if (totalDia > maxGastos) {
            maxGastos = totalDia;
            maxDia = j;
        }
    }
    return maxDia + 1; 
}
console.log(`El día con más gastos es el día ${diaMasGastos()}`);
