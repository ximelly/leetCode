// 67. 二进制求和
// 给你两个二进制字符串，返回它们的和（用二进制表示）。
// 输入为 非空 字符串且只包含数字 1 和 0。

// 示例 1:  a = "11"    b = "1"    "100"
// 示例 2:  a = "1010"  b = "1011"  "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a = "1111", b = "1111") {
  let add = 0,
    maxLength = Math.max(a.length, b.length),
    newArr = new Array(maxLength)
  for (let i = 0; i <= maxLength - 1; i++) {
    let aIndex = a.length - 1 - i,
      bIndex = b.length - 1 - i,
      aItem = aIndex >= 0 ? +a.charAt(aIndex) : 0,
      bItem = bIndex >= 0 ? +b.charAt(bIndex) : 0,
      sum = add + aItem + bItem
    newArr[maxLength - 1 - i] = sum >= 2 ? sum - 2 : sum 
    add = sum >= 2 ? 1 : 0 
    if (i === maxLength - 1 && add) { 
      newArr.unshift(1)
    }
  }
  return newArr.join('')
};