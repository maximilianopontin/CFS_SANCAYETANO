/*Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan
 */

import * as rls from "readline-sync"

const usuarioRegistrado:string= "Juan";
const claveRegistrada: string= "claveJuan";
let nombreUsuario:string=rls.question("ingrese nombre de usuario:");
let claveUsuario:string=rls.question("ingrese clave de usuario:");

if ((nombreUsuario==usuarioRegistrado) && (claveUsuario==claveRegistrada)) {console.log ("usted se ingreso correctamente");}
else {console.log ("usuario y/o clave incorrectos");}
