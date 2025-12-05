// Question

// What will be the output?

const nums = [1, 2, 3, 4];

const result = nums
  .map(n => (n % 2 === 0 ? n * 10 : n))
  .find(n => n > 15);

console.log(result);
console.log(nums);

Solution

20
[ 1, 2, 3, 4 ]

Explanation 

map creates a new array: odd numbers stay the same, even numbers are multiplied by 10
→ [1, 20, 3, 40]

find returns the first value greater than 15
→ 20

nums stays unchanged because map does not mutate the original array.