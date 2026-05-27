const fs = require('fs');
const assert = require('assert');

// Basic DOM Mock
const eventListeners = {};
const elements = {};

global.document = {
  getElementById: (id) => {
    if (!elements[id]) {
      elements[id] = { value: '' };
    }
    return elements[id];
  },
  querySelector: (selector) => {
    if (!elements[selector]) {
      elements[selector] = {
        addEventListener: (event, cb) => {
          eventListeners[`${selector}:${event}`] = cb;
        }
      };
    }
    return elements[selector];
  }
};

global.window = {
  addEventListener: (event, cb) => {
    eventListeners[`window:${event}`] = cb;
  }
};

// Read and execute script.js
const scriptContent = fs.readFileSync('./script.js', 'utf8');
eval(scriptContent);

// Access mocked elements
const displayEl = elements['display'];

const triggerClick = (dataset) => {
  const cb = eventListeners['.keys:click'];
  if (cb) {
    cb({
      target: {
        closest: (selector) => {
          if (selector === 'button') {
            return { dataset };
          }
          return null;
        }
      }
    });
  }
};

const triggerKey = (key) => {
  const cb = eventListeners['window:keydown'];
  if (cb) {
    cb({
      key,
      preventDefault: () => {}
    });
  }
};

try {
  // Test basic addition
  triggerClick({ action: 'clear' });
  triggerClick({ value: '1' });
  triggerClick({ value: '2' });
  triggerClick({ value: '+' });
  triggerClick({ value: '3' });
  triggerClick({ action: 'equals' });
  assert.strictEqual(displayEl.value, '15', 'Addition should work');

  // Test operator replacement
  triggerClick({ action: 'clear' });
  triggerClick({ value: '5' });
  triggerClick({ value: '+' });
  triggerClick({ value: '-' });
  triggerClick({ value: '2' });
  triggerClick({ action: 'equals' });
  assert.strictEqual(displayEl.value, '3', 'Operator replacement should work');

  // Test decimal validation
  triggerClick({ action: 'clear' });
  triggerClick({ value: '1' });
  triggerClick({ value: '.' });
  triggerClick({ value: '2' });
  triggerClick({ value: '.' });
  triggerClick({ value: '3' });
  triggerClick({ action: 'equals' });
  assert.strictEqual(displayEl.value, '1.23', 'Should not allow multiple decimals in a number');

  // Test keyboard events
  triggerClick({ action: 'clear' });
  triggerKey('7');
  triggerKey('*');
  triggerKey('8');
  triggerKey('Enter');
  assert.strictEqual(displayEl.value, '56', 'Keyboard operations should work');

  console.log('All tests passed successfully!');
} catch (error) {
  console.error('Test failed:', error.message);
  process.exit(1);
}
