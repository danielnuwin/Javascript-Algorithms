//Removing duplicates in an array without library function
let array = [1, 1, 2, 3, 4, 4, 5, 6, 7];

/**
 * Notes: (10min) --Passed
 * 1. You can sort the array then if the next element is the same then remove
 * 2. Use HM bc of unique elements but uses two loops
 */

 function remDupHM(array){
    let result = [];
    let hm = {};
    for (let index = 0; index < array.length; index++) {
        if(!hm[array[index]]) {
            hm[array[index]] = array[index];
        }       
    }
    for(let obj in hm){
        result.push(hm[obj]);
    }

    console.log("remDup:", result);
    
 }
 remDupHM(array);

 //Using Splice
 function rmDupSplice(array){
    for (let index = 0; index < array.length; index++) {
        const next = array[index +1];
        
        if(array[index] === next){
            array.splice(index, 1);
        }
    }
    return array;
 }

 console.log(rmDupSplice(array));
 