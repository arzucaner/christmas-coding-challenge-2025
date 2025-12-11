// Question 
// What will be logged to the console?

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("A");

  const p = wait(0).then(() => console.log("B"));

  console.log("C");

  await p;

  console.log("D");
}

run();

console.log("E");

// Solution

// The output will be:

A
C
E
B
D

run() starts:

Logs "A"

Creates a promise p that will log "B" after a timer.

Logs "C"

await p; pauses run() until p is resolved, so control returns to the main thread.

After run() returns its (pending) promise, the next line runs:

Logs "E"

Timer finishes:

then handler runs → logs "B"

await p now resumes and the function continues:

Logs "D"