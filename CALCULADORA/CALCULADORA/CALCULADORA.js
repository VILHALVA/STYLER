let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calculateSquareRoot() {
    let inputValue = parseFloat(document.getElementById('result').value);
    
    if (!isNaN(inputValue)) {
        inputValue = Math.sqrt(inputValue);
        document.getElementById('result').value = inputValue;
    } 
    else {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}
