// 58. 最后一个单词的长度
// 给你一个字符串 s，由若干单词组成，单词之间用单个或多个连续的空格字符隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 示例 1：s = "Hello World"    5
// 示例 2：s = " "              0

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s = " " ) {
  let num = 0
  for(let i = s.length - 1; i >= 0; i--){
    if(s.charAt(i) !== ' '){
      num++
    }else if(num !== 0){
      break
    }
  }
  return num
}
