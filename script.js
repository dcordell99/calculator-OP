let operate = {
    "add": function(a, b) { return a + b; },
    "subtract": function(a, b) { return a - b },
    "multiply": function(a, b) { return a * b },
    "divide": function(a, b) { return a / b }
}

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
    a = undefined;
    a = undefined;
});

numberBtns.forEach(number => {
    number.addEventListener('click', (e) => {
        if(display.textContent.length > 9) return;
        if(secondNumber) display.textContent = '';
        switch (e.target.getAttribute('id')) {
            case 'zero': display.textContent = display.textContent += '0'; 
            secondNumber = false;
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
        if(a) b = +e.target.textContent;
    });
});

operatorBtns.forEach(operator => {
    operator.addEventListener('click', (e) => {
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
        if(!a) {
            a = +display.textContent;
            secondNumber = true; 
        } else if (a && !b) {
            b = +display.textContent;
            display.textContent = operate[theOperator](a,b);
            b = +display.textContent;
            secondNumber = true;
        } else if(a && b && !secondNumber) {
            display.textContent = operate[theOperator](a,b);
            b = +display.textContent;
            a = b
            secondNumber = true;
        } else {
            return;
        }
        console.log(a, b, theOperator);
    });
});

equalsBtn.addEventListener('click', () => {
    if(!a) {
        return;
    } else if(a && !b || a && b) {
        display.textContent = operate[theOperator](a,b);
        a = +display.textContent;
        secondNumber = true;
    } 
    console.log(a, b, theOperator);
});
