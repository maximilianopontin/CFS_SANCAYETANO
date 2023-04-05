/* Tablas de Multiplicación
• Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de 
multiplicación, el usuario también deberá ingresar dicho valor
*/

import * as rls from "readline-sync";

let num :number =rls.questionInt ("ingrese el numero de la tabla: ");
let numLimite:number =rls.questionInt ("ingrese hasta que numero desea multiplicar: ");
let result:number 

for (let i :number = 0; i <=numLimite; i++) 
{result= num * i; 
    console.log (num , "x",  i , "=" , result  
);}
