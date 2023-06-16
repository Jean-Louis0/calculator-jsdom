let inputfield = document.getElementById('inputfield')
let keypadbuttons = document.getElementById('keypad').getElementsByTagName('button')
input.value = '0'
currentInput = ''

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

function performcalculations() {
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
  document.getElementById('inputfield').value = currentInput;
}


document.getElementById('brackets').addEventListener('click', function() {
  if (currentInput.includes('(')) {
    updateInput(')');
  } else {
    updateInput('(');
  }
});

document.getElementById('allclear').addEventListener('click', function() {
  currentInput = '';
  document.getElementById('inputfield').value = '0';
});

document.getElementById('clearentry').addEventListener('click', function() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('inputfield').value = currentInput;
});

document.getElementById('modulus').addEventListener('click', function() {
  updateInput('%');
});

document.getElementById('seven').addEventListener('click', function() {
  updateInput('7');
});

document.getElementById('eight').addEventListener('click', function() {
  updateInput('8');
});

document.getElementById('nine').addEventListener('click', function() {
  updateInput('9');
});

document.getElementById('dividedby').addEventListener('click', function() {
  updateInput('÷');
});

document.getElementById('four').addEventListener('click', function() {
  updateInput('4');
});

document.getElementById('five').addEventListener('click', function() {
  updateInput('5');
});

document.getElementById('six').addEventListener('click', function() {
  updateInput('6');
});

document.getElementById('multipliedby').addEventListener('click', function() {
  updateInput('x');
});

document.getElementById('one').addEventListener('click', function() {
  updateInput('1');
});

document.getElementById('two').addEventListener('click', function() {
  updateInput('2');
});

document.getElementById('third').addEventListener('click', function() {
  updateInput('3');
});

document.getElementById('substractedby').addEventListener('click', function() {
  updateInput('-');
});

document.getElementById('zero').addEventListener('click', function() {
  updateInput('0');
});

document.getElementById('decimal').addEventListener('click', function() {
  updateInput('.');
});

document.getElementById('=').addEventListener('click', function() {
  performcalculations();
});

document.getElementById('addedto').addEventListener('click', function() {
  updateInput('+');
});