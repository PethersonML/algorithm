// let numbers = [6, 1, 7, 8, 9, 3, 5, 4, 2];
// let numbers = [8, 1, 4, 5, 3, 6, 2, 9, 7];
// let numbers = [115, 7, 33, 18, 51, 93, 45, 200, 1];
let numbers = [115, 7, 33, 18, 51, 93, 45, 200, 1, 373, 24, 82, 67, 77, 5];

let minorIndice = 0;
let aux = 0;

for (let i = 0; i < numbers.length; i++) {
  minorIndice = i;
  for (let j = i; j < numbers.length; j++) {
    if (numbers[j] < numbers[minorIndice]) {
      minorIndice = j;
    }
  }
  aux = numbers[i];
  numbers[i] = numbers[minorIndice];
  numbers[minorIndice] = aux;
}

console.log(numbers);

