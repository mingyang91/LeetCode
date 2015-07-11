/**
 * O(m + n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  "use strict";


  var index1 = getHalfIndexes(nums1);
  var index2 = getHalfIndexes(nums2);
  var startingDirection = compareInterval([nums1[index1[0]], nums1[index1[1]]], [nums2[index2[0]], nums2[index2[1]]]);
  if (startingDirection > 0) {
    startingDirection = 1;
  } else if (startingDirection < 0) {
    startingDirection = -1;
  } else {
    return getMedianForTwoInterval([nums1[index1[0]], nums1[index1[1]]], [nums2[index2[0]], nums2[index2[1]]]);
  }

  for (; ; ) {
    var nowDirection = compareInterval([nums1[index1[0]], nums1[index1[1]]], [nums2[index2[0]], nums2[index2[1]]]);
    if (nowDirection > 0) {
      nowDirection = 1;
    } else if (nowDirection < 0) {
      nowDirection = -1;
    } else {
      nowDirection = 0;
    }
    if (nowDirection === startingDirection) {
      //越界

      if (isOutOfIndex(index1[0] - startingDirection, nums1) ||
          isOutOfIndex(index1[1] - startingDirection, nums1) ||
          isOutOfIndex(index2[0] + startingDirection, nums2) ||
          isOutOfIndex(index2[1] + startingDirection, nums2)) {
        return getMedianForTwoInterval([nums1[index1[0]], nums1[index1[1]]], [nums2[index2[0]], nums2[index2[1]]]);
      }

      index1[0] -= startingDirection;
      index1[1] -= startingDirection;
      index2[0] += startingDirection;
      index2[1] += startingDirection;
    } else if (nowDirection === 0) {
      return getMedianForTwoInterval([nums1[index1[0]], nums1[index1[1]]], [nums2[index2[0]], nums2[index2[1]]]);
    } else {
      index1[0] += startingDirection;
      index1[1] += startingDirection;
      index2[0] -= startingDirection;
      index2[1] -= startingDirection;
      return getMedianForTwoInterval([nums1[index1[0]], nums1[index1[1]]], [nums2[index2[0]], nums2[index2[1]]]);
    }
  }
};

var isOutOfIndex = function (index, arr) {
  return index < 0 || index >= arr.length;
};

var getHalfIndexes = function (arr) {
  if (arr.length === 0) {


    return [NaN, NaN];
  } else {


    var halfIndex = (arr.length - 1) / 2;
    return [Math.floor(halfIndex), Math.ceil(halfIndex)];
  }
};

var getMedianForTwoInterval = function (arr1, arr2) {
  "use strict";
  //if (arr1.length === 1) {
  //  arr1[1] = arr1[0];
  //}
  //
  //if (arr2.length === 1) {
  //  arr2[1] = arr2[0];
  //}

  //if (arr1[0] > arr2[arr2.length - 1] || arr1[arr1.length - 1] < arr2[0]) {
  //if (compareInterval(arr1, arr2)) {
  //  return false;
  //} else {
    //无交集
    var sorted = arr1.concat(arr2).sort().filter(function (e) { return e !== undefined; });
    if (sorted.length === 4) {
      return (sorted[1] + sorted[2]) / 2;
    } else {
      return (sorted[0] + sorted[1]) / 2;
    }
  //}
};

var compareInterval = function (arr1, arr2) {
  var greate = arr1[0] - arr2[arr2.length - 1];
  var less = arr1[arr1.length - 1] - arr2[0];
  if (greate > 0) {
    return arr1[0] - arr2[arr2.length - 1];
  } else if (less < 0) {
    return arr1[arr1.length - 1] - arr2[0];
  } else {
    return 0;
  }
};



module.exports = {
  findMediaSortedArrays: findMedianSortedArrays,
  getMedianForTwoInterval: getMedianForTwoInterval,
  compareInterval: compareInterval
};