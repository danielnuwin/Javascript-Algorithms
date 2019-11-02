/**
 * Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.
 * Ex:
 * input: 1,2,3,4, k=2
 * output: 3,4,1,2
 * 
 * notes:
 * -like a carousel, will always return the length of array - 2
 * -have to move entire indexes at once if its inplace, meaning you need temp variables
* ****!!!!!!!! You swamp back one by one until the end. 
start [1,2,3,4,5], swamp 5 and 4, then 5 and 3, etc...
    check: [ 1, 2, 3, 5, 4 ]
    check: [ 1, 2, 5, 3, 4 ]
    check: [ 1, 5, 2, 3, 4 ]
    check: [ 5, 1, 2, 3, 4 ]
    check: [ 5, 1, 2, 4, 3 ]
    check: [ 5, 1, 4, 2, 3 ]
    check: [ 5, 4, 1, 2, 3 ]
    check: [ 4, 5, 1, 2, 3 ]
 */
let array = [1, 2, 3, 4, 5];
let k = 2;

//Not in place
function rotate(array, k) {

    let result = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        let move = i + k;
        //if move is > length of array
        if (move >= array.length) {
            //Formula > Move - array.length is the new index bc you restart the array with the difference. 
            let indx = move - array.length;
            result[indx] = array[i];
        }
        else {
            result[move] = array[i];
        }
    }

    return result;

}

console.log(JSON.stringify(rotate(array, k)));

//In Place

function rotateIP(array, k) {
    //Rotate One by one for the amount of K. 

    for (let i = 0; i < k; i++) {
        for (let j = array.length - 1; j > 0; j--) {
            let temp = array[j]; // first index
            array[j] = array[j - 1]; // index before
            array[j - 1] = temp;
        }
    }
    return array;
}

console.log("IP", JSON.stringify(rotateIP(array, k)));
