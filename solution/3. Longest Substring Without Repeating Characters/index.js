/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
  var substr, subStringList = [];
  var longLength = 0;
  var offsetList = [];

  for (var length = 1; length <= s.length / 2; length++) {
    for (var offset = 0; offset < s.length - length; offset++) {
      substr = s.substr(offset, length);
      var isRepeatCheck = subStringList.some(function (item) {
        if (0 !== substr.length % item.length || substr.length === 1 || substr === item) {
          return false;
        }

        for(var index = 0; index < substr.length; index++) {
          if (substr[index] !== item[index % item.length]){
            return false;
          }
        }

        return true;
      });
      if (!isRepeatCheck) {
        subStringList.push(s.substr(offset, length));
      }
    }
  }

  var allRepeatSubString = subStringList.map(function (item) {
    var firstIndex = s.indexOf(item);
    var lastIndex = s.lastIndexOf(item);

    return firstIndex !== -1 && lastIndex !== -1 && firstIndex !== lastIndex ? item.length : 0;
  });
  if (allRepeatSubString.length > 0)
  longLength = allRepeatSubString.reduce(function (before, now) {
    return now > before ? now : before;
  });
  return longLength;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var substr, subStringList = [];
  var longLength = 0;
  var offsetList = [];

  for (var offset = 0; offset < s.length / 2; offset++) {
    offsetList.push(offset);
  }
  for (var length = 1; length <= s.length / 2; length++) {
    offsetList = offsetList.filter(function (offset) {
      substr = s.substr(offset, length);
      if (s.indexOf(substr) !== s.lastIndexOf(substr)) {
        var repeat = subStringList.some(function (sub) {
          if (sub === substr) {
            return true;
          }

          for (var substrIndex = 0; substrIndex < substr.length; substrIndex++) {
            if (sub[substrIndex % sub.length] !== substr[substrIndex]) {
              return false;
            }
          }
          return true;
        });
        if (!repeat) {
          subStringList.push(substr);
        }
        return !repeat;
      } else {
       return false;
      }
    });

  }


  if (subStringList.length > 0)
  longLength = subStringList.reduce(function (before, now) {
    return now.length > before ? now.length : before;
  }, 0);
  return longLength;
};



module.exports = {
  lengthOfLongestSubstring: lengthOfLongestSubstring
};