/* Cine
• Diseñar un algoritmo que recorra las 
butacas de una sala de cine y determine 
cuántas butacas desocupadas hay 
• Suponga que para modelar este 
problema, se utiliza un arreglo con 
valores lógicos
• La presencia de un valor verdadero (true) en 
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el 
arreglo indica que la butaca está desocupada */

import * as rls from "readline-sync";


let salaCine: boolean [] = 
    [true, false, true, false, true,
    false, true, true, false, false,
    false, false, false, true, true,
    true, true, false, true, true];

function contarButacasDes (salaCine : boolean []):number {
    let butacasDes: number= 0;
    let butacasOcupadas: number =0;
    for (let i:number=0 ; i < salaCine.length ; i++){
        if (salaCine [i] == false){ 
        butacasDes ++;}
        else {butacasOcupadas ++;
        }
        
    }
return butacasDes; 
    
}
let butacasDes = contarButacasDes (salaCine);
console.log ("la cantidad de butacas desocupadas que hay son : ", butacasDes);