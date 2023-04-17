/* Realice un programa que devuelva la potencia de un numero.
La base y el exponente deben ser ingresados por teclado.
Solo deben admitirse exponentes mayores o iguales a 0.
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la logica de calcular potencia usando metodos.

*/

import * as rls from "readline-sync";
let resultado: number = 1;
let base: number = rls.questionInt ("ingrese base: ");
let exponente:number = rls.questionInt ("ingrese exponente: ");

function calcularPotencia (base:number, exponente:number):number {
    resultado = (base ** exponente)
    return resultado;
}
{ if (exponente >=0) {calcularPotencia (base,exponente);
console.log ("el resultado de la potencia es: ", resultado)
} else {console.log ("error al ingresar el exponente, ingrese un numero igual o mayor a 0");

}}