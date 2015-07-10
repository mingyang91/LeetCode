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

  for (;;) {

  }
};

var getMixValue = function (arr, index) {
  "use strict";
  if (Number.isInteger(index)) {
    return arr[index];
  } else {
    return arr[Math.floor(index)] + arr[Math.ceil(index)] * (index - Math.ceil(index));
  }
};

module.exports = {
  findMediaSortedArrays: findMedianSortedArrays
};