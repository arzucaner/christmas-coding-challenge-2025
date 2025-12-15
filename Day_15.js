// Question (Map & Object Keys)

// What will be logged to the console?

const key1 = {};
const key2 = {};
const map = new Map();

map.set(key1, "A");
map.set(key2, "B");
map.set({}, "C");

console.log(map.size);
console.log(map.get(key1));
console.log(map.get({}));

// Solution

// It will log:

3
A
undefined

Explanation 

key1 and key2 are two different object references, so they are treated as different keys.

map.set(key1, "A")

map.set(key2, "B")

map.set({}, "C") — this is a third, brand-new object, also a different key.

map.size is 3.

When we do map.get(key1):

It finds the entry for that exact object reference → "A".

When we do map.get({}):

This creates a new object, not the same as any previously used key.

Since that reference was never added, it returns undefined.