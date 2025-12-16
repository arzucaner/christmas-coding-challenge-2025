// Question (Type Coercion & Object to Primitive)

// What will be logged to the console?

console.log(0 == "0");
console.log(0 === "0");

const obj = {
  valueOf() {
    return 1;
  },
  toString() {
    return "2";
  }
};

console.log(obj + 1);
console.log(obj == 1);
console.log(obj == "2");

// Solution

// It will log:

true
false
2
true
false

//Explanation 

0 == "0"

== does type coercion: "0" → number 0 → 0 == 0 → true

0 === "0"

=== checks type + value, no coercion → number vs string → false

obj + 1

For + with an object, JavaScript converts obj to a primitive.

It calls valueOf() first → returns 1 (a number).

So 1 + 1 → 2

obj == 1

== converts obj to a primitive (again valueOf() → 1).

1 == 1 → true

obj == "2"

obj → 1 (via valueOf() again).

"2" is a string; for ==, both sides become numbers: 1 vs 2.

1 == 2 → false.