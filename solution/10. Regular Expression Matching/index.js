/**
 * 稳定和不稳定分别判断
 * 普通字符与 . 都是稳定（固定长度）
 * 凡是带 * 的都是不稳定（不定长度）
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch1 = function(s, p) {
  "use strict";
  console.log('----------------------');
  var startWith = 0;
  var lastStartWith = 0;
  if (-1 === p.indexOf('*')) {
    console.log(p);
  } else {
    while (-1 !== (startWith = p.indexOf('*', startWith + 1))) {
      if (startWith - lastStartWith >= 2) {
        console.log(p.substring(lastStartWith, startWith - 1));
      }
      lastStartWith = startWith + 1;
    }
    if (lastStartWith !== p.length) {
      console.log(p.substring(lastStartWith, p.length));
    }
  }


  return true;
};

/**
 * 稳定和不稳定分别判断
 * 普通字符与 . 都是稳定（固定长度）
 * 凡是带 * 的都是不稳定（不定长度）
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  "use strict";
  var asteriskIndex = p.indexOf('*');
  if (-1 === asteriskIndex) {
    return matchEqual(s, p);
  }



};

var matchEqual = function (s, p) {
  "use strict";
  if (s.length !== p.length) {
    return false;
  }

  var result = true;
  for (var index = 0; index < s.length; index++) {
    result = result && (s[index] === p[index] || '.' === p[index]);
  }

  return result;
};

module.exports = {
  isMatch: isMatch,
  matchEqual: matchEqual
};