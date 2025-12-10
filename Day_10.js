//Question 

// What will be printed?

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const dog = new Animal("Rex");

console.log(dog.speak());
console.log(dog.hasOwnProperty("speak"));
console.log("speak" in dog);

//Solution

Rex makes a sound
false
true

Explanation (quick)

speak is on Animal.prototype, not directly on dog.

So dog.hasOwnProperty("speak") is false.

But "speak" in dog is true because in checks the whole prototype chain.