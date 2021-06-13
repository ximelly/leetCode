// 9. 回文数
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

// 示例 1： x = 121  true
// 示例 2： x = -121 false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3： x = 10 false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。
// 示例 4： x = -101 false
 
// 提示： -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x=-101) {
   let y = 0, old = x
   while(x > 0 ){
   	y = y*10 + x%10
   	x= parseInt(x/10)
   }
   return y === old
}