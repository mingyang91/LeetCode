/**
 * Created by famer.me on 15-7-28.
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  "use strict";

  var lines = [];
  for (var index = 0; index < s.length; index++) {
    //TODO
    var remainder = (index + 1) % (numRows * 2 - 1);
    var lineIndex = remainder < numRows ? remainder : (numRows * 2 - remainder - 1);
    if (lines[lineIndex] === undefined) {
      lines[lineIndex] = [];
    }

    lines[lineIndex] += s[index];
  }

  return lines.reduce(function (x, y) {
    return x + y;
  });
};

module.exports = {
  convert: convert
};