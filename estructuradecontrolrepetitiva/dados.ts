/*
Dados
• Al tirar un dado tenemos 1/6 de
probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6
• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada
vez menor

• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato
ingresado por el usuario) */


import * as rls from "readline-sync";
let numeroDados: number = rls.questionInt ("ingrese numero de dados:");
let result:number=0
let numerador:number =1
let denominador:number =6

while (numeroDados !=0) { 
result= (numerador / denominador ) ** numeroDados;
console.log (`la probabilidad de sacar ${denominador} en los dados tirados es de: ${result} o ${numerador}/ ${denominador**numeroDados}`);
numeroDados = rls.questionInt ("ingrese numero de dados:");
} 
