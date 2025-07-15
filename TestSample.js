function isPalindrome(a) {
  const cleanStr = a.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Not a palindrome")); // false
console.log(isPalindrome("Was it a car or a cat I saw?")); // true