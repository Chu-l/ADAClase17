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


/**/

/**/

/**/

/**/

/**/

/**/

/**/

/**/