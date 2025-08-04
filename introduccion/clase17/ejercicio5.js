// Manipulación de Arrays y Cadenas
// A partir del siguiente array de frases, escribe la función “procesarFrases”
// que realice las siguientes tareas:
// 1. Convierta cada frase a minúsculas. use el método
// “.toLowerCase()” para este punto.
// 2. Divida cada frase en palabras.
// 3. Reemplace las palabras "malo" por "bueno".
// 4. Combine las palabras de cada frase en una nueva cadena separada
// por espacios.
// 5. Devuelva un nuevo array con las frases modificadas.

let fraces = [
    "El clima es muy malo hoy",
    "Este libro es muy malo",
    "El servicio aqui es malo",
];

function procesarFrases(frases) {
    return frases.map(frase => {
        // 1. Convertir cada frase a minúsculas
        let fraseMinuscula = frase.toLowerCase();
        
        // 2. Dividir cada frase en palabras
        let palabras = fraseMinuscula.split(" ");
        
        // 3. Reemplazar las palabras "malo" por "bueno"
        palabras = palabras.map(palabra => palabra === "malo" ? "bueno" : palabra);
        
        // 4. Combinar las palabras de cada frase en una nueva cadena separada por espacios
        return palabras.join(" ");
    });
}

let frasesModificadas = procesarFrases(fraces);
console.log(frasesModificadas);




