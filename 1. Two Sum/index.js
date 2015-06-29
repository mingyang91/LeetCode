/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {

  var list = nums
    .map(function (number, index) {
      return {number: number, index: index};
    })
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
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  var list = nums
    .map(function (number, index) {
      return {number: number, index: index};
    })
    .sort(function (a, b) {
      return a.number - b.number;
    });

  //console.log(list);

  for (var leftCursor = 0, rightCursor = list.length - 1; ; ) {
    var current = list[leftCursor].number + list[rightCursor].number;
    if (current === target) {
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

module.exports = twoSum;