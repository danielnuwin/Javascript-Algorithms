//Find the count of maximum numbers
let x = [1, 2, 2, 4, 2, 4]

/**
 * should return 2
 * find the max, then count how many times it occurs. Need two loops. 
 * is it sorted? 
 * 1. Sort it. Loop backwards until the next does not equal current. 
 * 2. Function to find Max, then Function to loop and count occurences of max
 * 3. Use Hasmap to count all values. then return the max. 
 */

 //2
function countMax2(array) {
    let maxCount = 0;
    let max = null;
    //find max
    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        if (max === null) {
            max = cur;
        }
        if (cur > max) {
            max = cur;
        }
    }

    for(let i = 0; i < array.length; i++){
        let cur = array[i];
        if(cur === max){
            maxCount++
        }
    }

    return maxCount;
}

console.log("countMax:", countMax2(x));

function countMax3(array){
    let hm = {};
    let countMax = 0;
    let maxNum = null;

    for(let i = 0; i < array.length; i++){
        let cur = array[i];
        
        //Track Max Num
        if(maxNum === null){
            maxNum = cur;
        }
        if(cur > maxNum){
            maxNum = cur;
        }

        //Track Count
        if(!hm[cur]){
            hm[cur] = 1;
        }
        else{
            hm[cur] = hm[cur] + 1; 
        }
    }

    //Get Max Count by using maxNum as key in HM
    countMax = hm[maxNum];
    return countMax; 
}

console.log("countMax3:", countMax3(x));
