















































































































































































































// 6.Identificación Avanzada de libros:
// a) Implementar una función librosConPalabrasEnTitulo() que identifique y
// muestre todos los libros cuyo título contiene más de una palabra (no títulos
// que contengan números ni otros caracteres). La función debe devolver un
// array con los títulos de esos libros y mostrarlo en la consola.
// asegurarse de que solo se filtren los datos por letras y espacios.

const libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, género: "Ficción", disponible: true },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, género: "Ficción", disponible: true },
    { id: 3, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", año: 1985, género: "Ficción", disponible: false },
    { id: 4, titulo: "La casa de los espíritus", autor: "Isabel Allende", año: 1982, género: "Ficción", disponible: true },
    { id: 5, titulo: "frankenstein", autor: "Mary Shelley", año: 1818, género: "Ficción", disponible: true },
    { id: 6, titulo: "el hueco", autor: "german castro", año: 1993, género: "Ficción", disponible: true },
    { id: 7, titulo: "el tunel", autor: "Ernesto Sabato", año: 1948, género: "Ficción", disponible: true },
    { id: 8, titulo: "las enseñanzas de don juan", autor: "Carlos Castaneda", año: 1968, género: "Ficción", disponible: true },
    { id: 9, titulo: "el principito", autor: "Antoine de Saint-Exupéry", año: 1943, género: "Ficción", disponible: true },
    { id: 10, titulo: "una realidad aparte", autor: "carlos castaneda", año: 1977, género: "Ficción", disponible: true }
];

const usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com", librosPrestados: [1, 2] },
    { id: 2, nombre: "María Gómez", email: "maria.gomez@example.com", librosPrestados: [3] },
    { id: 3, nombre: "Diana González", email: "diana.gonzalez@example.com", librosPrestados: [4, 5] },
    { id: 4, nombre: "Carlos López", email: "carlos.lopez@example.com", librosPrestados: [] },
    { id: 5, nombre: "Laura Martínez", email: "laura.martinez@example.com", librosPrestados: [6] }
];

// Función para limpiar texto
function limpiarTexto(texto) {
  return texto
    .toLowerCase()   // convierte a minúsculas
    .normalize("NFD")    // normaliza caracteres especiales
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
}

// Crear una nueva versión del array con los campos limpios
const librosLimpios = libros.map(libro => ({   //el map crea un nuevo array con los objetos modificados
  ...libro,
  titulo: limpiarTexto(libro.titulo),     // limpiar título
  autor: limpiarTexto(libro.autor),     // limpiar autor
  género: limpiarTexto(libro.género) // limpiar género
}));


function librosConPalabrasEnTitulo(libros) {
    const librosFiltrados = libros.filter(libro => {
        // Verificar si el título contiene más de una palabra y no contiene números ni caracteres especiales
        const palabras = libro.titulo.trim().split(/\s+/);   // Divide el título en palabras
        return palabras.length > 1 && /^[a-zA-Z\s]+$/.test(libro.titulo);    // Verifica que el título solo contenga letras y espacios
    });

    // Extraer los títulos de los libros filtrados
    const titulos = librosFiltrados.map(libro => libro.titulo);  // Mapea los libros filtrados para obtener solo los títulos

    // Mostrar los títulos en la consola
    console.log("Libros con más de una palabra en el título:");

    titulos.forEach(titulo => console.log(titulo));  // el foreach recorre el array de títulos y los muestra en la consola

    // Devolver el array de títulos
    return titulos;
}

// Llamar a la función y mostrar los resultados
const titulosLibros = librosConPalabrasEnTitulo(libros);

// 7. Cálculos Estadísticos
// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para
// calcular y mostrar:
// ✔ Promedio de años de publicación de los libros.
// ✔ Año de publicación más frecuente.
// ✔ Diferencia en años entre el libro más antiguo y el más nuevo.

function calcularEstadisticas(libros) {
    if (libros.length === 0) {
        console.log("No hay libros para calcular estadísticas.");
        return;   // Verifica si el array de libros está vacío
    }

    // Calcular el promedio de años de publicación
    const totalAños = libros.reduce((sum, libro) => sum + libro.año, 0); // Utiliza reduce para sumar los años de publicación
    const promedioAños = totalAños / libros.length;  //el length se refiere al número de libros en el array

    // Calcular el año de publicación más frecuente
    const añosFrecuentes = {};
    libros.forEach(libro => {    //forEach recorre cada libro en el array
        añosFrecuentes[libro.año] = (añosFrecuentes[libro.año] || 0) + 1;   // Incrementa el contador para el año de publicación
    });
    const añoMasFrecuente = Object.keys(añosFrecuentes).reduce((a, b) => añosFrecuentes[a] > añosFrecuentes[b] ? a : b); // Encuentra el año con más publicaciones

    // Calcular la diferencia entre el libro más antiguo y el más nuevo
    const añosPublicacion = libros.map(libro => libro.año);
    const añoMasAntiguo = Math.min(...añosPublicacion);  // Encuentra el año más antiguo con Math.min
    const añoMasNuevo = Math.max(...añosPublicacion);    // Encuentra el año más nuevo con Math.max
    const diferenciaAños = añoMasNuevo - añoMasAntiguo;    // Calcula la diferencia entre el año más nuevo y el más antiguo

    // Mostrar los resultados
    console.log(`Promedio de años de publicación: ${promedioAños.toFixed(2)}`);  // toFixed(2) limita el resultado a dos decimales
    console.log(`Año de publicación más frecuente: ${añoMasFrecuente}`);
    console.log(`Diferencia en años entre el libro más antiguo (${añoMasAntiguo}) y el más nuevo (${añoMasNuevo}): ${diferenciaAños} años`);
}

// Llamar a la función para calcular y mostrar las estadísticas
calcularEstadisticas(libros);

// 8.Manejo de Cadenas:
// a) Crear una función normalizarDatos() que utilice métodos de strings para:
// ✔ Convertir todos los títulos a mayúsculas.
// ✔ Eliminar espacios en blanco al inicio y final de los nombres de
// autores.
// ✔ Formatear los emails de los usuarios a minúsculas.

function normalizarDatos(libros, usuarios) {
    // Convertir todos los títulos a mayúsculas
    const librosNormalizados = libros.map(libro => ({
        ...libro,
        titulo: libro.titulo.toUpperCase()  // Convierte el título a mayúsculas
    }));

    // Eliminar espacios en blanco al inicio y final de los nombres de autores
    librosNormalizados.forEach(libro => {
        libro.autor = libro.autor.trim();  // Elimina espacios en blanco al inicio y final del nombre del autor
    });

    // Formatear los emails de los usuarios a minúsculas
    const usuariosNormalizados = usuarios.map(usuario => ({
        ...usuario,
        email: usuario.email.toLowerCase()  // Convierte el email a minúsculas
    }));

    // Mostrar los resultados normalizados
    console.log("Libros normalizados:", librosNormalizados);
    console.log("Usuarios normalizados:", usuariosNormalizados);

    return { libros: librosNormalizados, usuarios: usuariosNormalizados };  // Devuelve los datos normalizados
}

// Llamar a la función para normalizar los datos
const datosNormalizados = normalizarDatos(libros, usuarios);

// 9.Interfaz de Usuario por Consola
// a) Implementar una función menuPrincipal() que muestre un menú de
// opciones al usuario y permita interactuar con el sistema utilizando prompt().
// El menú debe incluir opciones para todas las funcionalidades anteriores y
// utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
//ueden utilizar la estructura que gusten, sin embargo les recomiendo el uso de
// switch ya que hace al codigo mas limpio y claro a la hora de escribirlo.

function menuPrincipal() {
    let opcion;
    do {                    //usamos un do-while para que el menú se muestre al menos una vez
        console.log("\n--- Menú Principal ---");
        console.log("1. Mostrar libros con más de una palabra en el título");
        console.log("2. Calcular estadísticas de los libros");
        console.log("3. Normalizar datos de libros y usuarios");
        console.log("4. Salir");

        opcion = parseInt(prompt("Seleccione una opción (1-4): "));  // Utiliza prompt para obtener la opción del usuario

        switch (opcion) {
            case "1":
                librosConPalabrasEnTitulo(librosLimpios);
                break;         //el break es necesario para salir del switch
            case "2":
                calcularEstadisticas(librosLimpios);
                break;
            case "3":
                normalizarDatos(librosLimpios, usuarios);
                break;
            case "4":
                console.log("Saliendo del menú...");
                break;
            default:
                console.log("Recuerde que deve ser del 1 al 4.");
        }
    } while (opcion !== "4");   // Repite el menú hasta que el usuario elija salir
}

// Llamar a la función para mostrar el menú principal
menuPrincipal();


