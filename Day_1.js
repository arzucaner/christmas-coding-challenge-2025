// Question
// Given the JavaScript code below, what will be the final value of result?
const arr = [1, 2, 3, 4, 5];

const result = arr
  .filter(n => n % 2 === 1)   // keep odd numbers
  .map(n => n * 2)            // double them
  .reduce((sum, n) => sum + n, 0); // sum them

console.log(result);

// Solution
result will be 18.

filter keeps odd numbers: [1, 3, 5]
map doubles them: [2, 6, 10]
reduce sums them: 2 + 6 + 10 = 18
