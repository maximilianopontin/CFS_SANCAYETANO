// cargue dos arreglos de dimension N numeros (la cantidad es inidicada por el usuario)
//calcule el producto escalar entre los dos arreglos 
//a.b = a1.a2 + b1.b2

import * as rls from "readline-sync";


const dimension: number = rls.questionInt (" ingrese dimension del arreglo: ");
let arr1: number [] = new Array (dimension); 
let arr2: number[] = new Array(dimension);

    
function cargarArrNum(arr: number[]): void {
  if (!arr.length) return;
  console.log('Inicia carga de arreglo');
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = rls.questionInt(`Input number in position ${i + 1}: `);
  }
  console.log('Arreglo cargado');
  console.log(arr);
} cargarArrNum (arr1)
cargarArrNum (arr2);
  
function twoArrPro(arr1: number[], arr2: number[]): number 
{
  
  let producto:number= 0;

    for (let i: number = 0; i < arr1.length; i++) {
      producto = producto + (arr1[i] * arr2[i]);
    }
    return producto;
} 
  console.log ("el producto escalar es" ,(twoArrPro(arr1, arr2)));
