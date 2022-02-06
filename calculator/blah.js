//variables
let display = document.getElementById("screen");
let keys = document.querySelectorAll("button");
let operators = document.querySelectorAll(".operator");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let log = document.getElementById("log");
let backSpace = document.getElementById("back");
let numbers = document.querySelectorAll(".input");
let firstDigit = 0;
let secondDigit = 0;
let operator;
let isEqual;
let tempDigit = 0;
let tempSecond = 0;

backSpace.onclick = backspace;
clear.onclick = clearScreen;

keys.forEach(key => key.addEventListener('click', pressKey));
//simple functions 
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const sqrt = a => Math.sqrt(a);

//operate 
const operate = function (operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "×") {
        return multiply(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "√") {
        return sqrt(a);
    } else {
        return divide(a, b);
    }
}

//Connect digit buttons to display 
function pressKey(e) {
    
    if (e.target.classList.contains("input")) {

        if (tempDigit === 0 ) {
            tempDigit = e.target.value;
        } else {
            tempDigit += e.target.value;
        }
        display.innerText = tempDigit;

        display.style.fontSize = "60px";
      

    } else if (e.target.classList.contains("second")) {

        if (tempSecond === 0) {
            tempSecond = e.target.value;
        } else {
            tempSecond += e.target.value;
        }

        display.innerText = tempSecond;
        log.innerText = tempDigit + " " + " " + operator + " " + tempSecond;
    } else if (e.target.classList.contains("operator")) {
        if (isEqual) {
            log.innerText = tempDigit;
        }
        operator = e.target.innerHTML;
        if (e.target.classList.contains("sqrt")) {
            console.log("here")
            firstNum = parseFloat(tempDigit);
            finalNum = operate(operator, firstNum, 0).toFixed(4);
            display.innerText = finalNum;
            log.innerText = operator + tempDigit + " = " + finalNum;
            tempDigit = finalNum;
            isEqual = true;
        } else {
            log.innerText += " " + operator + " ";
            operateKey(numbers, "input", "second");
        }
    }
    // } else if (e.target.classList.contains("back")){
         
    //     let newDigit = display.innerText;
    //     tempDigit = backspace(newDigit);
    //     display.innerText = tempDigit;
    //     console.log(tempDigit);
    //     // display.innerText = backspace(tempDigit);
    // } 
        else {
        isEqual = true;
        firstDigit = parseFloat(tempDigit);
        secondDigit = parseFloat(tempSecond);
        firstDigit = operate(operator, firstDigit, secondDigit);
        firstDigit = firstDigit.toFixed(4);
        display.innerText = firstDigit;
        operateKey(numbers, "second", "input");
        tempDigit = firstDigit;
        tempSecond = 0;
        log.innerText += " = " + firstDigit;
    }

}

//change classlist to differentiate between first and second input 
function operateKey(keys, firstClass, secondClass) {
    keys.forEach(function (key) {
        key.classList.remove(firstClass);
        key.classList.add(secondClass);
    })
}

function clearScreen() {
    tempDigit = 0;
    tempSecond = 0;
    firstDigit = 0;
    secondDigit = 0;
    display.innerHTML = tempDigit;
    log.innerText = "";
}

function backspace() {
    let finalNumber;
    if (number.length === 1) {
        finalNumber = "0";
    } else {
        finalNumber = number.substring(0, number.length - 1);
    }
    return finalNumber;
}







