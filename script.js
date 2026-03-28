const display = document.getElementById("display");
const keys = document.querySelector(".keys");

let expression = "0";

const updateDisplay = () => {
  display.value = expression;
};

const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

const appendValue = (value) => {
  if (expression === "0" && value !== ".") {
    expression = value;
    return;
  }

  const lastChar = expression.at(-1);

  if (isOperator(value) && isOperator(lastChar)) {
    expression = expression.slice(0, -1) + value;
    return;
  }

  if (value === ".") {
    const currentNumber = expression.split(/[+\-*/]/).at(-1);
    if (currentNumber.includes(".")) return;
  }

  expression += value;
};

const clearAll = () => {
  expression = "0";
};

const deleteLast = () => {
  expression = expression.length === 1 ? "0" : expression.slice(0, -1);
};

const calculate = () => {
  try {
    const sanitized = expression.replace(/[^0-9+\-*/.()]/g, "");
    const result = Function(`"use strict"; return (${sanitized})`)();

    if (!Number.isFinite(result)) {
      expression = "Error";
      return;
    }

    expression = Number(result.toFixed(10)).toString();
  } catch {
    expression = "Error";
  }
};

keys.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const { value, action } = button.dataset;

  if (expression === "Error" && action !== "clear") {
    expression = "0";
  }

  if (value) appendValue(value);
  if (action === "clear") clearAll();
  if (action === "delete") deleteLast();
  if (action === "equals") calculate();

  updateDisplay();
});

window.addEventListener("keydown", (event) => {
  if (/^[0-9.+\-*/]$/.test(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter" || event.key === "=") {
    event.preventDefault();
    calculate();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clearAll();
  } else {
    return;
  }

  updateDisplay();
});

updateDisplay();
