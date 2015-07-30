/**
 * Created by famer.me on 15-7-29.
 */
var INT_MAX = Math.pow(2, 31) - 1,
    INT_MIN = -(Math.pow(2, 31));
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
  var number = 0;

  if (chars[0] === '-' || chars[0] === '+') {
    symbol = chars[0];
    chars = chars.splice(1, chars.length);
  }

  for (var index = 0; index < chars.length && chars[index] >= '0' && chars[index] <= '9'; index++) {
    number = number * 10 + (chars[index] - '0');
  }

  var result = number;
  result = symbol !== '-' ? result : -result;
  if (result > INT_MAX) {
    return INT_MAX;
  } else if (result < INT_MIN) {
    return INT_MIN;
  } else {
    return result;
  }
};

module.exports = {
  myAtoi: myAtoi
};