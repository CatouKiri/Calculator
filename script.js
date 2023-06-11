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
const secondScreen = document.querySelector(".screen-2");
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
    secondScreen.textContent += '1';
  });
two.addEventListener("click", () => {
    secondScreen.textContent += '2';
  });
three.addEventListener("click", () => {
    secondScreen.textContent += '3';
  });
four.addEventListener("click", () => {
    secondScreen.textContent += '4';
  });
five.addEventListener("click", () => {
    secondScreen.textContent += '5';
  });
six.addEventListener("click", () => {
    secondScreen.textContent += '6';
});
seven.addEventListener("click", () => {
    secondScreen.textContent += '7';
});
eight.addEventListener("click", () => {
    secondScreen.textContent += '8';
});
nine.addEventListener("click", () => {
    secondScreen.textContent += '9';
});
zero.addEventListener("click", () => {
    secondScreen.textContent += '0';
});

// store the first number that is input into the calculator when a user presses an operator
const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const firstScreen = document.querySelector(".screen-1");

// save the operator that was pressed
// store the display value
function storeValue() {
    if(firstScreen.textContent !== ''){
        secondNumber = secondScreen.textContent;
    }
    else{
        firstNumber = secondScreen.textContent;
        firstScreen.textContent = `${firstNumber}${operator}`;
        secondScreen.textContent = '';
    }
}

addition.addEventListener("click", () => {
    operator = "+";
    storeValue(operator);
});
subtraction.addEventListener("click", () => {
    operator = "-";
    storeValue(operator);
});
multiplication.addEventListener("click", () => {
    operator = "*";
    storeValue(operator);
});
division.addEventListener("click", () => {
    operator = "/";
    storeValue(operator);
});

// operate when user pressed the '=' key or when user pressed another operator