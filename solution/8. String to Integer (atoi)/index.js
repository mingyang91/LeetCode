/**
 * Created by famer.me on 15-7-29.
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  "use strict";
  str = str.trim();

  if (str === '') {
    return 0;
  }

  var chars = str.split('');
  var symbol = '+';

  if (chars[0] === '-' || chars[0] === '+') {
    symbol = chars[0];
    chars = chars.splice(1, chars.length);
  }

  var condition = true;
  var nums = chars.map(function (char) {
    condition &= char >= '0' && char <= '9';
    return char - '0';
  });

  if (condition) {
    var result = nums.reduce(function (x, y) { return x * 10 + y; });
    result = symbol !== '-' ? result : -result;
    if (isSafeInteger(result)) {
      return result;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};

var INT_MAX = Math.pow(2, 31) - 1,
  INT_MIN = -(Math.pow(2, 31));
function isSafeInteger (testValue) {
  "use strict";

  return testValue < INT_MAX && testValue > INT_MIN;
}

module.exports = {
  myAtoi: myAtoi
};