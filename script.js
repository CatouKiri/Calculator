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
function operate() {
    if(firstScreen.textContent.slice(-1) === "="){
    }
    else if(operator === "+") {
        storeSecondNumber();
        secondScreen.textContent = '';
        firstScreen.textContent = `${firstNumber}${operator}${secondNumber}=`;
        secondScreen.textContent = add(firstNumber, secondNumber);
    }
    else if(operator === "-") {
        storeSecondNumber();
        secondScreen.textContent = '';
        firstScreen.textContent = `${firstNumber}${operator}${secondNumber}=`;
        secondScreen.textContent = subtract(firstNumber, secondNumber);
    }
    else if(operator === "×") {
        storeSecondNumber();
        secondScreen.textContent = '';
        firstScreen.textContent = `${firstNumber}${operator}${secondNumber}=`;
        secondScreen.textContent = multiply(firstNumber, secondNumber);
    }
    else if(operator === "÷") {
        storeSecondNumber();
        secondScreen.textContent = '';
        firstScreen.textContent = `${firstNumber}${operator}${secondNumber}=`;
        secondScreen.textContent = divide(firstNumber, secondNumber);
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

function storeFirstNumber() {
    firstNumber = secondScreen.textContent;
    firstNumber = Number(firstNumber);
}
function storeOperator(operator) {
    operator = operator;
}
function storeSecondNumber() {
    secondNumber = secondScreen.textContent;
    secondNumber = Number(secondNumber);
}
function displayToScreen() {
    firstScreen.textContent = `${firstNumber}${operator}`;
    secondScreen.textContent = '';
}

addition.addEventListener("click", () => {
    operator = "+";
    if(firstScreen.textContent === '') {
        storeFirstNumber();
        storeOperator(operator);
        displayToScreen();
    }
    else if(firstScreen.textContent.slice(-1) === "="){
        storeFirstNumber();
        storeOperator(operator);
        displayToScreen();
    }
    else if(firstScreen.textContent.slice(-1) === operator) {
        operate();
        storeFirstNumber();
        firstScreen.textContent = `${secondScreen.textContent}${operator}`;
        secondScreen.textContent = '';
    }
    else {
        storeOperator(operator);
        displayToScreen();
    }
});
subtraction.addEventListener("click", () => {
    operator = "-";
    if(firstScreen.textContent === '') {
        storeFirstNumber();
        storeOperator(operator);
        displayToScreen();
    }
    else if(firstScreen.textContent.slice(-1) === "="){
        storeFirstNumber();
        storeOperator(operator);
        displayToScreen();
    }
    else if(firstScreen.textContent.slice(-1) === operator) {
        operate();
        storeFirstNumber();
        firstScreen.textContent = `${secondScreen.textContent}${operator}`;
        secondScreen.textContent = '';
    }
    else {
        storeOperator(operator);
        displayToScreen();
    }
});
multiplication.addEventListener("click", () => {
    operator = "×";
    if(firstScreen.textContent === '') {
        storeFirstNumber();
        storeOperator(operator);
        displayToScreen();
    }
    else if(firstScreen.textContent.slice(-1) === "="){
        storeFirstNumber();
        storeOperator(operator);
        displayToScreen();
    }
    else if(firstScreen.textContent.slice(-1) === operator) {
        operate();
        storeFirstNumber();
        firstScreen.textContent = `${secondScreen.textContent}${operator}`;
        secondScreen.textContent = '';
    }
    else {
        storeOperator(operator);
        displayToScreen();
    }
});
division.addEventListener("click", () => {
    operator = "÷";
    if(firstScreen.textContent === '') {
        storeFirstNumber();
        storeOperator(operator);
        displayToScreen();
    }
    else if(firstScreen.textContent.slice(-1) === "="){
        storeFirstNumber();
        storeOperator(operator);
        displayToScreen();
    }
    else if(firstScreen.textContent.slice(-1) === operator) {
        operate();
        storeFirstNumber();
        firstScreen.textContent = `${secondScreen.textContent}${operator}`;
        secondScreen.textContent = '';
    }
    else {
        storeOperator(operator);
        displayToScreen();
    }
});


// operate when user pressed the '=' key or when user pressed another operator
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    operate();
})

// calculate floating numbers
const dot = document.querySelector(".dot");

dot.addEventListener("click", () => {
    if(secondScreen.textContent.includes('.') != true){
        if(secondScreen.textContent === ''){
            secondScreen.textContent += '0.';
        }
        else {
            secondScreen.textContent += '.';
        }
    }
})

// remove buttons
const remove = document.querySelector(".remove");
const removeAll = document.querySelector(".removeAll");

remove.addEventListener("click", () => {
    secondScreen.textContent = secondScreen.textContent.slice(0, -1);
})
removeAll.addEventListener("click", () => {
    secondScreen.textContent = '';
    firstScreen.textContent = '';
})