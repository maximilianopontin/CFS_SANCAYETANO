import * as rls from "readline-sync"
const posicion:number=rls.questionInt("ingrese la posicion de llegada");
let mensaje:string=""

switch (posicion){
    case 1:mensaje="medalla de oro";break
    case 2:mensaje="medalla de plata";break
    case 3:mensaje="medalla de bronce";break
    default:mensaje="certificado de participacion";
}
console.log (mensaje);