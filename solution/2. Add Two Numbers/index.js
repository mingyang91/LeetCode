var ListNode = require('./ListNode.js');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var current1, current2, currentResult;
  var resultNode = new ListNode();
  var carry = 0;
  var val1 = 0, val2 = 0;

  for (current1 = l1, current2 = l2, currentResult = resultNode; ; ) {

    val1 = 0;
    val2 = 0;

    if (current1) {
      val1 = current1.val;
      current1 = current1.next;
    }

    if (current2) {
      val2 = current2.val;
      current2 = current2.next;
    }

    currentResult.val = val1 + val2 + carry;
    carry = 0;
    if (currentResult.val >= 10) {
      carry = parseInt(currentResult.val / 10);
      currentResult.val = currentResult.val % 10;
    }

    if (current1 || current2) {
      currentResult.next = new ListNode();
      currentResult = currentResult.next;
    } else {
      if (carry !== 0) {
        currentResult.next = new ListNode(carry);
      }

      break;
    }
  }
  return resultNode;
};

module.exports = addTwoNumbers;