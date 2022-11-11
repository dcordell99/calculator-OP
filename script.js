let operate = {
    "add": function(a, b) { return a + b; },
    "subtract": function(a, b) { return a - b },
    "multiply": function(a, b) { return a * b },
    "divide": function(a, b) { return a / b }
}



// const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// const operate = (operator, a, b) => operator(a, b);

let display = document.querySelector('.display');
let numberBtns = document.querySelectorAll('.button-number');
let operatorBtns = document.querySelectorAll('.buttons-operators');
let equalsBtn = document.querySelector('.button-equals');
let power = document.querySelector('.button-power');

let secondNumber = false;

let a;
let b;
let theOperator; 

power.addEventListener('click', function() {
    display.textContent = '';
});

numberBtns.forEach(number => {
    number.addEventListener('click', (e) => {
        if(display.textContent.length > 9) return;
        if(secondNumber) display.textContent = '';
        switch (e.target.getAttribute('id')) {
            case 'zero': display.textContent = display.textContent += '0'; secondNumber = false;
            break;
            case 'one': display.textContent = display.textContent += '1';
            secondNumber = false;
            break;
            case 'two': display.textContent = display.textContent += '2';
            secondNumber = false;
            break;
            case 'three': display.textContent = display.textContent += '3';
            secondNumber = false;
            break;
            case 'four': display.textContent = display.textContent += '4';
            secondNumber = false;
            break;
            case 'five': display.textContent = display.textContent += '5';
            secondNumber = false;
            break;
            case 'six': display.textContent = display.textContent += '6';
            secondNumber = false;
            break;
            case 'seven': display.textContent = display.textContent += '7';
            secondNumber = false;
            break;
            case 'eight': display.textContent = display.textContent += '8';
            secondNumber = false;
            break;
            case 'nine': display.textContent = display.textContent += '9';
            secondNumber = false;
            break;
        }
    });
});

operatorBtns.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if(display.textContent.length > 0) {
            a = +display.textContent;
            switch (e.target.getAttribute('id')) {
                case 'add': theOperator = 'add';
                break;
                case 'subtract': theOperator = 'subtract';
                break;
                case 'multiply': theOperator = 'multiply';
                break;
                case 'divide': theOperator = 'divide';
                break;
            }
            secondNumber = true;
        } else {
            return;
        }
        console.log(a, theOperator);
    });
});

equalsBtn.addEventListener('click', () => {
    if(display.textContent.length > 0) {
        b = +display.textContent;
        display.textContent = operate[theOperator](a,b);
    }
});
