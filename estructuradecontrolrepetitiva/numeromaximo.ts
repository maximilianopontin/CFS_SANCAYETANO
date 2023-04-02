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
let num1:number=1
let valormax=0

while (num1 !=0){
    num1=rls.questionInt ("ingrese un numero:"); 
    if (num1 > valormax && valormax !=0){num1=valormax;
    } console.log ("el numero maximo es",valormax);  
}
