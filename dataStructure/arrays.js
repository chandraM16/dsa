const arr = [1, 2, 3, 4, 5, "true", true, false, null, "undefined"];
console.log(arr);

//methods
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 1]);

//push
arr.push(6);
console.log(arr);

//pop
arr.pop();
console.log(arr);

// Time complexity - Big - O
/**
 * Insertion / Deletion  in end  - O(1)
 * Insertion / Deletion  in start - O(n)
 * Access - O(1)
 * Search - O(n)
 * Push / Pop - O(1)
 * Shift / Unshift / Splice / Slice / Concat - O(n)
 * forEach / Map / Filter / Reduce - O(n)
 *
 */

// Space complexity
