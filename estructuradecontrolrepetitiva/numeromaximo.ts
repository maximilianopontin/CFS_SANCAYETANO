/* Encontrar el Número Máximo
• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo
34
Ingrese número: 9
Ingrese número: 7
Ingrese número: -1
Ingrese número: 1
Ingrese número: 0

*/

import * as rls from "readline-sync";

let num:number=rls.questionFloat ("ingrese un numero:");
let valormax:number= num;

while (num !==0){
   if (num > valormax )
  {valormax=num;}
   num=rls.questionFloat ("ingrese un numero:")
} console.log ("el numero maximo es el :", valormax);
 
/* para hallar el numero minimo deberiamos cambiar el nombre de la variable 
de valormax a valormin todas las veces que la usemos y cambiar el sigo de mayor a menor */

