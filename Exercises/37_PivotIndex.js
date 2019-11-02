/**
 * Find Pivot Index
 *
We define the pivot index as the index where the sum of the numbers
to the left of the index is equal to the sum of the numbers to the right of the index.
If no such index exists, we should return -1.
If there are multiple pivot indexes, you should return the left-most pivot index.

Input: 
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: 
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
 */

function findPivot(array) {
    //Figure out how to get the left and right sums. recursion? 
    //start at 1 index
    let leftHM = {}; //key: index, value is all the values to the left
    let rightHM = {};
    //How to get all the ones preceding it? 
    for (let i = 1; i < array.length; i++) {
        leftHM[i] = addSum(0, i, array)
        rightHM[i] = addSum(i + 1, array.length - 1, array)
    }
    //  console.log(leftHM, rightHM);
    for (let i in leftHM) {
        for (let j in rightHM) {
            if (leftHM[i] === rightHM[j]) {
                return i;
            }
        }
    }
    return -1;
}

function addSum(start, end, array) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += array[i];
    }
    // console.log("addsum:",sum);
    return sum;
}

let sum = [1, 2, 3].reduce((a, b) => a + b);
console.log("sum:", sum);


console.log("findPivot:", findPivot([1, 7, 3, 6, 5, 6]));
console.log("findPivot:", findPivot([1, 2, 3]));

//BETTER PIVOT SOLUTION

function findPivot2(array) {
    let sum = array.reduce((a, b) => a + b);
    let left = 0;
    for (let i = 0; i < array.length; i++) {
        let right = sum - left - array[i];
        if (left === right) {
            return i;
        }
        left += array[i];
    }
    return -1;
}

console.log("findPivot2:", findPivot2([1, 7, 3, 6, 5, 6]));
console.log("findPivot2:", findPivot2([1, 2, 3]));

