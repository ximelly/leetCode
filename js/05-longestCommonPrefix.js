// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
 
// 示例 1： strs = ["flower","flow","flight"]  "fl"
// 示例 2： strs = ["dog","racecar","car"]      ""
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix (strs = ["dog","racecar","car"]) {
  if (strs.length == 0) { return '' }
  if (strs.length == 1) { return strs[0] }
  
  //找到最短的字符串
  let lens = strs.map(item => item.length),
    minLen = Math.min.apply(null, lens),
    minIndex = lens.indexOf(minLen)
  
  let common = getCommonPre(strs[0], strs[minIndex])
  for (let i = 1; i < strs.length; i++) {
    if (i == minIndex) continue
    common = getCommonPre(common, strs[i])
  }
  return common
}
// 获取两个字符串的公共前缀
function getCommonPre(str1, str2){ 
  let preIndex = 0, next = true
  while (next) { 
    let firstItem = str1[preIndex], 
      curItem = str2[preIndex]
    if (!firstItem || !curItem || firstItem !== curItem) {
      next = false
    } else { 
      preIndex++
    }
  }
  return str1.slice(0, preIndex)
}