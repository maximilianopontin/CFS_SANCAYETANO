/*Promedio Escolar
• Desarrolle un algoritmo que 
permita cargar alumnos y sus 
notas en los tres trimestres
• Se debe permitir obtener el 
promedio anual (es decir, de sus 
tres notas) de un alumno 
(ingresado por el usuario)
• Luego de resolverlo, pensar en 
aprovechar métodos y discutir 
cómo representar la información */

import * as rls from "readline-sync";

const nombresAlumnos: string []= [];
const notasAlumnos: number [][]=[];

function cargarAlumnos(): void {
    const nombreAlumno = rls.question ("ingrese nombre de alumno: ");

    if (nombreAlumno === ""){
        console.log ("el nombre del alumno no puede estar vacio");
        return;
    }

    const notas: number []= [];
    for (let i:number = 1; i <=3; i++){
         const notasTri:number= rls.questionInt (`ingrese nota del trimestre ${i}:` );
         notas.push (notasTri);//el push asigna la variable que esta entre parentesis dentro del arreglo nombrado
    }

nombresAlumnos.push (nombreAlumno);
notasAlumnos.push (notas);
console.log ("alumno cargado");
    
    if (rls.question ("quiere cargar otro alumno: ")== "Y"){
        cargarAlumnos() ;
    } else {return};
    
}
   
function promedioAnual(nombreAlumno:string ): number {
    const j: number = nombresAlumnos.indexOf (nombreAlumno);
    const notas: number [] = notasAlumnos [j];
    const promedio : number = (notas [0] + notas [1] +notas [2])/ 3;
    return promedio;
}

cargarAlumnos ();
const nombreAlumno : string =rls.question ("ingrese nombre de alumno para ver su promedio: ");
const promedio: number = promedioAnual (nombreAlumno);
console.log (`el promedio anual de ${nombreAlumno} es de: ${promedio}`);
