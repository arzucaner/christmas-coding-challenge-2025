// Question 
// What will be the output?

const user = {
  name: "Ada",
  greet() {
    return `Hi, ${this.name}`;
  }
};

const greetFn = user.greet;

console.log(user.greet());
console.log(greetFn());
console.log(greetFn.call(user));

// Solution

Hi, Ada
Hi, undefined
Hi, Ada

Explanation (quick)

user.greet() is called as a method, so this refers to user.

greetFn() is called as a plain function, so this.name is undefined (in strict mode this is undefined; either way this.name won’t be "Ada").

greetFn.call(user) explicitly sets this to user.