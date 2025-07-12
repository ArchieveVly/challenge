// Question:
// Write a function that takes a nested array of numbers of arbitrary depth and returns the sum of all numbers (without using flat or flatMap).

function sumNestedArray(arr) {
  let sum = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += sumNestedArray(item); // recursive call for nested array
    } else if (typeof item === 'number') {
      sum += item;
    }
  }

  return sum;
}

console.log(sumNestedArray([1, [2, [3, 4], 5], 6])); // Output: 21
console.log(sumNestedArray([[[[10]]], 20, [30, [40]]])); // Output: 100
