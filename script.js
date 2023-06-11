// create functions for the following items: add, subtract, multiply, divide
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// calculation operation will consist of a Number, operator, and another Number
// create a variable for the first Number
let firstNumber;
// create a variable for the operator
let operator;
// create a variable for the second Number
let secondNumber;

// create a function operate that takes the operator, first Number, and second number and call a function from the top
function operate(firstNumber, operator, secondNumber) {
    if(operator === "+") {
        add(firstNumber, secondNumber);
    }
    else if(operator === "-") {
        subtract(firstNumber, secondNumber);
    }
    else if(operator === "*") {
        multiply(firstNumber, secondNumber);
    }
    else if(operator === "/") {
        divide(firstNumber, secondNumber);
    }
}

// create a function that will populate the display when you click the numbers button
const firstScreen = document.querySelector(".screen-1");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

// display the value
one.addEventListener("click", () => {
    firstScreen.textContent += '1';
  });
two.addEventListener("click", () => {
    firstScreen.textContent += '2';
  });
three.addEventListener("click", () => {
      firstScreen.textContent += '3';
  });
four.addEventListener("click", () => {
      firstScreen.textContent += '4';
  });
five.addEventListener("click", () => {
    firstScreen.textContent += '5';
  });
six.addEventListener("click", () => {
    firstScreen.textContent += '6';
});
seven.addEventListener("click", () => {
    firstScreen.textContent += '7';
});
eight.addEventListener("click", () => {
    firstScreen.textContent += '8';
});
nine.addEventListener("click", () => {
    firstScreen.textContent += '9';
});
zero.addEventListener("click", () => {
    firstScreen.textContent += '0';
});

// store the display value
// store the first number that is input into the calculator when a user presses an operator
// save the operator that was pressed
// operate when user pressed the '=' key or when user pressed another operator