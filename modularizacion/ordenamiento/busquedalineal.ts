// Linear Search with a while loop
​
// function linearSearch(value: string | number, list: (number | string)[]): number {
//   let found: boolean = false;
//   let position: number = -1;
//   let index: number = 0;
//   while (!found && index < list.length) {
//     if (list[index] === value) {
//       found = true;
//       position = index;
//     } else {
//       index++;
//     }
//   }
//   return position;
// }
// console.log(linearSearch("pepe", [1, 5, "manzana", "cat", "pepe", "😎", 900]));//expected output 4
// console.log(linearSearch("pepe", [1, 5, "manzana", "cat", "😎", 900]));//expected output -1
// console.log(linearSearch("pepe", []));//expected output -1
​
​
// Linear Search with a for  loop
function linearSearch(value: string | number, list: (number | string)[]): number {
  for (let i = 0; i < list.length; i++) {
    console.count("linear search");
    if (list[i] === value) {
      return i;
    }
  }
  return -1;
}
​
