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
      if (b == 0) {
        alert('You know better than that! No dividing by zero.');
      }
      return divide(a, b);
      break;
    default:
      console.log('Please double check passed arguments match expected input.');
  }
}

let currentlyDisplayedText = document.querySelector('#currently-displayed-text');
let currentNumber = Number(currentlyDisplayedText.textContent);
let currentOperator = null;
let leftNum = null;
let rightNum = null;
let result = null;
let equalsPressed = false;
let pendingOperator = false;
let numberButtons = document.querySelectorAll('.number-button');
let operatorButtons = document.querySelectorAll('.operator-button');
let clearButton = document.querySelector('#clear-button');
let backButton = document.querySelector('#back-button');
let lastPressedButton = null;

function getCurrentNumber() {
  currentNumber = Number(currentlyDisplayedText.textContent);
  return currentNumber;
}

function loadEventListeners() {
  clearButtonEventListener = () => {
    clearButton.addEventListener('click', (event) => {
      currentlyDisplayedText.textContent = '';
      leftNum = null;
      rightNum = null;
      currentOperator = null;
      equalsPressed = false;
    });
  }

  backButtonEventListener = () => {
    backButton.addEventListener('click', (event) => {
      currentlyDisplayedText.textContent = currentlyDisplayedText.textContent.slice(0, -1);
    });
  }

  numberButtonEventListeners = () => {
    numberButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        if (result && lastPressedButton == 'operator') {
          currentlyDisplayedText.textContent = '';
        }
        lastPressedButton = 'number';
        currentlyDisplayedText.textContent += button.textContent.trim();
      });
    });
  }

  operatorButtonEventListeners = () => {
    operatorButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        lastPressedButton = 'operator';
        if (currentOperator == null && leftNum == null) {
          leftNum = getCurrentNumber();
          currentOperator = button.textContent.trim();
          currentlyDisplayedText.textContent = '';
        } else if (currentOperator && leftNum) {
          rightNum = getCurrentNumber();
          result = operate(currentOperator, leftNum, rightNum);
          currentlyDisplayedText.textContent = Number(result.toFixed(2));
          leftNum = result;
          rightNum = null;
          currentOperator = button.textContent.trim();
          if (currentOperator == '=') {
            currentOperator = null;
          }
        } else if (leftNum && !currentOperator) {
          currentOperator = button.textContent.trim();
          currentlyDisplayedText.textContent = '';
        }
      });
    })
  }
  clearButtonEventListener();
  backButtonEventListener();
  numberButtonEventListeners();
  operatorButtonEventListeners();
}

loadEventListeners();