/* implemente un metodo llamado cantidaddedivisores que reciba un numero entero y devuelva la cantidad de divisores
por ejemplo para el numero 16, sus divisores son 1,2,4,8,16, por lo que la respuesta deberia ser 5
reutilice el metodo esmultiplo usado en el ejercicio anterior 




Construya un algoritmo que tenga un arreglo de números y se los muestre al usuario
El arreglo debe ser llamado num 
El arreglo num debe contener los siguientes datos: 20, 14, 8, 0, 5, 19 y 24.
Mostrar los valores resultantes del arreglo
*/
import * as rls from "readline-sync";

const num: number[]= [20,14,8,0,5,19,24] 
function arregloElementos (arr: number[]): void {
for (let i: number =0; i < arr.length; i ++){
console.log (arr[i]);
}
} arregloElementos (num);