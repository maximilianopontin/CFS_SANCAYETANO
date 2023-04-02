/* Tablas de Multiplicación
• Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de 
multiplicación, el usuario también deberá ingresar dicho valor
*/

import * as rls from "readline-sync";

let num :number =rls.questionInt ("ingrese el numero de la tabla: ");
let numFinal:number =rls.questionInt ("ingrese hasta que numero desea multiplicar: ");


for (let i :number = 1; i <=numFinal; i++) {console.log (num , "x",  i , "=" ,num * i  
);}
