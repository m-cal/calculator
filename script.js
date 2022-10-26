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

let currentlyDisplayedText = document.querySelector('#currently-displayed-text');
let currentNumber = Number(currentlyDisplayedText.textContent);
let currentOperator = null;
let leftNum = null;
let rightNum = null;

function getCurrentNumber() {
  currentNumber = Number(currentlyDisplayedText.textContent);
  return currentNumber;
}

let numberButtons = document.querySelectorAll('.number-button');
let operatorButtons = document.querySelectorAll('.operator-button');
let clearButton = document.querySelector('#clear-button');
let backButton = document.querySelector('#back-button');

function loadEventListeners() {
  clearButtonEventListener = () => {
    clearButton.addEventListener('click', (event) => {
      currentlyDisplayedText.textContent = '';
      leftNum = null;
      rightNum = null;
      currentOperator = null;
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
        currentlyDisplayedText.textContent += button.textContent.trim();
      });
    });
  }

  operatorButtonEventListeners = () => {
    operatorButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        if (currentOperator == null) {
          leftNum = getCurrentNumber();
          currentOperator = button.textContent.trim();
          currentlyDisplayedText.textContent = '';
        } else if (currentOperator) {
          rightNum = getCurrentNumber();
          currentNumber = operate(currentOperator, leftNum, rightNum);
          currentlyDisplayedText.textContent = currentNumber;
          leftNum = null;
          rightNum = null;
          currentOperator = null;
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



/* 

- number is entered with number buttons
- have event listener for when operator is clicked
   - when an op is clicked
    - store number in a var 'leftNum'
    - store op in a var 'currentOperator'
    - clear #currently-displayed-text
   - when another number is clicked:
    - buttons should upate div
   - wait until another operator is clicked
    - if operator is = 
      - call getCurrentNumber()
      - update #currently displayed text to (operate(operator, leftNum, currentNumber));
      - call getCurrentNumber
    - if operator is 

*/


/* 

- numbers and operators are stored as string value
- check for when pattern changes from NumOpNum to NumOpNumOp
  - if second op is =
    - do final calc 
  - if is + or - or * or /
    - first calc NumOpNum and store that result
    - then repeat with that result OpNum

*/