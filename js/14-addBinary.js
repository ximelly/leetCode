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
var addBinary = function (a = "1111", b = "1") {
  // let add = 0,
  //   maxLength = Math.max(a.length, b.length),
  //   newArr = new Array(maxLength)
  // for (let i = 0; i <= maxLength - 1; i++) {
  //   let aItem = a.charAt(a.length - 1 - i) || '0',
  //     bItem = b.charAt(b.length - 1 - i) || '0',
  //     sum = add + (+aItem) + (+bItem)
  //   newArr[maxLength - 1 - i] = sum % 2 
  //   add = parseInt(sum / 2)
  //   if (i === maxLength - 1 && add) { 
  //     newArr.unshift(add)
  //   }
  // }
  // return newArr.join('')


  let add = 0,
    newArr = [],
    aIndex = a.length - 1,
    bIndex = b.length - 1
  while (aIndex >= 0 || bIndex >= 0 || add) {
    let aItem = +(a[aIndex--] || '0'),//获取到aItem后aIndex减一
      bItem = +(b[bIndex--] || '0'),
      sum = aItem + bItem + add
    add = parseInt(sum / 2)//获取进位数
    newArr.push(sum % 2)//获取进位数余数
  }
  return newArr.reverse().join('')
};