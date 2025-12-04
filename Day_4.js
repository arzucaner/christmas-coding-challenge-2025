// Question

// What will be printed to the console?

const arr = [1, 2, 3];

const a = arr.push(4);          // returns new length
const b = arr.unshift(0);       // returns new length
const c = arr.pop();            // returns removed element
const d = arr.shift();          // returns removed element

console.log(a, b, c, d);
console.log(arr);

// Solution

4 5 4 0
[ 1, 2, 3 ]

Explanation 

After push(4): arr becomes [1,2,3,4], a = 4

After unshift(0): arr becomes [0,1,2,3,4], b = 5

pop() removes 4, so c = 4 and arr becomes [0,1,2,3]

shift() removes 0, so d = 0 and arr becomes [1,2,3]