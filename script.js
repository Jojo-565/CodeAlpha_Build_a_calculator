function clearDisplay() {
    document.getElementById('display').value = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
    animateDisplay();
}

function toggleSign() {
    const display = document.getElementById('display');
    if (display.value.charAt(0) === '-') {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
    animateDisplay();
}

function calculateResult() {
    const display = document.getElementById('display');
    const historyList = document.getElementById('historyList');
    const currentExpression = display.value;

    try {
        const result = eval(currentExpression.replace('√', 'Math.sqrt'));
        display.value = result;
        
        // History list calculation
        const historyItem = document.createElement('li');
        historyItem.textContent = `${currentExpression} = ${result}`;
        historyList.appendChild(historyItem);

    } catch (e) {
        display.value = 'Error';
    }

    animateDisplay();
}

function toggleHistory() {
    const historySection = document.getElementById('historySection');
    const toggleButton = document.querySelector('.history-toggle');

    if (historySection.style.display === 'none') {
        historySection.style.display = 'block';
        toggleButton.textContent = 'Hide History';
    } else {
        historySection.style.display = 'none';
        toggleButton.textContent = 'Show History';
    }
}

function animateDisplay() {
    const display = document.getElementById('display');
    display.style.animation = 'none';
    setTimeout(() => display.style.animation = 'blinkDisplay 0.2s ease', 0);
}
