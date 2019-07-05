/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.37%)
 * Likes:    2251
 * Dislikes: 3456
 * Total Accepted:    727K
 * Total Submissions: 2.9M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // 第一种 92ms 35.9MB
    if (x >= (2 ** 31) || x < -(2 ** 31)) {
        return 0;
    } else {
        let a = Number.parseInt(`${x}`.split("").reverse().join(""), 10);
        if (a >= (2 ** 31) || a < -(2 ** 31)) {
            return 0;
        }
        return x >= 0 ? a : -a;
    }
};

