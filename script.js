// Get the calculator display element
const display = document.getElementById('display');

// Initialize the display to zero
let result = 0;
display.value = result;

// Update the display with the specified input value
function updateDisplay(input) {
  display.value += input;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result and update the display
function calculate() {
  result = eval(display.value);
  display.value = result;
}
