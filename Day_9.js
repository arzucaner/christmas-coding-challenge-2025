// Question
//What will happen when you run this code?

console.log(a);
console.log(b);

var a = 1;
let b = 2;

// Solution

undefined

Then it will throw an error:

ReferenceError: Cannot access 'b' before initialization

Explanation (quick)

var a is hoisted and initialized to undefined, so console.log(a) works.

let b is hoisted but stays in the Temporal Dead Zone (TDZ) until its declaration line runs, so console.log(b) throws a ReferenceError