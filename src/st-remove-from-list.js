const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let list = l;
  let last = list;
  if (list && list.value === k) {
    last.value = list.next.value;
    last.next = list.next.next;
    list = list.next;
  }
  while (list) {
    if (list.value !== k) {
      last = list;
    } else {
      last.next = list.next;
    }
    list = list.next;
  }
  return l;
  // remove line with error and write your code here
};
