/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║                          ARRAY FLATTEN UTILITY                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Author: Dave Conco (dconco)                                                 ║
 * ║ Email: [concodave@gmail.com]                                      ║
 * ║ GitHub: [dconco]                                       ║
 * ║ Date: [2025-07-13]                                                 ║
 * ║ Version: 1.0.0                                                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 * 
 * @fileoverview A recursive array flattening utility that converts nested 
 * arrays into a single-level array while preserving element order.
 * 
 * @description
 * This function recursively traverses through nested arrays and flattens them
 * into a single-dimensional array. It handles arrays of any depth and maintains
 * the original order of elements. The function uses a depth-first approach to
 * process nested structures.
 * 
 * @function flat
 * @param {Array} arr - The input array that may contain nested arrays
 * @returns {Array} A new flattened array containing all elements from the input
 * 
 * @example
 * // Basic usage with mixed nesting levels
 * const nested = [1, 2, [3, 4], 5, [6, [7, 8]]];
 * const result = flat(nested);
 * console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
 * 
 * @example
 * // Empty arrays and single elements
 * const mixed = [1, [], [2, []], 3];
 * const result = flat(mixed);
 * console.log(result); // Output: [1, 2, 3]
 * 
 * @complexity
 * - Time Complexity: O(n) where n is the total number of elements
 * - Space Complexity: O(d) where d is the maximum depth of nesting
 * 
 * @algorithm
 * 1. Initialize an empty result array
 * 2. Iterate through each element in the input array
 * 3. If element is an array, recursively call flat() and spread the result
 * 4. If element is not an array, add it directly to the result
 * 5. Return the flattened result array
 *
 */
function flat(arr) {
   let s = []
   
   arr.forEach((val) => {
      if (Array.isArray(val)) {
         s.push(...flat(val))
      } else {
         s.push(val)
      }
   })
  
   return s
}

// Example usage and testing
const arr = [1,2,3,[4,5],6,[7, [8, 9]]]
console.log(flat(arr)) // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]