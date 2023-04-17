/* realice un programa que devuelva el area del triangulo usando los siguientes pares de base-altura:
1,2 2,4 3,6  4,8 5,10 6,12 7,14. implemente un metodo llamado calcularareatriangulo que reciba 
dos numeros por parametro uno llamado base y otro altura 

LAS VARIABLES CONVIENE DECLARARLAS DENTRO DE LA FUNCION */


import * as rls from "readline-sync";

function calcularAreaTriangulo (base:number, altura: number): number {
    let area:number = (base * altura)/ 2
  return area;

} {let area = calcularAreaTriangulo (rls.questionInt (" ingrese la base del triangulo: "),rls.questionInt ("ingrese la altura del triangulo: "));
console.log ("el area del triangulo es: ", area);}


/* opcion 2 para resolverlo, estableciendo los parametros, pero usando mas lineas de codigo:

let area:number=1 ;
function calcularAreaTriangulo (base:number, altura: number): number {
    area = (base * altura)/ 2
  return area;

} {let area = calcularAreaTriangulo (1, 2);
console.log ("el area del triangulo es: ", area);
area = calcularAreaTriangulo (2,4);
console.log ("el area del triangulo es: ", area);
area = calcularAreaTriangulo (3,6);
console.log ("el area del triangulo es: ", area);
area = calcularAreaTriangulo (4,8);
console.log ("el area del triangulo es: ", area);
area = calcularAreaTriangulo (5,10);
console.log ("el area del triangulo es: ", area);
area = calcularAreaTriangulo (6,12);
console.log ("el area del triangulo es: ", area);
area = calcularAreaTriangulo (7,14);
console.log ("el area del triangulo es: ", area);}*/
