function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Takes operator and 2 nums and calls one of the above functions on the numbers
function operate(operator, a, b) {
  switch(operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
    default:
      console.log('Please double check passed arguments match expected input.');
  }
}

let currentlyDisplayedNumber = document.querySelector('#currently-displayed-number');

let numberButtons = document.querySelectorAll('.number-button');

function loadEventListeners() {
  numberButtonEventListeners = () => {
    numberButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        currentlyDisplayedNumber.textContent += button.textContent.trim();
      });
    });
  }
  return numberButtonEventListeners();
}

loadEventListeners();