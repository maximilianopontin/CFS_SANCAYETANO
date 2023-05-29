Ordenamiento:
//obtiene un entero al azar
function randomNumber(top: number): number {
  return Math.floor(Math.random() * top);
}
//llena un arreglo de números con tantos números al azar como indiquemos
function fillRandom(arr: number[], len: number, top: number): void {
  for (let i = 0; i < len; i++) {
    arr.push(randomNumber(top));
  }
}
const numbers: number[] = [];
fillRandom(numbers, 10, 1000);
//Bubble Sort
const bubbleSort = (arr: number[]): number[] => {
  let temp: number;
  //flag
  let noSwaps: boolean;
  //vamos a tener un bucle anidado con un puntero iterando de derecha a izquierda
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    //y tenemos otro bucle iterando de izq a derecha (este es el que compara los números entre sí)
    for (let j = 0; j < i; j++) {
      //comparamos los dos punteros
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
console.log(`
arreglo original
----------------
${numbers}
`);
console.log(bubbleSort(numbers));