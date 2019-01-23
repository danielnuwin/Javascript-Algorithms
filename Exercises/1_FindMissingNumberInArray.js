//1) How do you find the missing number in a given integer array of 1 to 100?
const array = [1, 2, 3, 5, 6, 7, 8, 10];

/**
 * Notes: FAILED (11mins)
 * 1. Can loop through 1 to 100 and check if given element is indexOf the array
 * matching. o(n^2)
 * 2. Qs: is it sorted? 
 */

 function findMissingArray(array){
    let result = [];
    for (let index = 1; index <= 10; index++) {
        if(array.indexOf(index) === -1){
            result.push(index);
        }        
    }
    console.log("findMissingArray", result, "---FAILED");
    
 }

 findMissingArray(array);