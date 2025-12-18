// Question (Generators & yield values)

// What will be logged to the console?

function* gen() {
  console.log("A");
  const x = yield 1;
  console.log("B", x);
  const y = yield x * 2;
  console.log("C", y);
  return y * 3;
}

const it = gen();

console.log(it.next().value);
console.log(it.next(10).value);
console.log(it.next(5).value);

// Solution

//The output will be:

A
1
B 10
20
C 5
15

// Explanation 

const it = gen();

Creates the generator, nothing runs yet.

it.next().value

Enters gen, logs A.

Hits yield 1 → pauses and returns { value: 1, done: false }.

console.log(...) prints 1.

it.next(10).value

Resumes after yield 1; the yield expression’s value becomes 10, so x = 10.

Logs B 10.

Reaches yield x * 2 → yields 20, pauses.

console.log(...) prints 20.

it.next(5).value

Resumes after yield x * 2; the yield expression’s value becomes 5, so y = 5.

Logs C 5.

return y * 3 → 15, generator finishes (done: true).

console.log(...) prints 15.