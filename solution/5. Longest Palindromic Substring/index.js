/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  "use strict";

  var max = 0;
  for (var middle = 1; middle < s.length; middle += 0.5) {
    for (var length = 0.5; length < middle && length < s.length - middle; length += 0.5) {
      if (s[middle - length] !== s[middle + length]) {
        break;
      } else {
        max = length * 2 > max ? length * 2 : max;
      }
    }
  }

  return max;
};



module.exports = {
  longestPalindromicSubstring: longestPalindrome
};