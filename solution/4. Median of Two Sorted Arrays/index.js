/**
 * O(m + n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  "use strict";
  if (nums1.length + nums2.length <= 4) {
    var mergeInterval = nums1.concat(nums2).sort();
    return (mergeInterval[Math.floor((mergeInterval.length - 1) / 2)] + mergeInterval[Math.ceil((mergeInterval.length - 1) / 2)]) / 2;
  }

  var halfIndex1 = getHalfIndex(nums1);
  var halfIndex2 = getHalfIndex(nums2);

  var median1 = (nums1[Math.floor(halfIndex1)] + nums1[Math.floor(halfIndex1)]) / 2, median2 = (nums2[Math.floor(halfIndex2)] + nums2[Math.floor(halfIndex2)]) / 2;
  if (Number.isNaN(halfIndex1)) {
    return median2;
  } else if (Number.isNaN(halfIndex2)) {
    return median1;
  } else {
    if (median1 > median2) {
      return findMedianSortedArrays(nums1.slice(0, halfIndex1 + 1), nums2.slice(halfIndex2 - 1, nums2.length));
    } else if (median1 < median2) {
      return findMedianSortedArrays(nums1.slice(halfIndex1 + 1, nums1.length), nums2.slice(0, Math.ceil(halfIndex2 + 1)));
    } else {
      return median1;
    }
  }

};

var getHalfIndex = function (arr) {
  "use strict";
  return arr.length === 0 ? NaN : (arr.length - 1) / 2;
};

var getMedianForTwoInterval = function (arr1, arr2) {
  "use strict";
    var sorted = arr1.concat(arr2).sort().filter(function (e) { return e !== undefined; });
    if (sorted.length === 4) {
      return (sorted[1] + sorted[2]) / 2;
    } else {
      return (sorted[0] + sorted[1]) / 2;
    }
};

var compareInterval = function (arr1, arr2) {
  "use strict";
  var greater = arr1[0] - arr2[arr2.length - 1];
  var less = arr1[arr1.length - 1] - arr2[0];
  if (greater > 0) {
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