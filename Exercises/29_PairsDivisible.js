/**
 * Check if an array can be divided into pairs whose sum is divisible by k
Given an array of integers and a number k, write a function that returns true if given array can be divided into pairs such that sum of every pair is divisible by k.
Examples:

Input: arr[] = {9, 7, 5, 3}, 
           k = 6
Output: True
We can divide array into (9, 3) and
(7, 5). Sum of both of these pairs 
is a multiple of 6.

Input: arr[] = {92, 75, 65, 48, 45, 35}, 
           k = 10
Output: True
We can divide array into (92, 48), (75, 65) 
and (45, 35). Sum of all these pairs is a
multiple of 10.

Input: arr[] = {91, 74, 66, 48}, k = 10
Output: True

Input: arr[] = {91, 74, 66, 48}, k = 13
Output: False

Notes:
1. 2 Loops, to find all pairs, if a pair is divisble by the target k, the return true. 
 */

function pairsDivisible(array, k) {

    for (let i = 0; i < array.length; i++) {
        let first = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let sec = array[j];
            let pairCheck = (first+sec) % k;            
            // return pairCheck === 0 ? true : contine; 
            if(pairCheck === 0){
                console.log(first, sec);
                return true;
            }
        }
    }

    return false;
}

console.log("1)",pairsDivisible([9, 7, 5, 3], 6));
console.log("2)",pairsDivisible([92, 75, 65, 48, 45, 35], 10));
console.log("3)",pairsDivisible([91, 74, 66, 48], 13));
