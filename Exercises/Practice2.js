//Rotate array

/*
*Thoughts: 
1. Create new array
2. Rotate in place

thoughts:
take array, loop then add new position of the array
*/

let array = [1,2,3,4,5]
let n = 4; 

function rotate(array, n){
    let result = [];

    for(let i = 0; i < array.length; i++){
        if(i + n >= array.length){
            let newIndex = (i + n - array.length) % array.length;
            result[newIndex] = array[i];
        }
        else{
            result[i+n] = array[i];
        }
    }    

    console.log(result);
}
rotate(array, n);

/**
 * 
 */

 let s = "abracadabra";
 let pat = "abr";

 //Return the indices of the start of the pattern if exists

 function findPat(s, pat){
    //Variables
    let result = [];
    //Loop by substring of 3 chars and if it matches the pattern, then add index to array. 

    for(let i = 0; i < s.length; i++){
        let cur = s.substring(i, i + 3);
        if(cur !== undefined && cur === pat){
            result.push(i);
        }
    }

    return result;
 }

 console.log(findPat(s, pat));
 