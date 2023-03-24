/*Desarrolle un algoritmo que, dada una posición en
una carrera se determine el tipo de medalla a
entregar.
• Tenga en cuenta que para el primer puesto se
entrega medalla de oro, segundo puesto medalla
de plata y tercer puesto medalla de bronce. En
caso que quede en otra posición se entrega
certificado de participación
*/
import * as rls from "readline-sync"
const posicion:number=rls.questionInt ("ingrese posicion de llegada");
let mensaje:string="";
if (posicion <=0){console.log ("debe ser un numero entero");
}else if (posicion==1){console.log ("medalla de oro",mensaje);
}else if (posicion==2){console.log ("medalla de plata",mensaje);
}else if (posicion==3){console.log ("medalla de bronce",mensaje);
} else {console.log ("certificado de participacion",mensaje);}
