
var colors = ["blue", "white", "black"];
console.log("Initial colors:", colors);

var addToStart = prompt("Enter color to add at beginning:");
colors.unshift(addToStart);
console.log("After adding to start:", colors);

var addToEnd = prompt("Enter color to add at end:");
colors.push(addToEnd);
console.log("After adding to end:", colors);

colors.unshift("purple", "cyan");
console.log("After adding two colors to start:", colors);

colors.shift();
console.log("After deleting first color:", colors);

colors.pop();
console.log("After deleting last color:", colors);

var insertIndex = +prompt("Enter index to add color:");
var insertColor = prompt("Enter color name:");
colors.splice(insertIndex, 0, insertColor);
console.log("After inserting at index:", colors);

var devareIndex = +prompt("Enter index to delete color:");
var devareCount = +prompt("How many colors to delete?");
colors.splice(devareIndex, devareCount);
console.log("After deleting color(s):", colors);
