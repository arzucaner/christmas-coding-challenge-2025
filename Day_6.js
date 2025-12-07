// Question
// What will be printed to the console?

let count = 0;

function outer() {
  let count = 10;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const fn = outer();

console.log(fn());
console.log(fn());
console.log(count);

// Solution
11
12
0

Explanation 
outer() creates a new local count = 10 and returns inner.

fn is a closure, so it remembers outer’s count.

Each fn() increments that remembered count (11 then 12).

The global count remains 0.