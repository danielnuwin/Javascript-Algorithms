//How do you find the duplicate number on a given integer array?
const array = [1, 1, 2, 3, 4, 4, 5, 6, 7];

/**
 * Notes: (5min -- PASSED)
 * 1. Use HM, add values to it. Find Object.values() that is > 1
 * 2. Sort the array, check if the preceding element is the same, if so then add to the return array
 */

function findDuplicates(array) {
    let result = [];
    let sorted = array.sort();

    for (let i = 0; i < sorted.length; i++) {
        let current = sorted[i];
        for (let j = i + 1; j < sorted.length; j++) {
            let next = sorted[j];

            if (current === next) {
                result.push(current);
            }
        }
    }

    console.log("findDuplicates: ", result);

}

findDuplicates(array);

//Better Solution with only one loop
//Notes: Use HM if already exists, then add to array. 

function findDuplicatesHM(array) {
    //Sorted does not matter
    let result = [];
    let hm = {};

    for (let index = 0; index < array.length; index++) {
        
        if(!hm[array[index]]){
            hm[array[index]] = array[index];
        }
        else {
            //if exists
            result.push(array[index]);
        }
    }
    console.log("findDuplicatesHM: ", result);

} 

findDuplicatesHM(array);
