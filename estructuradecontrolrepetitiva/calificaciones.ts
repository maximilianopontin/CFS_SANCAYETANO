/* Calificaciones

Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)
*/

import * as rls from "readline-sync";

let nombreAlumno: string= rls.question ("ingrese nombre de alumno:");
let porcentajePractica:number= 0.1;
let porcentajeProblema:number= 0.5;
let porcentajeTeoria:number= 0.4;
let notaFinal:number = 0;

while (nombreAlumno !=""){
    let notaPractica:number = rls.questionInt ("ingrese nota de la parte practica:");
    let notaProblemas:number= rls.questionInt ("ingrese nota de la parte problemas:");
    let notaTeorica:number=rls.questionInt ("ingrese nota de la parte teorica:");

if ((notaPractica >10 || notaPractica <0)|| (notaProblemas >10 || notaProblemas <0)||(notaTeorica >10 || notaTeorica <0)) {
    console.log ("error al ingresar una de sus notas, ingrese un numero valido");
} else {
    notaFinal = (notaPractica * porcentajePractica ) + (notaProblemas * porcentajeProblema)+ (notaTeorica * porcentajeTeoria);
    console.log ("Su nota final es:",notaFinal );
}   nombreAlumno = rls.question ("ingrese nombre de alumno:");
}
