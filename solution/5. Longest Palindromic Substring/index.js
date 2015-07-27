/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  "use strict";

  var max = 0;
  for (var index = 1; index < s.length; index++) {
    for (var length = 1; length < index && length < s.length - index; length++) {
      if (s[index - length] !== s[index + length]) {
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