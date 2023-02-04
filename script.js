
const display = document.querySelector('#inputDisplay');

const one = document.querySelector('#one');
one.addEventListener('click', function() {
    display.textContent = '1'; 
});

const two = document.querySelector('#two');
two.addEventListener('click', function() {
    display.textContent = '2';
});

const three = document.querySelector('#three');
three.addEventListener('click', function() {
    display.textContent = '3';
});

const four = document.querySelector('#four');
four.addEventListener('click', function() {
    display.textContent = '4';
});

const five = document.querySelector('#five');
five.addEventListener('click', function() {
    display.textContent = '5';
});

const six = document.querySelector('#six');
six.addEventListener('click', function() {
    display.textContent = '6';
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', function() {
    display.textContent = '7';
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', function() {
    display.textContent = '8';
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', function() {
    display.textContent = '9';
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', function() {
    display.textContent = '0';
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    display.textContent = '';
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if(operator === '+') {
        return add(num1, num2);  
    } else if(operator === '-') {
        return subtract(num1, num2);
    } else if(operator === '*') {
        return multiply(num1, num2);
    } else if(operator === '/') {
        return divide(num1, num2);
    } else {
        return 'This is not an operator';
    }
}

// console.log(operate('+', 1, 0));
// console.log(operate('-', 3, 1));
// console.log(operate('*', 1, 3));
// console.log(operate('/', 8, 2));
// console.log('The sum of 1 + 1 is ' + add(1, 1));
// console.log('The difference of 5 - 2 is ' + subtract(5 , 2));
// console.log('The product of 2 * 2 is ' + multiply(2, 2));
// console.log('The quotient of 10 / 2 is ' + divide(10, 2));