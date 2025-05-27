# Common Array Methods in JavaScript

JavaScript arrays come with a rich set of built-in methods that make it incredibly easy to manipulate, iterate, and transform data. Understanding these methods is crucial for efficient and clean JavaScript programming.

Here's a breakdown of some of the most common and useful array methods:

## 1. Adding and Removing Elements

### `push()`
* **Purpose:** Adds one or more elements to the **end** of an array.
* **Returns:** The new `length` of the array.
```javascript
let fruits = ["apple", "banana"];
fruits.push("cherry"); // fruits is now ["apple", "banana", "cherry"]
console.log(fruits.length); // Output: 3
```

### `pop()`
* **Purpose:** Removes the **last** element from an array.
* **Returns:** The `removed` element.
```JavaScript

let fruits = ["apple", "banana", "cherry"];
let lastFruit = fruits.pop(); // lastFruit is "cherry", fruits is ["apple", "banana"]
console.log(lastFruit); // Output: cherry
```
### `unshift()`
* **Purpose:** Adds one or more elements to the **beginning** of an array.
* **Returns:** The new `length` of the array.
```JavaScript

let fruits = ["banana", "cherry"];
fruits.unshift("apple"); // fruits is now ["apple", "banana", "cherry"]
console.log(fruits.length); // Output: 3
```
### `shift()`
* **Purpose:** Removes the **first** element from an array.
* **Returns:** The `removed` element.
```JavaScript

let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.shift(); // firstFruit is "apple", fruits is ["banana", "cherry"]
console.log(firstFruit); // Output: apple
```
## 2. Iteration and Transformation

### `forEach()`
* **Purpose:** Executes a provided function **once** for each array element. It does not return a new array.
* **Returns:** `undefined`.
```JavaScript

let numbers = [1, 2, 3];
numbers.forEach(function(num) {
    console.log(num * 2);
});
// Output:
// 2
// 4
// 6
```
### `map()`
* **Purpose:** Creates a **new** array populated with the results of calling a provided function on every element in the calling array.
* **Returns:** A `new` array.
```JavaScript

let numbers = [1, 2, 3];
let doubledNumbers = numbers.map(num => num * 2); // doubledNumbers is [2, 4, 6]
console.log(doubledNumbers); // Output: [2, 4, 6]
```

### `filter()`
* **Purpose:** Creates a new array with all elements that pass the **test implemented** by the provided function.
* **Returns:** A new array containing the `filtered` elements.
```JavaScript

let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0); // evenNumbers is [2, 4, 6]
console.log(evenNumbers); // Output: [2, 4, 6]
```

### `reduce() `
* **Purpose:** Executes a reducer function (that you provide) on each element of the array, resulting in a **single output** value.
* **Returns:** The `single accumulated` value.
```JavaScript

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum is 10
console.log(sum); // Output: 10
```

## 3. Searching and Testing

### `indexOf()`
* **Purpose:** Returns the first index at which a given element can be **found** in the array, or -1 if it is not present.
* **Returns:** The `index or -1`.
```JavaScript

let colors = ["red", "green", "blue", "green"];
console.log(colors.indexOf("green")); // Output: 1
console.log(colors.indexOf("yellow")); // Output: -1
```

### `includes()`
* **Purpose:** Determines whether an array includes a certain value among its **entries**, returning true or false as appropriate.
* **Returns:** A `boolean`.
```JavaScript

let colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // Output: true
console.log(colors.includes("yellow")); // Output: false
```
### `find()`
* **Purpose:** Returns the value of the first element in the **provided** array that satisfies the provided testing function. Otherwise, undefined is returned.
* **Returns:** The `first matching` element or undefined.
```JavaScript

let users = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
let bob = users.find(user => user.name === "Bob"); // bob is {id: 2, name: "Bob"}
console.log(bob); // Output: {id: 2, name: "Bob"}
```
### `findIndex()`
* **Purpose:** Returns the index of the first element in the array that satisfies the provided testing function. **Otherwise, -1** is returned.
* **Returns:** The index of the `first matching` element or `-1`.
```JavaScript

let users = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}];
let bobIndex = users.findIndex(user => user.name === "Bob"); // bobIndex is 1
console.log(bobIndex); // Output: 1
```
### `some()`
* **Purpose:** Tests whether at least one element in the array passes the test implemented by the provided function.
* **Returns:** true if at `least one` element passes, false otherwise.
```JavaScript

let numbers = [1, 2, 3, 4];
let hasEven = numbers.some(num => num % 2 === 0); // hasEven is true
let hasGreaterThanFive = numbers.some(num => num > 5); // hasGreaterThanFive is false
console.log(hasEven); // Output: true
console.log(hasGreaterThanFive); // Output: false
```
### `every()`
* **Purpose:** Tests whether all elements in the array pass the test implemented by the provided function.
* **Returns:** true if all elements `pass`, false otherwise.
```JavaScript

let numbers = [2, 4, 6];
let allEven = numbers.every(num => num % 2 === 0); // allEven is true
let mixedNumbers = [1, 2, 3];
let allEvenMixed = mixedNumbers.every(num => num % 2 === 0); // allEvenMixed is false
console.log(allEven); // Output: true
console.log(allEvenMixed); // Output: false
```
4. Other Useful Methods

### `join()`
* **Purpose:** Joins all elements of an array into a string.
* **Returns:** A `string`.
```JavaScript

let words = ["Hello", "World", "JavaScript"];
let sentence = words.join(" "); // sentence is "Hello World JavaScript"
console.log(sentence); // Output: Hello World JavaScript
```
### `slice()`
* **Purpose:** Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
* **Returns:** A `new` array.
```JavaScript

let originalArray = ["a", "b", "c", "d", "e"];
let newArray = originalArray.slice(1, 4); // newArray is ["b", "c", "d"]
console.log(newArray); // Output: ["b", "c", "d"]
console.log(originalArray); // Output: ["a", "b", "c", "d", "e"] (original unchanged)
```
### `splice()`
* **Purpose:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method modifies the original array.
* **Returns:** An array containing the `deleted` elements (if any).
```JavaScript

let fruits = ["apple", "banana", "cherry", "date"];
// Remove 2 elements starting from index 1
let removed = fruits.splice(1, 2); // removed is ["banana", "cherry"], fruits is ["apple", "date"]
console.log(fruits); // Output: ["apple", "date"]
console.log(removed); // Output: ["banana", "cherry"]

// Add elements
fruits.splice(1, 0, "grape", "kiwi"); // fruits is ["apple", "grape", "kiwi", "date"]
console.log(fruits); // Output: ["apple", "grape", "kiwi", "date"]
```
### `concat()`
* **Purpose:** Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
* **Returns:** A `new array`.
```JavaScript

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let combined = arr1.concat(arr2, arr3); // combined is [1, 2, 3, 4, 5, 6]
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```
### `sort()`
* **Purpose:** Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
* **Returns:** The `sorted array` (original array modified).
```JavaScript

let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort(); // numbers is [1, 1, 3, 4, 5, 9] (numeric sort requires a compare function)
console.log(numbers); // Output: [1, 1, 3, 4, 5, 9]

let words = ["banana", "apple", "cherry"];
words.sort(); // words is ["apple", "banana", "cherry"]
console.log(words); // Output: ["apple", "banana", "cherry"]

// For numeric sort:
let numericNumbers = [30, 1, 200, 10];
numericNumbers.sort((a, b) => a - b); // Ascending sort
console.log(numericNumbers); // Output: [1, 10, 30, 200]
```
### `reverse()`
* **Purpose:** Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
* **Returns:** The reversed array (original array modified).
```JavaScript

let numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // numbers is [5, 4, 3, 2, 1]
console.log(numbers); // Output: [5, 4, 3, 2, 1]
These methods form the backbone of array manipulation in JavaScript. Mastering them will significantly improve your ability to work with collections of data.
```
