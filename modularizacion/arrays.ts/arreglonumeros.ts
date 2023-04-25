
/*Almacene en un arreglo de dimensión N números (la
    cantidad es ingresada por el usuario).
    • Muestre cuántos números son positivos, cuántos son
    negativos y cuántos ceros hay.
    1
    Ejemplo:
    v = 0, -7, -9, 1, 0, 0
    La salida es: 1 positivos, 2 negativos y 3 */

    import * as rls from "readline-sync";

    const dimension: number = rls.questionInt (" ingrese dimension del arreglo: ");
    let arrNum: number [] = new Array (dimension); 
    let numPos:number =0, numNeg:number =0, numCero :number= 0;

    for (let i: number = 0; i < arrNum.length; i ++){
        arrNum [i]= rls.questionFloat ("ingrese un numero: ");

        if (arrNum [i]> 0){
            numPos ++;
        } else if (arrNum [i]<0) {
            numNeg ++;
        } else {numCero ++;
        } 
}
    console.log (`hay ${numPos} numeros positivos, ${numNeg} numeros negativos, y ${numCero} numeros 0`); 
        