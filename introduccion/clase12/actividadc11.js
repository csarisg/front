

//ejerercicio en clase 12:

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
let cierto = false;

for (let i = 0; i < 3; i++) {
    let adivinanza = parseInt(prompt("intento " + (i + 1) + ": adivina el número entre 1 y 10:  "));
    switch (true) {
        case adivinanza === numeroSecreto:
          console.log("¡Felicidades! Adivinaste el número secreto: " + numeroSecreto);
          cierto = true;
          break;
        case adivinanza < numeroSecreto:
          console.log("El número secreto es mayor");
          break;
        case adivinanza > numeroSecreto:
          console.log("El número secreto es menor");
          break;}



if (cierto ? true : false) break; 
    }
    

if (i === 2) {
        console.log("Lo siento, no adivinaste el número. El número secreto era: " )
    };



