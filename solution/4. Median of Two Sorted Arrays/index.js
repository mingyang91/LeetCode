/**
 * O(m + n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  "use strict";

  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }


  var nums2Index = getHalfIndex(nums2);
  var nums2Median = (nums2[Math.floor(nums2Index)] + nums2[Math.ceil(nums2Index)]) / 2;
  if (nums1.length === 0) {
    return nums2Median;
  }
  var nums1Index = getHalfIndex(nums1);
  var nums1Median = (nums1[Math.floor(nums1Index)] + nums1[Math.ceil(nums1Index)]) / 2;

  var compare = compareInterval(
      [nums1[Math.floor(nums1Index)], nums1[Math.ceil(nums1Index)]],
      [nums2[Math.floor(nums2Index)], nums2[Math.ceil(nums2Index)]]);

  console.log(compare);

  if (compare === 0) {
    console.log('找到了');
    return 0;
  } else if (compare > 0) {
    return findMedianSortedArrays(nums1.slice(0, nums1Index + 1), nums2.slice(nums1Index + 1, nums2.length));

  } else if (compare < 0) {
    return findMedianSortedArrays(nums1.slice(nums1Index, nums1.length), nums2.slice(0, nums2.length - nums1Index));
  }
};

var getHalfIndex = function (arr) {
  "use strict";
  return arr.length === 0 ? NaN : (arr.length + 1) / 2 - 1;
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

function getMedianInterval (arr) {
  "use strict";
  var halfIndex = getHalfIndex(arr);
  return {
    left: arr[Math.ceil(halfIndex)],
    right: arr[Math.floor(halfIndex)]
  };
}

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