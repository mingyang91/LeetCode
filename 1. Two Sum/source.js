/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return nums.map(function (itemX, indexX) {
        return [indexX, nums.map(function(itemY, indexY){
            if (itemX + itemY === target) {
                return indexY;
            }
        })[0]];
    })[0];
};