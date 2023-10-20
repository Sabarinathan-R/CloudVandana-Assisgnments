function clearDisplay() {
    calculator.answer.value = '';
}

function appendToDisplay(value) {
    calculator.answer.value += value;
}

function calculateResult() {
    try {
        calculator.answer.value = eval(calculator.answer.value);
    } catch (error) {
        calculator.answer.value = 'Error';
    }
}
