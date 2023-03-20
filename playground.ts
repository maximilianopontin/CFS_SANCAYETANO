/* calcule el area de un rectangulo pero para cualquier base y altura
* el usuario debe ingresar la base y la altura por teclado
*el area debe guardarse en una variable
*el resultado debe ser mostrado por pantalla
*/
import * as rls from "readline-sync";
let base:number=rls.questionInt("ingrese la base:");
let altura:number=rls.questionInt("ingrese la altura:");
let area:number= base*altura;
console.log ("el area es:" , area);



