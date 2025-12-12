// Question 

// What will be logged to the console?

function showConfig({ host = "localhost", port: p = 80, secure = false, ...rest }) {
  console.log(host, p, secure, rest.mode);
}

showConfig({ port: 3000, secure: true, mode: "prod" });
showConfig({ host: "api.example.com", mode: "dev" });

// Solution

The output will be:

localhost 3000 true prod
api.example.com 80 false dev

Explanation

In the first call:

host is missing → default "localhost"

port is 3000, but it’s renamed to p

secure is true

rest is { mode: "prod" }, so rest.mode is "prod"

In the second call:

host is "api.example.com"

port is missing → default 80 (so p = 80)

secure is missing → default false

rest is { mode: "dev" }, so rest.mode is "dev"