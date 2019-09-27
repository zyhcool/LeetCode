/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.01%)
 * Likes:    3386
 * Dislikes: 159
 * Total Accepted:    704.8K
 * Total Submissions: 1.9M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = new Map([
        ["{", "}"],
        ["(", ")"],
        ["[", "]"],
    ]);
    const arr = s.split("");
    let result = true;
    let emp = [];
    for (let i = 0; i < arr.length; i++) {
        if (!!map.get(arr[i])) {
            emp.push(arr[i]);
            continue;
        } else if (map.get(emp.pop()) !== arr[i]) {
            result = false;
            break;
        } else {
            continue;
        }
    }
    if (result && emp.length !== 0) {
        result = false;
    }
    return result
};

