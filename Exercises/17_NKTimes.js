/**
 * 
 * Given an array of of size n and a number k, find all elements that appear more than n/k times? (solution)
Another tough array based coding questions from Interviews. You are given an array of size n,
 find all elements in array that appear more than n/k times. For example, 
 if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4, then the output should be [2, 3]. 
 Note that size of array is 8 (or n = 8), so we need to find all elements that appear more than 2 (or 8/4) times. 
 There are two elements that appear more than two times, 2 and 3.

Notes: 7:02
1. Find all elements that occur more than two times. 
 */

let array = [3, 1, 2, 2, 1, 2, 3, 3];
let k = 4;

function nkTimes(array, k) {
    let hm = {};
    let result = [];
    let div = array.length / k;

    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = 1;
        }
        else {
            hm[array[i]] = hm[array[i]] + 1;
            
            if(hm[array[i]] > div){
                result.push(array[i]);
            }
        }
    }

    return result;
}

console.log("nktimes:", nkTimes(array, k));
