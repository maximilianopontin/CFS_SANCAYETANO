/* Realizar un algoritmo que dado un número entero ingresado por el usuario, imprima  en pantalla si el número es par o impar.
En el caso de ingresar un cero, se debe volver a pedir el número por teclado (hasta que se ingrese un número mayor que cero).
*/

import * as rls from "readline-sync";
let Num: number = 0;
while (Num <= 0) {
  Num = rls.questionInt("ingrese un número mayor que cero: ");
}

if (Num % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
