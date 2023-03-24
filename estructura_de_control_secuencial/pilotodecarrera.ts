/* en una prueba un piloto tiene que completar 4 vueltas
*se necesita un programa quew permita ingresar por teclado el tiempo de cada vuelta
*el programa debe retornar el tiempo total y promedio de vuelta
*/
import * as rls from "readline-sync"

const lap1:number=rls.questionFloat("ingrese el tiempo de la primera vuelta");
const lap2:number=rls.questionFloat("ingrese el tiempo de la segunda vuelta");
const lap3:number=rls.questionFloat("ingrese el tiempo de la tercer vuelta");
const lap4:number=rls.questionFloat("ingrese el tiempo de la cuarta vuelta");
const totalTime:number=lap1+lap2+lap3+lap4;
const media:number=totalTime/4;
console.log("el tiempo total es de", totalTime)
console.log("el tiempo promedio de vuelta es de",media)



