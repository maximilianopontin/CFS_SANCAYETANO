import * as rls from "readline-sync";


let nombreApellido: string = "Agustin Soria"
let inicialNombre: string = nombreApellido[0];
let inicialApellido: string = nombreApellido[8];

// console.log("nombreApellido: ", nombreApellido, "\ninicialNombre e inicialApellido", inicialNombre, inicialApellido);

// propiedad .length devuelve la cantiad de elementos que tiene ese array
// console.log("longitud del texto nombreApellido: ", nombreApellido.length);

let textoCompleto: string = "Mi nombre es Agustin Soria"
let textoBuscado: string = "Soria"

// console.log("posicion del texto encontrado: ", textoCompleto.indexOf(textoCompleto));

let textoLargo: string = "tengo que hacer y hacer y hacer y hacer muchos ejercicios, tengo mucha tarea que hacer";
let textoABuscar: string = "hacer";

// console.log("posicion del texto encontrado con indexOf: ", textoLargo.indexOf(textoABuscar));
// console.log("posicion del texto encontrado con lastIndexOf: ", textoLargo.lastIndexOf(textoABuscar));

// console.log("metodo substring: ", textoLargo.substring(10, 34)); // posicion inicial y final
// console.log("metodo substr: ", textoLargo.substr(10, 34)); // posicion inicial y cantidad de valores a avanzar

console.log("metodo toUpperCase: ", nombreApellido.toUpperCase());
console.log("metodo toLowerCase: ", nombreApellido.toLowerCase());
