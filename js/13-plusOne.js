// 66. 加一
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1： digits = [1,2,3]  [1,2,4]
// 解释：输入数组表示数字 123
// 示例 2： digits = [4,3,2,1] [4,3,2,2]
// 解释：输入数组表示数字 4321
// 示例 3： digits = [0]  [1]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits = [9, 9, 9]) {
  let add = 1
  for (let i = digits.length - 1; i >= 0; i--) { 
    let item = digits[i]
    if (item + add >= 10) {
      digits[i] = item + add - 10
      if (i == 0 ) { 
        digits.unshift(1)
        break
      }
    } else { 
      digits[i] += add
      break
    }
  }
  return digits
};