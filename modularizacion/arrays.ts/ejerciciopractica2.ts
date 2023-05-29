/* Sumar dos arreglos
Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo.
El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario.
*/


import * as rls from "readline-sync";

let arr1: number[] = new Array(6);
let arr2: number[] = new Array(6);
let arr3: number[] = new Array(6);

/*cargo arreglo 1 y 2 

for (let i: number = 0; i < arr1.length; i++) {
  console.clear();
  arr1[i] = rls.questionInt(`Arr#1 -> number in position ${i + 1}: `);
  arr2[i] = rls.questionInt(`Arr#2 -> number in position ${i + 1}: `);
} 

for (let i :number=0; i < arr3.length; i++) {
    arr3 [i] = arr1 [i]+ arr2 [i];
}
console.log (arr3);
    

/*
Almacene en un arreglo de tamaño N los números ingresados por el usuario.
La dimensión N también es ingresada por el usuario.
Muestre los números del arreglo pero del último al primero.
*/

const dim : number = rls.questionInt ("ingrese dimension del arreglo: ");
let numsArr: number [] = new Array(dim);

for (let i: number = 0; i < numsArr.length; i ++){
    numsArr [i] = rls.questionInt ("ingrese los numeros del arreglo: ");

}
for ( let i: number = numsArr.length -1; i >=0 ; i--) {
    console.log (numsArr[i] );
}