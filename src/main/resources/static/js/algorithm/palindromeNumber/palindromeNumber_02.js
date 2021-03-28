/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let str1 = x.toString();
    let str2 = x.toString().split("").reverse().join("");

    if(str1 === str2)
        return true;
    else
        return false;
};

console.log(isPalindrome(121212121));