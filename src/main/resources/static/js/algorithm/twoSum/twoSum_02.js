/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum_02 = function(nums, target) {
    let diff = "";

    for (let i = 0; i < nums.length; i++){
        diff = nums.indexOf(target - nums[i]);

        if (diff != -1  && (diff != i)) {
            return [i, diff]
        } else {
            continue;
        }

    }
};

console.log(twoSum_02([1,2,3,4,5], 6));