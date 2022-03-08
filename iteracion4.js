/* **Iteración #4: Métodos findArrayIndex**

Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

Sugerencia de función:
 */
let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    if(!Array.isArray(array)) return "El argumento 1 no es un array";
    return array.indexOf(text);
}

findArrayIndex(array,'Caracol')
findArrayIndex(array,'Mosquito')
findArrayIndex(array,'Salamandra')
findArrayIndex(array,'Ajolote')