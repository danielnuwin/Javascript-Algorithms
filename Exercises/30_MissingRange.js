/**
Find missing elements of a range
Given an array arr[0..n-1] of distinct elements and a range [low, high], find all numbers that are in range, but not in array. The missing elements should be printed in sorted order.

Examples:

Input: arr[] = {10, 12, 11, 15}, 
       low = 10, hight = 15
Output: 13, 14

Input: arr[] = {1, 14, 11, 51, 15}, 
       low = 50, hight = 55
Output: 50, 52, 53, 54
notes:
1. Find the missing numbers that are within the range, but not in the array. 
Steps:
1. The the Ranges between Low and High with a for Loop, check if any of the ranges exist in the Array, if it does, then ignore it. 
 */

function missingRange(array, low, high){

    let result = "";

    for(let i = low; i <= high; i++){
        
        if(array.indexOf(i) === -1){
            result = result + i + ", "; 
        }
    }
    return result;
}

console.log(missingRange([10, 12, 11, 15], 10, 15));
console.log(missingRange([1, 14, 11, 51, 15], 50, 55));
