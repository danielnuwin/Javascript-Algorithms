/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
For example, . Our minimum sum is  and our maximum sum is . We would print

notes:
1. Addup first four nums when ordered, 
2. Either rerverse the list or start from backwards until the first index
 */

const array = [1, 3, 5, 7, 9];

function minMaxSum(array) {
    let min = max = 0;
    //sort array
    array.sort();
    for (let i = 0; i < array.length; i++) {
        if (i < 4) {
            min = min + array[i];
        }
        if (i > 0) {
            max = max + array[i];
        }
    }
    return `${min} ${max}`;

}

console.log(minMaxSum(array));
