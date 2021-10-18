const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
  constructor() {
    this.length = 0;
    this.storage = [];
  }
  push(element) {
    this.storage[this.length] = element;
    this.length += 1;
    // remove line with error and write your code here
  }

  pop() {
    const el = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length -= 1;
    return el;
    // remove line with error and write your code here
  }

  peek() {
    return this.storage[this.length - 1];
    // remove line with error and write your code here
  }
};
