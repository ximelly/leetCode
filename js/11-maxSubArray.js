// 53. 最大子序和
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4] 6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2： nums = [1] 1
// 示例 3： nums = [0] 0
// 示例 4： nums = [-1] -1
// 示例 5： nums = [-100000] -100000

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
  let sumArr = [nums[0]], max = nums[0]
  for (let i = 1; i < nums.length; i++){
    let latestItem = sumArr[i - 1], addItem = latestItem <= 0 ? nums[i] : latestItem + nums[i]
    sumArr.push(addItem)
    max = Math.max(max, addItem)
  }
  return max
}