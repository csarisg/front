// Encuentra la película más corta y analiza los títulos largos
// Supón que tienes una lista de películas con su duración en minutos:
// const movies = [
// { title: 'El Señor de los Anillos', duration: 200 },
// { title: 'Inception', duration: 148 },
// { title: 'Matrix', duration: 136 },
// { title: 'Toy Story', duration: 81 },
// { title: 'Coco', duration: 105 }
// ];
// Queremos:
// o Encontrar la película más corta en duración.
// o De las películas restantes, quedarnos con aquellas cuyo título tenga
// más de 10 caracteres.
// o Crear una lista de los títulos largos en minúsculas.
// o Imprime en la consola:
// o El título de la película más corta.
// o La lista de títulos largos en minúsculas.

const movies = [
    { title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
];

// Encontrar la película más corta
const peliculaMasCorta = movies.reduce((acumulador, pelicula) => {
    return (pelicula.duration < acumulador.duration) ? pelicula : acumulador;
});

// Filtrar películas restantes con títulos de más de 10 caracteres
const peliculasConTituloLargo = movies.filter(pelicula => pelicula.title.length > 10);

// Crear una lista de títulos largos en minúsculas
const titulosLargosMinusculas = peliculasConTituloLargo.map(pelicula => pelicula.title.toLowerCase());

// Imprimir en la consola
console.log(`Título de la película más corta: ${peliculaMasCorta.title}`);
console.log(`Lista de títulos largos en minúsculas: ${titulosLargosMinusculas.join(', ')}`);
