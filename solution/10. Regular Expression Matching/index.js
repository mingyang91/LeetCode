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
  var asteriskIndex = p.indexOf('*'),
    lastIndex = 0,
    result = true;
  if (-1 === asteriskIndex) {
    return matchEqual(s, p);
  }

  //while(-1 !== (asteriskIndex = p.indexOf('*', lastIndex + 1))) {
  //
  //  result = isMatch(s.substring(asteriskIndex, s.length), p.substring(asteriskIndex, p.length));
  //  if (result) {
  //    return true;
  //  }
  //
  //  lastIndex = asteriskIndex;
  //}

  return false;


};

/**
 * 允许用 . 代替任意字符
 * 判断字符串匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
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

/**
 * 允许用 . 代替任意字符
 * 实现indexOf
 * @param {string} s
 * @param {string} p
 * @return {number}
 * @param startWith
 */
var matchIndexOf = function (s, p, startWith) {
  "use strict";
  var result = -1;
  startWith = startWith === undefined ? 0 : startWith;
  for (var sindex = startWith; sindex < s.length; sindex++) {
    var match = true;
    for (var pindex = 0; pindex < p.length; pindex++) {
      if (s[sindex + pindex] !== p[pindex] && '.' !== p[pindex]) {
        match = false;
        break;
      }
    }
    if (match) {
      result = sindex;
      break;
    }
  }

  return result;
};

module.exports = {
  isMatch: isMatch,
  matchEqual: matchEqual,
  matchIndexOf: matchIndexOf
};