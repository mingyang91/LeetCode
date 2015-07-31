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
  if (s === '')  {
    if (p === '') {
      return true;
    } else {
      return p.length >= 2 && p[1] === '*' ? isMatch(s, p.substring(2, p.length)): false;
    }
  }
  var asteriskIndex = p.indexOf('*');

  //
  // 如果当前字符串不包含*，则直接返回匹配结果
  if (-1 === asteriskIndex) {
    return matchEqual(s, p);
  }

  //
  // 如果当前字符串包含*，则
  var nextAsteriskIndex = p.indexOf('*', asteriskIndex + 1),
  stableRightEnd = nextAsteriskIndex !== -1 ? nextAsteriskIndex - 1 : p.length;


  var stableLeft = p.substring(0, asteriskIndex - 1);
  var unstable = p.substring(asteriskIndex - 1, asteriskIndex + 1);
  var stableRight = p.substring(asteriskIndex + 1, stableRightEnd);
  var nextP = p.substring(asteriskIndex + 1, p.length);

  if (!matchEqual(s.substring(0, stableLeft.length), stableLeft)) {
    return false;
  }

  if (nextP === '' && asteriskMatch(s, unstable[0])) {
    return true;
  }

  var nextIndex = stableLeft.length - 1;

  while(nextIndex < s.length && -1 !== (nextIndex = matchIndexOf(s, stableRight, nextIndex + 1))) {
    //
    // 星号的匹配，不匹配立即跳出
    if (!asteriskMatch(s.substring(stableLeft.length, nextIndex), unstable[0])) {
      return false;
    }


    if (isMatch(s.substring(nextIndex, s.length), nextP)) {
      return true;
    }

  }

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

  if (p === '') {
    return startWith > s.length ? s.length : startWith;
  } else {
    if (startWith > s.length - 1) {
      return -1;
    }
  }

  for (var sindex = startWith; sindex < s.length; sindex++) {
    var match = true;
    for (var pindex = 0; pindex < p.length; pindex++) {

      if (sindex + pindex >= s.length || (s[sindex + pindex] !== p[pindex] && '.' !== p[pindex])) {
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

var asteriskMatch = function (s, char) {
  "use strict";
  if (char === '.') {
    return true;
  } else {
    for (var index = 0; index < s.length; index++) {
      if (s[index] !== char) {
        return false;
      }
    }
    return true;
  }
};

module.exports = {
  isMatch: isMatch,
  matchEqual: matchEqual,
  matchIndexOf: matchIndexOf,
  asteriskMatch: asteriskMatch
};