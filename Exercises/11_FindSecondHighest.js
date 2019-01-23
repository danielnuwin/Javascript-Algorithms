//How do you find the second highest number in an integer array? 
let array = [1, 4, 2, 3, 1, 7, 8, 5];

/**
 * Notes: 8:21-8:24(4min)
 * 
 * 1. Sorted? Not Sorted? 
 * 2. Variables to keep track of the highest, the push down to second when the new
 * highest if found
 */

 function findSecond(array){
     let shigh = null;
     let high = null;

     for (let index = 0; index < array.length; index++) {
        let cur = array[index];
        if(shigh === null && high === null){
            shigh = cur;
            high = cur;
        }
        //high
        if(cur > high){
            shigh = high;
            high = cur;
        }
     }
     return shigh;
 }
 console.log("findSecond:", findSecond(array));
 