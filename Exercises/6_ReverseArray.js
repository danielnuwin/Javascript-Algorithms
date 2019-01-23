//How do you reverse an array?
const array = [1, 2, 3, 4, 5, 6, 7];

/**
 * 
 * Notes:
 * 1. Library Function to reverse it
 * 2. Start at the end of the array then return a new one
 */

 function reverseArray(array){
     let result = [];
     for (let index = array.length - 1; index >= 0; index--) {
        result.push(array[index]);         
     }
     console.log("revArray:", result);
     
 }
 reverseArray(array);