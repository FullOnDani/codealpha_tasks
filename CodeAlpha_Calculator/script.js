const resultEl    = document.getElementById('result');
const expressionEl = document.getElementById('expression');
const numBtns     = document.querySelectorAll('[data-num]');
const opBtns      = document.querySelectorAll('[data-op]');
const clearBtn    = document.getElementById('clear');
const deleteBtn   = document.getElementById('delete');
const equalsBtn   = document.getElementById('equals');

let current    = '0';  // number being typed
let previous   = '';   // previous number
let operator   = null; // current operator
let justEvaled = false; // did we just hit equals?

// Update the display
function updateDisplay() {
  resultEl.textContent = current;
  expressionEl.textContent = operator ? `${previous} ${operatorSymbol(operator)}` : '';
}

function operatorSymbol(op) {
  return { '+': '+', '-': '−', '*': '×', '/': '÷' }[op] || op;
}

// Append a number or decimal
numBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.dataset.num;

    if (justEvaled) { current = ''; justEvaled = false; }

    // Prevent multiple decimals
    if (val === '.' && current.includes('.')) return;

    // Replace leading zero unless it's a decimal
    if (current === '0' && val !== '.') {
      current = val;
    } else {
      current += val;
    }

    updateDisplay();
  });
});

// Choose an operator
opBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (current === '' && previous === '') return;

    // If there's already a pending operation, calculate first
    if (operator && current !== '') {
      calculate();
    }

    operator   = btn.dataset.op;
    previous   = current || previous;
    current    = '';
    justEvaled = false;
    updateDisplay();
  });
});

// Calculate result
function calculate() {
  if (!operator || previous === '' || current === '') return;

  const a = parseFloat(previous);
  const b = parseFloat(current);
  let result;

  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/':
      result = b === 0 ? 'Error' : a / b;
      break;
  }

  expressionEl.textContent = `${previous} ${operatorSymbol(operator)} ${current} =`;
  current    = result === 'Error' ? 'Error' : String(parseFloat(result.toFixed(10)));
  previous   = '';
  operator   = null;
  justEvaled = true;
  resultEl.textContent = current;
}

equalsBtn.addEventListener('click', calculate);

// Clear everything
clearBtn.addEventListener('click', () => {
  current    = '0';
  previous   = '';
  operator   = null;
  justEvaled = false;
  updateDisplay();
});

// Delete last character
deleteBtn.addEventListener('click', () => {
  if (justEvaled) return;
  current = current.slice(0, -1) || '0';
  updateDisplay();
});

updateDisplay();