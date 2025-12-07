// Question 

// What will be logged to the console?

console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);

// Solution

It will log:

1
4
3
2

Explanation (quick)

1 and 4 run immediately (synchronous).

Promise.then callbacks run in the microtask queue, which runs before timers.

setTimeout(..., 0) goes to the macrotask (timer) queue, so it runs after microtasks.