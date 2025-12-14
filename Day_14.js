// Question (Optional Chaining ?. & Nullish Coalescing ??)

// What will be logged to the console?

const config = {
  db: {
    host: "localhost",
    port: 5432
  }
};

const host = config.db?.host ?? "default-host";
const timeout = config.network?.timeout ?? 5000;
const retries = config.network?.retries || 3;

console.log(host, timeout, retries);

// Solution

// It will log:

localhost 5000 3

Explanation 

config.db?.host

db exists, so host is "localhost"

"localhost" ?? "default-host" → "localhost" (because it’s not null or undefined)

config.network?.timeout

network is undefined, so config.network?.timeout → undefined (no error)

undefined ?? 5000 → 5000

config.network?.retries

Again undefined

undefined || 3 → 3 (because undefined is falsy)

// The final output is:

localhost 5000 3