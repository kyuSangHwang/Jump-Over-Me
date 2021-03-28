/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(num) {

    if (num < 0)
        return false;

    num = num.toString();
    let start = 0;
    let end = num.length - 1;

    while (start < end) {
        if (num[start] !== num[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
};

console.log(isPalindrome(1221));