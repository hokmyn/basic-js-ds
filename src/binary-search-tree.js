const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  root() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode); // helper method below
    }
    // remove line with error and write your code here
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.find(node.left, data);
    } else if (data > node.data) {
      return this.find(node.right, data);
    } else {
      return node;
    }
    // remove line with error and write your code here
  }

  remove(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};
