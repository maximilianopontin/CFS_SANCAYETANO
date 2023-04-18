
/* implemente un metodo llamado cantidaddedivisores que reciba un numero entero y devuelva la cantidad de divisores
por ejemplo para el numero 16, sus divisores son 1,2,4,8,16, por lo que la respuesta deberia ser 5
reutilice el metodo esmultiplo usado en el ejercicio anterior 
*/
import * as rls from "readline-sync";



function esMultiplo (primerNum: number, segundoNum: number): boolean {
    if ( primerNum % segundoNum == 0) {
       return true} 
       return false;
}

function cantidadDeDivisores (numero:number): number {
   let cantidad: number=0;
       for (let multiplos:number =0; multiplos <= numero; multiplos ++) {
           if (esMultiplo (numero, multiplos)){ 
               cantidad= cantidad +1;
           }  
       }    
    return cantidad;
   
} console.log (cantidadDeDivisores (rls.questionInt ("ingrese un numero entero: ")));


