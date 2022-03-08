/* **Iteración #6: Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

let array=['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const swap= (array, indOne, indTwo) => {
    [array[indOne], array[indTwo]] = [array[indTwo], array[indOne]];
    return array;
}

swap(array,3,1)