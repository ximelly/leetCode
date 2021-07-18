// 28.实现 strStr()
// 实现 strStr() 函数。

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

// 说明：
// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

// 示例 1： haystack = "hello", needle = "ll"  2
// 示例 2： haystack = "aaaaa", needle = "bba"   -1
// 示例 3： haystack = "", needle = ""  0
// 示例 4： haystack = "mississippi", needle = "issip"  4
// 示例 4： haystack = "aaa", needle = "aaaa"  -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr (haystack = 'hello', needle = 'llo') { 
  if (needle.length === 0) return 0
  let haysIndex = -1
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      haysIndex = i
      break
    }
  }
  return haysIndex
}