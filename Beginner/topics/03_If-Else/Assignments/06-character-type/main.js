//  Character Type Check

var char = 'G'; // Example input
var code = char.charCodeAt(0);

if (code >= 65 && code <= 90) {
    console.log("Uppercase letter");
} else if (code >= 97 && code <= 122) {
    console.log("Lowercase letter");
} else if (code >= 48 && code <= 57) {
    console.log("Number");
} else {
    console.log("Other Character");
}