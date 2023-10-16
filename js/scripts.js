// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2
}

function multiply(number1, number2){
  return number1 * number2
}

function divide(number1, number2){
  return number1 / number2;
}

// user interface logic 
const number1 = parseInt (prompt("Enter a number:"));
const number2 = parseInt (prompt("Enter another number:"));

// window.alert("Your numbers add up to " + add(number1, number2));

// window.alert("Your numbers subtract to " + subtract(number1, number2));

// window.alert("Your numbers multiply to " + multiply(number1, number2));

// window.alert("Your numbers divide to " + divide(number1, number2));

window.alert("The addition of your numbers is " + add(number1, number2) + "." +
" The subtraction of your numbers is " + subtract(number1, number2) + "." +
" The multiplication of your numbers is " + multiply(number1, number2) + "." +
" The division of your numbers is " + divide(number1, number2) + ".")