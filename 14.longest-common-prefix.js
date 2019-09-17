/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.74%)
 * Likes:    1444
 * Dislikes: 1370
 * Total Accepted:    493K
 * Total Submissions: 1.5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // let result = "";
    // let status = "pendding";
    // for (let i = 0; ; i++) {
    //     if(status === "stop"){
    //         break;
    //     }
    //     let str = strs[0].toLowerCase().substr(0, i + 1);
    //     for (let j = 0; j < strs.length; j++) {
    //         if (!strs[j].toLowerCase().startsWith(str)) {
    //             status = "stop";
    //             break;
    //         }
    //         if (j === strs.length - 1) {
    //             result = str;
    //         }
    //     }
    // }
    // return result;
    let str = "";
    let set = new Set();
    for (let i = 0; ; i++) {
        strs.forEach((str)=>{
            set.add(str.substr(0,i+1));
        })
        if(set.size===i+1){
            str = strs[0].substr(0,i+1);
        } else {
            break;
        }
    }
    return str;
};

