/**
 * O(m + n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  "use strict";

  var index1 = (nums1.length - 1) / 2;
  var index2 = (nums2.length - 1) / 2;
  var startingDirection = nums1[index1] > nums2[index2];

  //for (;;) {
  //  if (startingDirection === nums1[index1] > nums2[index2]) {
  //    //TODO 处理边界情况
  //    index1--;
  //    index2++;
  //  } else {
  //
  //  }
  //}
};

var getMixValue = function (arr, index) {
  "use strict";
  if (Number.isInteger(index)) {
    return arr[index];
  } else {
    return arr[Math.floor(index)] + arr[Math.ceil(index)] * (index - Math.ceil(index));
  }
};

var getMedianForTwoInterval = function (arr1, arr2) {
  "use strict";
  if (arr1.length === 1) {
    arr1[1] = arr1[0];
  }

  if (arr2.length === 1) {
    arr2[1] = arr2[0];
  }

  if (arr1[0] > arr2[arr2.length - 1] || arr1[arr1.length - 1] < arr2[0]) {
    return false;
  } else {
    //无交集
    var sorted = arr1.concat(arr2).sort();
    return (sorted[1] + sorted[2]) / 2;
  }


};



module.exports = {
  findMediaSortedArrays: findMedianSortedArrays,
  getMedianForTwoInterval: getMedianForTwoInterval
};