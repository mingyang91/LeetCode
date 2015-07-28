/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  "use strict";

  var max = 1;
  var maxStr = s[0];
  for (var middle = 0.5, isHalf = true; middle < s.length; middle += 0.5, isHalf = !isHalf) {
    for (var length = isHalf ? 0.5 : 1; length <= middle && length <= s.length - middle - 1; length += 1) {
      if (s[middle - length] !== s[middle + length]) {
        break;
      }
    }

    var now = (length - 1) * 2 + 1;
    if (now > max) {
      max = now;
      maxStr = s.slice(middle - length + 1, middle + length);
    }
  }

  return maxStr;
};



module.exports = {
  longestPalindromicSubstring: longestPalindrome
};