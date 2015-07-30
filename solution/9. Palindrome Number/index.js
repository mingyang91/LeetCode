/*jshint bitwise: false*/
/**
 * @param {number} x
 * @return {boolean}
 */

var LOG_10_e = 0.434294481903251828;
var POWER_10 = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 1000000000];
var isPalindrome = function(x) {
  "use strict";
  if (x < 0) {
    return false;
  }
  var Magnitude = (Math.log(x) * LOG_10_e) >> 0;
  var result = true;
  for (var index = 0; index <= Magnitude / 2; index++) {
    var left = ((x / POWER_10[index]) >> 0) % 10;
    var right = (x / POWER_10[Magnitude - index] >> 0) % 10;
    result = result && (left === right);
  }
  return result;
};



module.exports = {
  isPalindrome: isPalindrome
};