// 69. x 的平方根
// 实现 int sqrt(int x) 函数。
// 计算并返回 x 的平方根，其中 x 是非负整数。
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1: 输入: 4  输出: 2
// 示例 2: 输入: 8  输出: 2
// 说明: 8 的平方根是 2.82842..., 
// 由于返回类型是整数，小数部分将被舍去。

/**
 * @param {number} x
 * @return {number}
 * 二分查找，用x/m<m而不是m*m>x防止溢出
 */

function mySqrt (x = 4) {
  if(x == 0 || x == 1) return x  //避免miaddle为0，除数不能为0
  let left = 1,
    right = parseInt(x / 2),
    middle = parseInt((left + right) / 2)
  while (right >= left) {
    let value = x/middle
      if (value > middle) {
      left = middle + 1
    } else if (value < middle) {
      right = middle - 1
    } else { 
      return middle
    }
    middle = parseInt((left + right) / 2)
  }
  return middle
}