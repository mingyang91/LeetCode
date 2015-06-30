/**
 * 时间复杂度 O(n?)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {

  //
  // 创建{ number: n, index: i }的数组
  var list = nums
    .map(function (number, index) {
      return {number: number, index: index};
    })
    //
    // 筛选保留小于目标数值的所有数字
    .filter(function (item) {
      return item.number < target;
    });

  console.log(list);
  for (var indexX = 0; indexX < list.length; indexX++) {
    for (var indexY = 0; indexY < list.length; indexY++) {
      if (list[indexX].number + list[indexY].number === target) {
        return [list[indexX].index + 1, list[indexY].index + 1];
      }
    }
  }
};

/**
 * 时间复杂度 O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  var track = Date.now();
  var list = nums
    //
    // 创建{ number: n, index: i }的数组
    .map(function (number, index) {
      return {number: number, index: index};
    })
    //
    // 排序
    .sort(function (a, b) {
      return a.number - b.number;
    });
  console.log(Date.now() - track);
  //console.log(list);
  track = Date.now();
  //
  // 建立 左、右 两个游标，向中间靠拢
  // 当前两个数字相加大于目标数字时，右游标向左移动一位。
  // 小于时，左游标向右移动一位。
  for (var leftCursor = 0, rightCursor = list.length - 1; ; ) {
    var current = list[leftCursor].number + list[rightCursor].number;
    if (current === target) {
      console.log(Date.now() - track);
      return list[leftCursor].index > list[rightCursor].index ?
        [ list[rightCursor].index + 1, list[leftCursor].index + 1 ] :
        [ list[leftCursor].index + 1, list[rightCursor].index + 1 ];
    } else if (current > target) {
      rightCursor--;
    } else if (current < target) {
      leftCursor++;
    }
  }
};


var quickSort = function(arr, originalIndex) {
  if (arr.length <= 1) { return [arr, originalIndex]; }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var originalIndexPivot = originalIndex.splice(pivotIndex, 1)[0];
  var left = [];
  var leftIndex = [];
  var right = [];
  var rightIndex = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < pivot) {
      left.push(arr[i]);
      leftIndex.push(originalIndex[i]);
    } else {
      right.push(arr[i]);
      rightIndex.push(originalIndex[i]);
    }
  }

  var leftSort = quickSort(left, leftIndex);
  var rightSort = quickSort(right, rightIndex);
  return [leftSort[0].concat([pivot], rightSort[0]), leftSort[1].concat([originalIndexPivot], rightSort[1])];
};

/**
 * 最大的测试用例,本地执行耗时10ms左右
 * 前几个方法有两个很耗费时间的问题
 * 1. 重复创建对象/数组
 * 2. 执行了排序
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
  var track = Date.now();
  var numsIndex = nums.map(function (num, index) { return index; });

  var sortResult = quickSort(nums, numsIndex);
  var sortNums = sortResult[0];
  var sortIndex = sortResult[1];
  console.log(Date.now() - track);
  track = Date.now();
  for (var leftCursor = 0, rightCursor = sortNums.length - 1; ; ) {
    var current = sortNums[leftCursor] + sortNums[rightCursor];
    if (leftCursor === rightCursor) { return []; }

    if (current === target) {
      console.log(Date.now() - track);
      return sortIndex[leftCursor] > sortIndex[rightCursor] ?
        [ sortIndex[rightCursor] + 1, sortIndex[leftCursor] + 1 ] :
        [ sortIndex[leftCursor] + 1, sortIndex[rightCursor] + 1 ];
    } else if (current > target) {
      rightCursor--;
    } else if (current < target) {
      leftCursor++;
    }
  }
};

/**
 * 本地执行耗时,2ms
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var hashMap = {};

  for (var index = 0; index < nums.length; index ++) {
    if (hashMap[nums[index]] !== undefined) {
      return [hashMap[nums[index]] + 1, index + 1];
    } else {
      hashMap[target - nums[index]] = index;
    }
  }
};
module.exports = twoSum;