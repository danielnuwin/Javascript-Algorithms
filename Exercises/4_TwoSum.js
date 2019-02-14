//How do you find all pairs of an integer array whose sum is equal to a given number?
const array = [10, 1, 24, 3, 5, 2, 190, 4];
const target = 34;

/**
 * Note: (8min)
 * 1. Use HM, to check if its complement exists
 * 2. Take the target and you subtract current index. Check if the comp exists in the array. 
 *
 */

 //No Duplicates
function twoSum(array, target) {
    let result = [];
    let hm = {};

    for (let index = 0; index < array.length; index++) {
        let comp = target - array[index];
        if (!hm[array[index]]) {
            hm[array[index]] = array[index];
        }

        if(hm[comp]){
            result.push([array[index], comp]);
        }
    }

    console.log("twoSum:", result);
    
}
twoSum(array, target);

//Has Duplicates
function twoSumIndex(array, target){
    let result = [];
    
    for(let i = 0; i < array.length; i++){

        let comp = target - array[i];

        if(array.indexOf(comp) !== -1 ){            
            result.push([array[i], array[array.indexOf(comp)]]);
        }
    }
    return result;
}

console.log(twoSumIndex(array, target));
