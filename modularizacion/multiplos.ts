/* cree un metodo esmultiplo con 2 parametros que devuelva el valor logico v o f segun si el primer numero que se indique como parametro esmultiplo del segundo.
recuerde que un numero es multiplo de otro si al dividirlo su resto es 0
recuerde que la operacion MOD permite saber si el resto de una division es 0
*/

import * as rls from "readline-sync";

function esMultiplo (primerNum: number, segundoNum: number): boolean 
{ if ( primerNum % segundoNum == 0) {
return true} 
return false
 ; 
}
{console.log (esMultiplo (rls.questionInt ("ingrese el primer numero: "),rls.questionInt ("ingrese el segundo numero: ")) )
;
}
