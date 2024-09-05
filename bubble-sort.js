// let numbers = [5, 9, 3, 1, 2, 8, 4, 7, 6];
// let numbers = [8, 1, 4, 5, 3, 6, 2, 9, 7];
// let numbers = [115, 7, 33, 18, 51, 93, 45, 200, 1];
let numbers = [115, 7, 33, 18, 51, 93, 45, 200, 1, 373, 24, 82, 67, 77, 5];

for (let j = 0; j < numbers.length; j++) {
  for (let i = numbers.length - 1; i >= 0; i--) {
    const temp = numbers[i - 1];
    if (temp === undefined) {
      continue;
    }

    if (numbers[i] < temp) {
      numbers[i - 1] = numbers[i];
      numbers[i] = temp;
      continue;
    }
  }
}

console.log(numbers);
