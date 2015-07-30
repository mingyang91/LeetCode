/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  "use strict";

  if (x < 0) {
    return -reverse(-x);
  }

  var result = Number(x.toString().split('').reverse().join(''));
  if (isSafeInteger(result)) {
    return result;
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
  reverse: reverse
};