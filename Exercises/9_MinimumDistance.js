/**
 * 
Given an array of integers, find and print the minimum absolute difference between any two elements in the array.
 For example, given the array  we can create  pairs of numbers:  and . 
 The absolute differences for these pairs are ,  and . The minimum absolute difference is . * 
 */

let array = [3, -7, 0];
let array2 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];

function findMinDistance(array) {
    let min = null;

    for (let i = 0; i < array.length; i++) {
        let cur = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let next = array[j];
            let dif = Math.abs(cur - next);

            if (min === null) {
                min = dif;
            }
            if (dif < min) {
                min = dif;
            }
        }

    }
    return min;
}

console.log(findMinDistance(array)); //3
console.log(findMinDistance(array2)); //1
