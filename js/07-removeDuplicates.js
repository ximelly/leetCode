// 26. 删除有序数组中的重复项
// 给你一个有序数组 nums ，请原地删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 示例 1：nums = [1,1,2]   2, nums = [1,2]
// 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
// 示例 2：nums = [0,0,1,1,1,2,2,3,3,4]  5, nums = [0,1,2,3,4]
// 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates (nums = [1, 2]) {
  if (nums.length < 2) { return nums.length }
  let next = 1
  for (let i = 1; i < nums.length; i++) { 
    if (nums[i] !== nums[next-1]) { 
      nums[next] = nums[i]
      next++
    }
  }
  return next
}