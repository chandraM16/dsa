/**
 * Map is a collection of key-value pairs.
 * Object are unordered where map are ordered
 * map are iterables
 * map can't contain functions
 */

const map = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);

console.log(map);

map.set(4, "d");
console.log(map);

map.has(1);
console.log(map.has(1));

map.delete(2);
console.log(map);


console.log(map.size);

for (const [key, value] of map) {
  console.log(key, value);
}



map.clear();
console.log(map);
