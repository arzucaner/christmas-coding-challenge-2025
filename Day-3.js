Question

// What will be the output of this code?

const items = ["a", "b", "c"];

const result = items.reduce((acc, cur, i) => {
  acc.push(cur.toUpperCase());
  if (i === 1) return acc;   // early return (still the same accumulator)
  acc.push(cur + i);
  return acc;
}, []);

console.log(result);
console.log(items);

// Solution

[ 'A', 'a0', 'B', 'C', 'c2' ]
[ 'a', 'b', 'c' ]

Explanation 

reduce builds an array (acc) starting from [].

i=0, cur="a": push "A", then push "a0" → ['A','a0']

i=1, cur="b": push "B", then returns acc immediately → ['A','a0','B']

i=2, cur="c": push "C", then push "c2" → ['A','a0','B','C','c2']

items is unchanged because we never mutate it.