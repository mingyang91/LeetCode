/**
 * Created by lucifer on 2015/8/9.
 */
/**
 * O(n^2)
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function(height) {
  "use strict";
  var max = 0;
  for (var start = 0; start < height.length - 1; start++) {
    for (var end = start + 1; end < height.length; end++) {
      var currentArea = (height[start] > height[end] ? height[end] : height[start]) * (end - start);
      max = currentArea > max ? currentArea : max;
    }
  }
  return max;
};

/**
 * < O(n^2)
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function(height) {
  "use strict";
  var max = 0;
  for (var start = 0; start < height.length - 1; start++) {
    var greaterThenMaxOfStep = max !== 0 ? Math.ceil(max / height[start]) : 1;
    for (var end = start + greaterThenMaxOfStep; end < height.length; end++) {
      var currentArea = (height[start] > height[end] ? height[end] : height[start]) * (end - start);
      max = currentArea > max ? currentArea : max;
    }
  }
  return max;
};

/**
 * O(n)
 * @param {number[]} height
 * @return {number}
 */
var maxArea3 = function (height) {
  "use strict";
  var max = 0,
      left = 0,
      right = height.length - 1;

  while (right > left) {

    var isRightGreaterThenLeft = height[right] > height[left];
    var currentArea = (isRightGreaterThenLeft ? height[left] : height[right]) * (right - left);
    max = currentArea > max ? currentArea : max;

    if (isRightGreaterThenLeft) {
      left++;
    } else {
      right--;
    }
  }

  return max;

};

/**
 * O(n)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  "use strict";
  var max = 0,
      left = 0,
      right = height.length - 1;

  while (right > left) {

    var currentRight = height[right],
        currentLeft = height[left];
    var isRightGreaterThenLeft = currentRight > currentLeft;
    var currentArea = (isRightGreaterThenLeft ? currentLeft : currentRight) * (right - left);
    max = currentArea > max ? currentArea : max;

    do {
      isRightGreaterThenLeft ? left++ : right--;
    } while (right > left && (isRightGreaterThenLeft ? height[left] < currentLeft : height[right] < currentRight))
  }

  return max;

};

module.exports = { maxArea: maxArea };