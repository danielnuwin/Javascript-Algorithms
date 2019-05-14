/**
 * Find any numbers that match sum k
 * 
 * loop through list, get first value, check (indexof) if complement exists, 
 * if doesn't, then move on to next value. 
 * o(n) only need one loop 
 * 
 * Qs: does it have duplicates? 
 */

let array = [1, 2, 3, 4, 5];
let k = 10;

function findSum(array, k) {
    let result = []; 
    for (let i = 0; i < array.length; i++) {
        let comp = k - array[i];
        if(array.indexOf(comp) !== -1){
            result.push([array[i], comp]);
        }
        else{
            for (let j = i + 1; j < array.length; j++) {
                comp = comp - array[i];
                if(array.indexOf(comp) !== -1 ){
                    result.push([array[i],array[j], comp]);
                }   
                else{
                    findSum(array.splice(i,j),comp);
                }             
            }
        }
    }
    console.log(result);
    
}

findSum(array,k)