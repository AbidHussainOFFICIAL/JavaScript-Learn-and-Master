// Calculator switch

var num1 = 10;
var num2 = 5;
var operator = '*';
switch (operator) {
  case '+':
    console.log(num1 + num2);
    break;
  case '-':
    console.log(num1 - num2);
    break;
  case '*':
    console.log(num1 * num2);
    break;
  case '/':
    console.log(num1 / num2);
    break;
  case '%':
    console.log(num1 % num2);
    break;
  default:
    console.log("Invalid operator");
}
