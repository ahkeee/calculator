const display = document.querySelector('#inputDisplay');
let displayValue = '';
function updateDisplay(num) {
    if(displayValue.length < 9) {
    displayValue += num;
    display.textContent = displayValue;
    }
}

//limit the display value to prevent overflow

// function updateDisplay(num) {
//     if (displayValue.length < 7) {
//       displayValue += num;
//       document.getElementById('display').innerHTML = displayValue;
//     }
//   }


const one = document.querySelector('#one');
one.addEventListener('click', function() {
    updateDisplay('1');
});


const two = document.querySelector('#two');
two.addEventListener('click', function() {
    updateDisplay('2');
});

const three = document.querySelector('#three');
three.addEventListener('click', function() {
    updateDisplay('3');
});

const four = document.querySelector('#four');
four.addEventListener('click', function() {
    updateDisplay('4');
});

const five = document.querySelector('#five');
five.addEventListener('click', function() {
    updateDisplay('5');
});

const six = document.querySelector('#six');
six.addEventListener('click', function() {
    updateDisplay('6');
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', function() {
    updateDisplay('7');
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', function() {
    updateDisplay('8');
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', function() {
    updateDisplay('9');
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', function() {
    updateDisplay('0');
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    display.textContent = '';
    displayValue = '';
});

// buttons for operator 
let firstOperand = null;
let operator = null;

function setOperand(newOperand) {
    if (operator === null) {
        firstOperand = parseFloat(displayValue);
        displayValue = '';
    } else {
        operate();
        firstOperand = parseFloat(displayValue);
        displayValue = ''
    }
    operator = newOperand;
}

const division = document.querySelector('#division');
division.addEventListener('click', function() {
    setOperand('/');
});

const multiplication = document.querySelector('#multiplication');
multiplication.addEventListener('click', function() {
    setOperand('*');
});

const subtraction = document.querySelector('#subtraction');
subtraction.addEventListener('click', function() {
    setOperand('-');
});

const addition = document.querySelector('#addition');
addition.addEventListener('click', function() {
    setOperand('+');
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', function() {
    operate();
});

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }


function operate() {
    let secondOperand = parseFloat(displayValue);
    let result = 0;
    switch(operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }
    displayValue = result.toString();
    display.textContent = displayValue;
    operator = null;
}

// function operate(operator, num1, num2) {
//     if(operator === '+') {
//         return add(num1, num2);  
//     } else if(operator === '-') {
//         return subtract(num1, num2);
//     } else if(operator === '*') {
//         return multiply(num1, num2);
//     } else if(operator === '/') {
//         return divide(num1, num2);
//     } else {
//         return 'This is not an operator';
//     }
// }

// console.log(operate('+', 1, 0));
// console.log(operate('-', 3, 1));
// console.log(operate('*', 1, 3));
// console.log(operate('/', 8, 2));
// console.log('The sum of 1 + 1 is ' + add(1, 1));
// console.log('The difference of 5 - 2 is ' + subtract(5 , 2));
// console.log('The product of 2 * 2 is ' + multiply(2, 2));
// console.log('The quotient of 10 / 2 is ' + divide(10, 2));