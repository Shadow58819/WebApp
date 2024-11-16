let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function appendDecimalPoint() {
    if (display.value === '' || display.value.slice(-1).match(/[+\-*/^]/)) {
    display.value += '0.';
    } else if (!display.value.split(/[\s+\-*/^]+/).pop().includes('.')) {
    display.value += '.';
    }
}

function appendPercentage() {
    let currentValue = display.value.split(/[\s+\-*/^]+/).pop();
    if (currentValue && !isNaN(currentValue)) {
    display.value = display.value.slice(0, -currentValue.length) + (currentValue / 100);
    }
}

function appendFraction() {
    let currentValue = display.value.split(/[\s+\-*/^]+/).pop();
    if (currentValue && !isNaN(currentValue)) {
    display.value = display.value.slice(0, -currentValue.length) + (1 / currentValue);
    }
}

function toggleNegative() {
    let currentValue = display.value.split(/[\s+\-*/^()]+/).pop();
    if (currentValue && !isNaN(currentValue)) {
    let newValue = -parseFloat(currentValue);
    display.value = display.value.slice(0, -currentValue.length) + newValue;
    }
}

function calculate() {
    try {
    let result = eval(display.value.replace(/,/g, '.').replace(/%/g, '/100'));
    display.value = result;
    } catch (error) {
    display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function back() {
    window.location = "index_2.html";
}