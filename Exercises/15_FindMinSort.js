
//Sorting algorithm
let array13 = [3, 6, 4, 7, 8, 2, 11, 1, 5];

//MERGE SORT (Divide and Conquer) O(nlogn)
//Selection Sort (Swap) (O(n^2))
//Note: find min then add to result array, then remove it
//1. find min in array, 2. delete that from array 3. add to result array
function findMin(array) {
    let min = null;
    // console.log("findminarray",array);

    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        // console.log("ccurrr",cur);
        
        if (min === null) {
            min = cur;
        }
        if (cur < min) {
            min = cur;
        }
    }
    return min;
}

function sort(array) {
    let result = [];
    let min = null;

    while (array.length > 0) {
        
        min = findMin(array);
        // console.log("min:", min);

        // min = Math.min(...array); //works as well
        result.push(min);
        let minIndx = array.indexOf(min);
        array.splice(minIndx, 1);
    }

    console.log("sorted:", result);

}
sort(array13);