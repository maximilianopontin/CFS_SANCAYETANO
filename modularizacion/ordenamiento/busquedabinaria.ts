//Binary Search
​
function binarySearch(value: number | string, list: (number | string)[]): number {
  let first: number = 0;
  let last: number = list.length - 1;
  let middle: number;
  let position: number = -1;
  let found: boolean = false;
  while (!found && first <= last) {
    console.count("binary search");
    middle = Math.floor((first + last) / 2);
    if (list[middle] === value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
​
  return position;
}