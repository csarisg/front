// El deportista 
// Para este ejercicio deberán definir un objeto literal “deportista”, con los 
// siguientes atributos: nombre, energía, experiencia. 
// Ademas queremos poder pedirle al deportista que entrene. Para esto, 
// nuestro trabajo va a ser realizar una función “entrenarHoras.” 
// La función entrenarHoras tiene las siguientes tres características: 
// ✔ Recibe por parámetro la cantidad de horas. 
// ✔ Resta a su energía (this.energia) la cantidad de horas x 5. 
// ✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
// Una vez definida la función, podemos ejecutar el código y ver cómo va 
// variando la energía y experiencia del deportista por consola.

let deportista = {
  nombre: "sara",
  energia: 100,
  experiencia: 50,
  
  
  entrenarHoras: function(horas) {
    this.energia -= horas * 5;
    this.experiencia += horas * 2;
    console.log(`${this.nombre} entrenó ${horas} horas.`);
    console.log(`Energía actual: ${this.energia}`);
    console.log(`Experiencia actual: ${this.experiencia}`);
  }
};

deportista.entrenarHoras(3); 
