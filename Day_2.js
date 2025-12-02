Question

//What will be printed to the console?

const nums = [10, 20, 30, 40];

const output = nums
  .slice(1, 3)
  .splice(1, 1, 99);

console.log(output);
console.log(nums);

// Solution

[ 30 ]
[ 10, 20, 30, 40 ]

Explanation 

slice(1, 3) returns a new array: [20, 30] (original nums unchanged).

Then .splice(1, 1, 99) runs on that new array [20, 30]:

Removes 1 element at index 1 (30) and inserts 99.

splice returns the removed elements: [30].

nums stays the same: [10, 20, 30, 40].