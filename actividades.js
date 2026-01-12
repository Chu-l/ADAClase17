const prompt = require('prompt-sync')();

/*Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.*/
/*
//Objeto
let estudiante = {
    nombre: "Lilen",
    edad: 34,
    notas: [7, 8, 6, 9, 8]
};

//Función de procesamiento
function procesarEstudiante(estudiante) {
    // 1. Agregar una nueva nota al array
    estudiante.notas.push(8);

    // 2. Eliminar la primera nota
    estudiante.notas.shift();

    // 3. Calcular el promedio
    let suma = estudiante.notas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0)
    let promedio = suma / estudiante.notas.length;

    // 4. Convertir el nombre a mayúsculas
    let nombreMayusculas = estudiante.nombre.toUpperCase();

    // 5. Devolver un nuevo objeto
    return {
        nombre: nombreMayusculas,
        promedio: promedio
    };
};

//Resultado
let resultado = procesarEstudiante(estudiante);
console.log(resultado);
*/

/*Ejercicio 2: Análisis y Modificación de Cadenas de Texto
Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente:
1. Quite los espacios en blanco al principio y al final.
2. Divida la oración en palabras.
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica que se debe buscar todas las apariciones del carácter 'a' en la cadena (la bandera g es para global, lo que significa que reemplazará todas las apariciones, no solo la primera).
4. Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1
5. Convierta la oración a una cadena de palabras separadas por guiones.*/
/*
// Pedir la oración al usuario
let oracion = prompt("Ingrese una oración: ");
// Función
function procesarOracion(texto) {
    //Sacar espacios al principio y final
    let textoLimpio = texto.trim()
    //Dividir en palabras el texto
    let palabras = textoLimpio.split(" ");
    //Reemplazar todas las 'a' por '@'
    let textoConArrobas = textoLimpio.replace(/a/g, "@");
    //Encontrar la posición de la primera aparición de "javascript"
    let posicionJS = textoLimpio.indexOf("javascript"); // -1 si no aparece
    //Convertir la oración a una cadena de palabras separadas por guiones
    let oracionConGuiones = palabras.join("-");
    //Resultados
    console.log("Oración modificada", textoConArrobas);
    console.log("Posición de la palabra 'javascript'", posicionJS);
    console.log("Oración con guiones", oracionConGuiones);
};
// Invocación
procesarOracion(oracion);
*/ 

/*Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o investigar el método “findIndex()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
4. Verifique si existe un producto con precio mayor a 50. Para esto investigar el método “.some()” https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
5. Devuelva una cadena de nombres de productos separados por comas.*/
/*
// Array de productos inicial
let arrayProductos = [
    { nombre: "Nutella", precio: 9500 },
    { nombre: "Provoleta", precio: 6000 },
    { nombre: "Café", precio: 17000 },
    { nombre: "Pan Lactal", precio: 7500 }
];
// Función
function gestionarProductos(productos) {
    // 1. Añadir un nuevo producto
    productos.push({ nombre: "Huevos", precio: 3090 });
    // 2. Eliminar el último producto
    productos.pop();
     // 3. Encontrar el índice de un producto específico
    let indiceNutella = productos.findIndex(producto => producto.nombre === "Nutella");
     // 4. Verificar si existe un producto con precio mayor a 50
    let hayProductoCaro = productos.some(producto => producto.precio > 50);
    // 5. Devolver una cadena con los nombres de productos separados por comas
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");
    //Resultados
    console.log("El índice de la nutella es ", indiceNutella);
    console.log("Precio mayor a 50 ", hayProductoCaro);
    console.log("Lista de productos: ", nombresProductos);
};
// Invocación
gestionarProductos(arrayProductos);
*/

/*Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifi que si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".*/
/*
let lista = prompt("Ingrese una lista de nombres separados por comas: ");

function transformarYAnalizarNombres(nombres) {
     // Romper la la lista en un array 
    let listaSplit = nombres.split(",");
    // Quitar espacios en cada nombre
    let listaLimpia = listaSplit.map(nombre => nombre.trim());
    // Verificar si existe "Juan"
    let existeJuan = listaLimpia.includes("Juan");
    // Reemplazar "Maria" o "María" por "Ana"
    let listaModificada = listaLimpia.map(nombre => {
        if (nombre === "Maria" || nombre === "María") {
            return "Ana";
        } else {
            return nombre;
        }
    });
    // Encontrar el índice de "Pedro"
    let indicePedro = listaModificada.indexOf("Pedro"); // -1 si no aparece
    //Ordenar
    let nombresOrdenados = listaModificada.sort().join(".")
    //Resultados
    console.log("Existe el nombre Juan?: ", existeJuan)
    console.log("El índice de Pedro es ", indicePedro)
    console.log("Nombres finales: ", nombresOrdenados)
};

transformarYAnalizarNombres(lista);
*/

/*Ejercicio 5: Manipulación de Arrays y Cadenas
A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
5. Devuelva un nuevo array con las frases modificadas.*/

let listaFrases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];

function procesarFrases(frases) {
    
    let frasesProcesadas = frases.map(frase => {
        //Convertir cada frase a minúsculas
        let fraseMin = frase.toLowerCase()
        //Dividir cada frase en palabras
        let palabras = fraseMin.split(" ")
        //Reemplazar las palabras "malo" por "bueno" (debo usar map otra vez para el recorrido del array de palabras)
        let palabrasReemplazadas = palabras.map(palabra => {
            if (palabra === "malo") {
                return "bueno"
            } else {
                return palabra
            }
        })
        //Unir nuevamente las palabras en un solo string
        return palabrasReemplazadas.join(" ")
    })
    //Devolvemos el array con las frases corregidas
    return frasesProcesadas
};

console.log(procesarFrases(listaFrases));

/**/

/**/

/**/

/**/