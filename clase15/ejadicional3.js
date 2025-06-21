// Simulador de una cola de atención al cliente 
// Simula una cola de atención al cliente donde los clientes llegan y son 
// atendidos uno por uno. Tienes una lista inicial de clientes en espera y un 
// bucle que los atiende de a uno. Realiza lo siguiente: 
// 1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por 
// consola. 
// 2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un 
// mensaje especial. 
// 3. Al final, muestra cuántos clientes fueron atendidos en total. 
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].


let cola = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

let atendidos = 0;

while (cola.length > 0) {
  let cliente = cola.shift(); // Atendemos al primero

  if (cliente === "VIP") {
    console.log("🔔 Atendiendo con prioridad al cliente VIP!");
  } else {
    console.log("Atendiendo al cliente:", cliente);
  }

  atendidos++; // Aumentamos el contador
}

console.log("Total de clientes atendidos:", atendidos);

