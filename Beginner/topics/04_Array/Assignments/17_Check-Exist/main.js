


var items = ["pen", "book", "pencil", "eraser"];
var userInput = prompt("Enter item to check:");

var result;
if (items.includes(userInput)) {
  result = "Exists";
} else {
  result = "Not Found";
}

console.log(result);
