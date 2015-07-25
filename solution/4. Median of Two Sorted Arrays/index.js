/**
 * O(m + n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  "use strict";

  //
  // 保证nums1的长度 小于 nums2的长度
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  //
  // 取得nums2的中位数
  var nums2Index = getHalfIndex(nums2);
  var nums2Median = (nums2[Math.floor(nums2Index)] + nums2[Math.ceil(nums2Index)]) / 2;
  //
  // 如果nums1长度为0，则nums2的中位数就是两个数组的中位数
  if (nums1.length === 0) {
    return nums2Median;
  } else if (nums1.length === 1) {
    //var num1 = nums1[0];
    //var nums2floor = nums2[Math.floor(nums2Index)];
    //var nums2ceil = nums2[Math.ceil(nums2Index)];
    //if (nums2floor < num1 && num1 < nums2ceil) {
    //  return num1;
    //} else if (num1 <= nums2floor) {
    //
    //} else if (num1 >= nums2ceil) {
    //
    //}
    nums2.push(nums1)
  }
  //
  // 取得nums1的中间索引
  var nums1Index = getHalfIndex(nums1);
  var nums1Median = (nums1[Math.floor(nums1Index)] + nums1[Math.ceil(nums1Index)]) / 2;


  //
  // 退出条件
  var medianIndex, medianValue;
  if (nums1.length === nums2.length) {
    //
    // 两个数组等长，且没有交集重合的部分（具体是说nums1的最小值比nums2的最大值还要大）
    // 这种情况下，中值在两个数组之间
     if (nums1[0] > nums2[nums2.length - 1]) {
      return (nums1[0] + nums2[nums2.length - 1]) / 2;
    } else if (nums2[0] > nums1[nums1.length - 1]) {
      return (nums1[nums1.length - 1] + nums2[0]) / 2;
    }
  } else {
    //
    // 数组长度不相等的时候，中位数肯定在长数组（nums2）中
    if (nums1[0] > nums2[nums2.length - 1]) {
      //
      // 分为两种情况讨论
      // 如果nums1最小数比nums2最大数还大
      medianIndex = nums2Index - nums1Index;
      medianValue = (nums2[Math.floor(medianIndex)] + nums2[Math.ceil(medianIndex)]) / 2;
      return medianValue;
    } else if (nums2[0] > nums1[nums1.length - 1]) {
      //
      // 反之
      medianIndex = nums2Index + nums1Index;
      medianValue = (nums2[Math.floor(medianIndex)] + nums2[Math.ceil(medianIndex)]) / 2;
      return medianValue;
    }
  }

  var nums1Small = nums1[Math.floor(nums1Index)],
      nums1Greate = nums1[Math.ceil(nums1Index)],
      nums2Small = nums2[Math.floor(nums2Index)],
      nums2Greate = nums2[Math.ceil(nums2Index)];

  var compare = compareInterval(
      [nums1Small, nums1Greate],
      [nums2Small, nums2Greate]);

  if (compare === 0) {
    console.log('找到了');
    if (Number.isInteger(nums1Index)) {
      return nums1[nums1Index];
    } else if (Number.isInteger(nums2Index)) {
      return nums2[nums2Index];
    } else {
      var small = nums1Small > nums2Small ? nums1Small : nums2Small;
      var greate = nums1Greate < nums2Greate ? nums1Greate : nums2Greate;
      return (small + greate) / 2;
    }
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

Number.isInteger = Number.isInteger || function(value) {
  "use strict";
  return typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value;
};

module.exports = {
  findMediaSortedArrays: findMedianSortedArrays,
  getMedianForTwoInterval: getMedianForTwoInterval,
  compareInterval: compareInterval
};