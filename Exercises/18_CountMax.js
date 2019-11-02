//Find the count of maximum numbers
let nineteen = [1, 2, 2, 4, 2, 4]; //2
let nineteen_2 = [1, 2, 2, 4, 2, 4, 4, 4, 4]//4

/**
 * Thoughts:
 * 2. HM of all the num counts also checking the max count too then index return max value.
 */
function MaxCount(array) {
    let hm = {};
    let maxCount = 1;
    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = 1;
            maxCount = 1;
        }
        else {
            hm[array[i]] = hm[array[i]] + 1;
            if (hm[array[i]] > maxCount) {
                maxCount = hm[array[i]];
            }
        }
    }
    for (let obj in hm) {
        if (hm[obj] === maxCount) {
            console.log("19)", obj);
        }
    }
}
MaxCount(nineteen);
MaxCount(nineteen_2);