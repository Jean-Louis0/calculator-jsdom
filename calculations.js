let inputfield = document.getElementById('inputfield');
let buttons = document.querySelectorAll('button');
inputfield.value = '0';
currentInput = '';

function add() {
  return parseFloat(a) + parseFloat(b);
}

function subtract() {
  return parseFloat(a) - parseFloat(b);
}

function multiply() {
  return parseFloat(a) * parseFloat(b);
}

function divide() {
  return parseFloat(a) / parseFloat(b);
}

function performCalculations() {
  let expression = currentInput;
  let operators = ['+', '-', 'x', '÷', '%'];
  let operatorIndex = -1;
  let result = '';

  for (let i = 0; i < operators.length; i++) {
    if (expression.includes(operators[i])) {
      operatorIndex = expression.indexOf(operators[i]);
      break;
    }
  }

  if (operatorIndex !== -1) {
    a = expression.substring(0, operatorIndex);
    b = expression.substring(operatorIndex + 1);
    let operator = expression[operatorIndex];

    switch (operator) {
      case '+':
        result = add();
        break;
      case '-':
        result = subtract();
        break;
      case 'x':
        result = multiply();
        break;
      case '÷':
        result = divide();
        break;
      case '%':
        result = parseFloat(a) % parseFloat(b);
        break;
      default:
        result = '';
        break;
    }

    inputfield.value = result;
    currentInput = result.toString();
  }
}

function updateInput(value) {
  currentInput += value;
  inputfield.value = currentInput;
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = button.value;
    updateInput(value);
  });
});

document.getElementById('=').addEventListener('click', function() {
  performCalculations();
});

document.getElementById('allclear').addEventListener('click', function() {
  currentInput = '';
  inputfield.value = '0';
});

document.getElementById('clearentry').addEventListener('click', function() {
  currentInput = currentInput.slice(0, -1);
  inputfield.value = currentInput;
});

