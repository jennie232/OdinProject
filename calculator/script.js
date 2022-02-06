//variables
let display = document.getElementById("screen");
let keys = document.querySelectorAll("button");
let operators = document.querySelectorAll(".operator");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let log = document.getElementById("log");
let backSpace = document.getElementById("back");
let numbers = document.querySelectorAll(".input");
let firstDigit = "";
let secondDigit = "";
let operator;
let isOperate;
let isEqual;
let isFirst = false;
let isSecond = false;
let isSqrt;



clear.onclick = clearScreen;
equal.onclick = pressEqual;
numbers.forEach(key => key.addEventListener('click', pressNum));

operators.forEach(key => key.addEventListener('click', pressOperate));

window.addEventListener('keypress', function(e){
    let key = e.key; 
    console.log(key);
    if (key === "Enter"){
        pressEqual();
    } else if (key === "+" || key === "/" || key === "*" || key === "-"){
        operator = key;
        isFirst = false;
        isSecond = true;
        log.innerText = firstDigit + " " + operator; 
    } else if(isSecond){
        isEqual = false;
        if(secondDigit.length === 0 || secondDigit ==="0"){
            secondDigit = key;
        } else {
            secondDigit += key;
        }
        display.innerText = secondDigit;
        log.innerText = firstDigit + " " + operator + " " + secondDigit;
    } else {
        isEqual = false;
        if(firstDigit.length === 0 || firstDigit ==="0"){
            firstDigit = key;
        } else {
            firstDigit += key;
        }
        display.innerText = firstDigit;
        log.innerText = firstDigit;
    }
});

function pressNum(e) {
    isEqual = false;
    if (e.target.classList.contains('input')) {
        isFirst = true;
        if (firstDigit.length === 0 || firstDigit === "0") {
            firstDigit = e.target.value;
        } else {
            firstDigit += e.target.value;
        }
        display.innerText = firstDigit;
        log.innerText = firstDigit;
    } else {
        isSecond = true;
        isFirst = false;
        if (secondDigit.length === 0 || secondDigit === "0") {
            secondDigit = e.target.value;
        } else {
            secondDigit += e.target.value;
        }
        display.innerText = secondDigit;
        log.innerText = firstDigit + " " + operator + " " + secondDigit;
    }
}

function pressOperate(e) {
    if (isEqual || isSqrt) {
        log.innerText = firstDigit;
    }
    if (isOperate && !isSqrt && secondDigit != "") {
        firstDigit = operate(operator, parseFloat(firstDigit), parseFloat(secondDigit));
        secondDigit = "";
        display.innerText = firstDigit;
        operator = e.target.innerHTML;
        isOperate = false;
    } else {
        isOperate = true;
        operator = e.target.innerHTML;
        if (operator === "√") {
            isSqrt = true;
            log.innerText = operator + " " + firstDigit + " = ";
            firstDigit = operate(operator, parseFloat(firstDigit), 0);
            num = firstDigit % 1;
            if (num.toString().length > 4) {
                firstDigit = firstDigit.toFixed(5);
            }
            display.innerText = firstDigit;
            log.innerText = firstDigit;
            isOperate = false;
        } else {
            isSqrt = false;
            log.innerText = firstDigit +  " " + operator;
            changeKey(numbers, "input", "second");
        }

    }

}

function changeKey(keys, firstClass, secondClass) {
    keys.forEach(function (key) {
        key.classList.remove(firstClass);
        key.classList.add(secondClass);
    })
}

function pressEqual() {
    isOperate = false;
    if (!isEqual) {
        firstDigit = operate(operator, parseFloat(firstDigit), parseFloat(secondDigit));
        num = firstDigit % 1;
        if (num.toString().length > 4) {
            firstDigit = firstDigit.toFixed(5);
        }
        changeKey(numbers, "second", "input");
        secondDigit = "";
        display.innerText = firstDigit;
        isEqual = true;
        log.innerText += " = ";
        isSecond = false;
        isFirst = true;
    }

}


function backspace(number) {
    let finalNumber;
    if (number.length === 1) {
        finalNumber = "0";
    } else {
        finalNumber = number.substring(0, number.length - 1);
    }
    return finalNumber;
}

function clearScreen() {
    firstDigit = "";
    secondDigit = "";
    display.innerHTML = "0";
    operator = "";
    log.innerText = "";
    isEqual = false;
    isOperate = false;
    changeKey(numbers, "second", "input");
}


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
    } else if (operator === "×" || operator === "*") {
        return multiply(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "√") {
        return sqrt(a);
    } else {
        return divide(a, b);
    }
}

function numbDelete(){
    if (isFirst) {
        firstDigit = backspace(firstDigit);
        display.innerText = firstDigit;
        log.innerText = firstDigit;
    } else {
        secondDigit = backspace(secondDigit);
        display.innerText = secondDigit;
        log.innerText = firstDigit + " " + operator + " " + secondDigit;
    }
}
backSpace.addEventListener("click", numbDelete);



