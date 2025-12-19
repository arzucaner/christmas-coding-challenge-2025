// Question (Function.prototype.bind & this)

// What will be logged to the console?

function greet() {
  return `Hi ${this.name}`;
}

const user = { name: "Ada" };

const bound1 = greet.bind(user);
const bound2 = bound1.bind({ name: "Grace" });

console.log(greet.call({ name: "Linus" }));
console.log(bound1());
console.log(bound2());

// solution

// The output will be:

Hi Linus
Hi Ada
Hi Ada

// Explanation 

greet.call({ name: "Linus" })
→ this is { name: "Linus" } → "Hi Linus"

bound1 = greet.bind(user)
→ this is permanently bound to { name: "Ada" }
→ bound1() → "Hi Ada"

bound2 = bound1.bind({ name: "Grace" })
→ Binding again does not change the this of an already bound function.
→ this is still { name: "Ada" }
→ bound2() → "Hi Ada"