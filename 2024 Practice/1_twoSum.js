/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();
        console.log('mp :>> ', mp);

    for (let i = 0; i < nums.length; i++) {
        let diff = Math.abs(target - nums[i]);
        console.log('diff :>> ', diff);

        if (mp.has(diff)) {
            console.log('true :>> ', mp.has(diff));
            return [i, mp.get(diff)]
        }
        //key = value, value = index
        mp.set(nums[i], i)
        console.log('mp :>> ', mp);
    }
};

console.log('twosum :>> ', twoSum([11,15,7,2], 9));