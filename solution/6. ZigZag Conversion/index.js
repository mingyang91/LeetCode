/**
 * Created by famer.me on 15-7-28.
 */
/*jshint bitwise: false*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  "use strict";

  var lines = [];

  if (numRows <= 1) {
    return s;
  }

  for (var rowIndex = 0; rowIndex < numRows; rowIndex++) {
    lines[rowIndex] = "";
  }

  for (var index = 0; index < s.length; index++) {
    var remainder = index % (numRows - 1);
    var lineIndex = ((((index / (numRows - 1)) >> 0) & 1) === 0) ? remainder : (numRows - 1 - remainder);

    lines[lineIndex] += s[index];
  }

  return lines.join('');
};

module.exports = {
  convert: convert
};