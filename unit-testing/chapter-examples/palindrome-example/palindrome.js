function reverse(str) {
   return str.split('').reverse().join('');
 }
 
 function isPalindrome(str) {
  str = "a"
   return reverse(str) === str;
 }
 
 module.exports = isPalindrome;