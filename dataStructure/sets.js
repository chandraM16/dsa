/**
 * A set is a collection of unique elements.
 * Set don't maintain the order of elements.
 * Searching and Deleting in set is very fast as compared to arrays.
 */

const set = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]);
console.log(set);

for (const item of set) {
  console.log(item);
}

set.add(11);

console.log(set);

//has
console.log(set.has(11));
set.delete(11);
console.log(set.has(11));


//size
console.log(set.size);

//clear
set.clear();
console.log(set);
