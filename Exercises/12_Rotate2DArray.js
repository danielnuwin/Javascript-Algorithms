// Rotate clockwise a 2D array. and rotate n times
let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

/**
 * Notes: 9:05-09:15(10min)
 * 1. return
 * 7,4,1 --> Last Index, first element
 * 8,5,2
 * 9,6,3
 * Create 3 new arrays
 * -first row the first of every index starting from back
 * 
 * 
 */

let array_13 =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
/**
* Thoughts:
* 1) Return new 2D array
* 2) Start at the end of the array, take 0 index and place in 0,0, 
*/

function Rotate2DArray(array) {
    let result = [];
    let first = [];
    let second = [];
    let third = [];

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < array[i].length; j++) {
            //first row
            if (j === 0) {
                first.push(array[i][j]);
            }
            //secnd row
            if (j === 1) {
                second.push(array[i][j]);
            }
            //third row
            if (j === 2) {
                third.push(array[i][j]);
            }
        }
    }
    result.push(first, second, third);
    // console.log("rotate", result);
    return result;
}
Rotate2DArray(array_13);
function rotate2DArrayNtimes(array, n) {
    if (n % 4 === 0) {
        return array;
    }
    else if (n === 0) {
        return Rotate2DArray(array);
    }
    else {
        return rotate2DArrayNtimes(Rotate2DArray(array), n - 1);
    }
}
console.log("13)", rotate2DArrayNtimes(array_13, 3));
