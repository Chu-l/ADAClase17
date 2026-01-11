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

/**/

/**/

/**/

/**/

/**/

/**/

/**/