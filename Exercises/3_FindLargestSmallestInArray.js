//How do you find the largest and smallest number in an unsorted integer array?
const array = [10, 1, 24, 3, 5, 2, 190, 4];

/**
 * Notes: (10 Min) -- Passed
 * 1. Sort the array then find the first and last element
 * 2. Keep Track with variables large and small when looping through list
 */

function findLargeSmallQuick(array) {
    let sort = array.sort();
    let result = [];
    result.push(sort[0], sort[sort.length - 1]);
    console.log("findLargeSmall:", result);
    
}
findLargeSmallQuick(array);

function findLargeSmall(array){
    let result = [];
    let large = null;
    let small = null;

    for (let index = 0; index < array.length; index++) {
        let cur = array[index];
        
        if(large === null && small === null){
            large = cur;
            small = cur;
        }

        if(cur > large){
            large = cur;
        }
        if(cur < small){
            small = cur;
        }
    }
    result.push(small, large)
    console.log("findLargeSmall", "small:", small, "large", large);
}
findLargeSmall(array);