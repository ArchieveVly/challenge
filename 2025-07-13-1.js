// Question:
// Write a function that flattens a nested array (one level deep), e.g., [1, [2, 3], 4] becomes [1, 2, 3, 4], without using Array.prototype.flat.

function flat(arr) {
   let s = []
   
   arr.forEach((val) => {
      if (Array.isArray(val)) s.push(...flat(val));
      else s.push(val);
   })
  
   return s
}

const arr = [1,2,3,[4,5],6,[7, [8, 9]]]
console.log(flat(arr)) // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
