

var palindromeInput = prompt("Enter a word:");
var reversed = palindromeInput.split('').reverse().join('');

var result;
if (palindromeInput === reversed) {
  result = "Palindrome";
} else {
  result = "Not a palindrome";
}

console.log(result);
