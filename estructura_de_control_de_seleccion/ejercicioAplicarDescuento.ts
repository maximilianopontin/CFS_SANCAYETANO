/*Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
• Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%
*/ 
import * as rls from "readline-sync"

let precioFinal:number=0;
let precioProducto1:number=200;
let precioProducto2:number=350;
let subTotal: number= 0;
let porcentajeDescuento: number= 0
let cantidadProducto1:number=rls.questionFloat ("ingrese la cantidad de producto 1 que compro:");
let cantidadProducto2:number=rls.questionFloat("ingrese la cantidad de producto 2 que compro:");
subTotal= (cantidadProducto1*precioProducto1)+(cantidadProducto2*precioProducto2);
porcentajeDescuento= (subTotal*0.1);
precioFinal =(subTotal-porcentajeDescuento);
console.log("cantidad de producto 1:",cantidadProducto1, "|ncantidad de producto 2:", cantidadProducto2, "|subtotal:",subTotal);

if (subTotal>1000) {console.log ("usted ahorra:",porcentajeDescuento, "el precio final es de:",precioFinal);}
else { precioFinal<=subTotal; console.log ("gracias por confiar en nosotros, el precio final es de:",subTotal);}