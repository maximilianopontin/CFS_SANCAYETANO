/* Simular la Espera de un Colectivo

o Cuando llegamos a la parada,
miramos si el colectivo arribó a
la parada
o Siempre tenemos que esperar
antes de que llegue
*/

import * as rls from "readline-sync";

let llegoElCole: string= rls.question ("ya llego el colectivo?:");

while (llegoElCole=="N"){console.log ("sigo esperando el colectivo");
llegoElCole ==rls.question ("ya vino el colectivo");}
console.log ("llego el colectivo");
