/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var substr, subStringList = [];
  for (var length = 1; length <= s.length / 2; length++) {
    for (var offset = 0; offset < s.length - length; offset++) {
      substr = s.substr(offset, length);
      subStringList.push(s.substr(offset, length));

    }
  }

  console.log(subStringList);
};

var isAtomString = function (string) {
  var result = 0;
  var subString = '';
  for (var length = 1; length <= string.length / 2; length++) {
    for (var offset = 0; offset < string.length - length; offset++) {
      subString = string.substr(offset, length);
      if (subString.length > 1) {

      }
      if (string.indexOf(subString) !== string.lastIndexOf(subString)) {
        return false;
      }

    }
  }

  return result;
};



module.exports = {
  lengthOfLongestSubstring: lengthOfLongestSubstring
};