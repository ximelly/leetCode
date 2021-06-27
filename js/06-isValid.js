// 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1： s = "()"     true
// 示例 2： s = "()[]{}" true
// 示例 3： s = "(]"     false
// 示例 4： s = "([)]"   false
// 示例 5： s = "{[]}"   true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s="(") {
  if(s.length % 2 !== 0) return false
  let arr = [], obj = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for (let i = 0; i < s.length; i++) { 
    let item = s[i]
    //如果下一个是右括号，则如果前一个跟它不匹配，即为false
    if (Object.keys(obj).includes(item)) {
      if (!arr[arr.length - 1] || arr[arr.length - 1] !== obj[item]) {
        return false
      } else {
        arr.pop()
      }
    } else { 
      arr.push(item)
    }
  }
  return arr.length === 0
};