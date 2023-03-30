import * as rls from "readline-sync";

/* Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa
*/


const claveCorrecta:string="eureka";
let intentos:number=3 


while (intentos > 0 ) { let contrasena:string=rls.question ("ingrese su contrasena por favor:");
    if (contrasena==claveCorrecta){console.log ("usted ha ingresado correctamente") 
    break;
    }  else (intentos--); console.log (" contrasena incorrecta, le quedan",intentos, "intentos");} 
    if (intentos==0){console.log("has agotado todas las oportunidades");}
    