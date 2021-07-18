// 35. 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1: [1,3,5,6], 5  2
// 示例 2: [1,3,5,6], 2  1
// 示例 3: [1,3,5,6], 7  4
// 示例 4: [1,3,5,6], 0  0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// function searchInsert (nums = [1, 3, 5, 6], target = 0) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i
//     } else if (nums[i] < target && (nums[i + 1] === undefined || nums[i + 1] > target)) {
//       return i + 1
//     }
//   }
//   return 0
// }

function searchInsert (nums = [1, 3, 5, 6], target = 4) {
  let left = 0,
    right = nums.length -1
  while (left <= right) {
    let middle = parseInt((left + right) / 2)
    if (nums[middle] === target) { 
      return middle
    }else if(nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = middle - 1
    }
  }
  return left
}