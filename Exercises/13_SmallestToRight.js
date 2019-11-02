//Find How many smaller numbers to the right of each number
let array = [3, 6, 2, 7, 3, 9, 3, 1];

/**
 * Notes: 9:16-9:21(5min)
 * 1. second loop checks the preceding array for smaller
 * 2. Using a count to check how many ints are smalller than the current.
 * Returns:
 *  [ 2, 4, 1, 3, 1, 2, 1, 0 ]
 */

 function findSmaller(array){
     let result = [];

     for(let i = 0; i < array.length; i++){
         let cur = array[i];
         let count = 0; 
         for(let j = i + 1; j < array.length; j++){
             let next = array[j];
             if(cur > next){
                 count++;
             }
         }
         result.push(count);
     }
     return result;
 }
 console.log("findSmaller", findSmaller(array));
