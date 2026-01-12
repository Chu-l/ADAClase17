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
/*
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
*/

/*Ejercicio 6: Autos y más autos
Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida de marcas de autos:
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()”*/
/*
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(entrada) {

    // Dividir la cadena en un array y quitar espacios alrededor de cada marca. Uso map para recorrer el array de marcas y trim para borrar los espacios que me quedaron
    let marcas = entrada.split(",").map(marca => marca.trim());

    // Verificar si existe "Tesla". Esto devuelve un booleano
    let existeTesla = marcas.includes("Tesla");

    // Reemplazar todas las marcas "Ford" por "BMW"
    let marcasReemplazadas = marcas.map(marca => {
            if (marca === "Ford") {
                return "BMW"
            } else {
                return marca
            }
    })

    // Encontrar el índice de "Chevrolet"
    let indiceChevrolet = marcas.indexOf("Chevrolet"); // -1 si no aparece

    // Devolver cadena de marcas ordenadas alfabéticamente separadas por puntos
    let marcasOrdenadas = marcasReemplazadas.sort().join(".");

    //Resultados
    console.log("Existe la marca Tesla?: ", existeTesla)
    console.log("El índice de Chevrolet es ", indiceChevrolet)
    console.log("Autos finales: ", marcasOrdenadas)
};

gestionarAutos(entrada);
*/ 

/*Ejercicio 7: “La Floreria”
Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista predefinida de nombres de flores:
let entrada = "Rosa, Tulipán, Orquídea, Lirio";
1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio de la lista.
Devuelva una cadena de flores en orden alfabético separadas por puntos.*/
/*
let entrada = "Rosa, Tulipán, Orquídea, Lirio";

function gestionarFloreria(entrada) {

    // Dividir la cadena en un array y quitar espacios
    let flores = entrada.split(",").map(flor => flor.trim())

     // Verificar si existe "Margarita" y, si está, agregar "Azucena"
    if (flores.includes("Margarita")) {
        flores.push("Azucena");
    }

    // Reemplazar todas las flores "Orquídea" por "Clavel"
    let floresReemplazadas = flores.map(flor => {
            if (flor === "Orquídea") {
                return "Clavel"
            } else {
                return flor
            }
    })

    // Encontrar el índice de "Girasol", y si no está, agregarlo al inicio
    let indiceGirasol = floresReemplazadas.indexOf("Girasol");
    if (indiceGirasol === -1) {
        floresReemplazadas.unshift("Girasol");
        indiceGirasol = 0; // ahora está al inicio
    }

    // Ordenar alfabéticamente y devolver cadena separada por puntos
    let floresOrdenadas = floresReemplazadas.sort().join(".");

    //Resultado
    console.log("Lista de flores final: ", floresOrdenadas)
};

gestionarFloreria(entrada);
*/

//Ejercicios - Algoritmos de Búsqueda

/*Ejercicio 8: Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con un ejemplo simple. Quiero que se familiaricen con la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la solución.
Dada la siguiente lista:
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el array, y determinar con un cálculo visual la posición de cada elemento, pero, la propuesta que les hago es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 6, y nos indique por consola la posición del mismo.
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra.*/

/*La búsqueda binaria es un algoritmo para buscar un elemento en un array ordenado (de menor a mayor, o de mayor a menor) de manera muy eficiente. En lugar de revisar cada elemento uno por uno como hace la búsqueda lineal, la binaria divide el array a la mitad en cada paso, reduciendo rápidamente el número de comparaciones.*/
/*
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Función de búsqueda binaria
function busquedaBinaria(array, objetivo) {
    // Definir los límites iniciales de búsqueda
    let izquierda = 0; // índice del primer elemento
    let derecha = array.length - 1; // índice del último elemento

    // Mientras el rango de búsqueda siga siendo válido
    while (izquierda <= derecha) {
        // Calcular el índice del elemento del medio
        let medio = Math.floor((izquierda + derecha) / 2);

        // Comprobar si el elemento del medio es el número que buscamos
        if (array[medio] === objetivo) {
            return medio; // encontramos el número
        } else if (array[medio] < objetivo) {
            izquierda = medio + 1; // buscar en la mitad derecha, el objetivo es mayor y se descarta la izquierda
        } else {
            derecha = medio - 1; // buscar en la mitad izquierda, el objetivo es menor y se descarta la derecha
        }
    }

    return -1; // no se encontró
}

// Probar para los números pedidos
console.log("Posición del 1:", busquedaBinaria(list, 1));
console.log("Posición del 5:", busquedaBinaria(list, 5));
console.log("Posición del 6:", busquedaBinaria(list, 6));
console.log("Posición del 9:", busquedaBinaria(list, 9));
console.log("Posición del 11:", busquedaBinaria(list, 11));
*/

/*Ejercicio 9: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo mismo del ejercicio anterior (buscar la posición de un número en un array), pero partiendo de esta lista:
let list = [12, 3, 5, 7, 1, 22, 47, 100];
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100?*/

let list = [12, 3, 5, 7, 1, 22, 47, 100];

// Función Bubble Sort para ordenar de menor a mayor
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        // Cada pasada mueve el mayor al final de la lista
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Intercambiar los elementos
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Función de búsqueda binaria
function busquedaBinaria(array, objetivo) {
    let izquierda = 0;
    let derecha = array.length - 1;

    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2);

        if (array[medio] === objetivo) {
            return medio; // número encontrado
        } else if (array[medio] < objetivo) {
            izquierda = medio + 1; // buscar en la mitad derecha
        } else {
            derecha = medio - 1; // buscar en la mitad izquierda
        }
    }

    return -1; // número no encontrado
}

// Ordenar la lista primero
let listaOrdenada = bubbleSort(list.slice()); // usamos slice() para no modificar el original

console.log("Lista ordenada:", listaOrdenada);

// Probar búsqueda binaria con los números pedidos
console.log("Posición del 12:", busquedaBinaria(listaOrdenada, 12));
console.log("Posición del 5:", busquedaBinaria(listaOrdenada, 5));
console.log("Posición del 22:", busquedaBinaria(listaOrdenada, 22));
console.log("Posición del 100:", busquedaBinaria(listaOrdenada, 100));
