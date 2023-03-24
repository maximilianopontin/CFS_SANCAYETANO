/*
implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto despues de aplicarle un descuento
el precio inicial del producto se ingresa por teclado
el descuento a aplicar es del 10 %. 
el precio final debe ser mostrado en pantalla
*/
import * as rls from "readline-sync"

let precioProducto:number=rls.questionFloat("ingrese el precio del producto");
let porcentajeDescuento: number= 0.1;
let descuento: number= precioProducto*porcentajeDescuento;
let precioFinal:number=precioProducto-descuento;
console.log ("el precio final es de:", precioFinal);

