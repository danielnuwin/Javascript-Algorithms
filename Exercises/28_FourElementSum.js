/**
 * Find four elements a, b, c and d in an array such that a+b = c+d
Given an array of distinct integers, find if there are two pairs (a, b) and (c, d) such that a+b = c+d, and a, b, c and d are distinct elements. 
If there are multiple answers, then print any of them.

Example:

Input:   {3, 4, 7, 1, 2, 9, 8}
Output:  (3, 8) and (4, 7)
Explanation: 3+8 = 4+7

Input:   {3, 4, 7, 1, 12, 9};
Output:  (4, 12) and (7, 9)
Explanation: 4+12 = 7+9

Input:  {65, 30, 7, 90, 1, 9, 8};
Output:  No pairs found
Expected Time Complexity: O(n2)

Notes: (Similar to two sum)
1. Use HM to store all the pairs. Key = Sum, value = [pair]
2. Check if first pair doesnt exists, if not then add it
3. if sum exists, then find it and return it
 */

function findPairs(array) {
    let hm = {};
    let result = [];
    //Combine the first of index and with the rest of the list
    for (let i = 0; i < array.length; i++) {

        let cur = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let next = array[j];
            let pair = cur + next;

            if (!hm[pair]) {
                hm[pair] = [[cur, next]];
            }
            else {
                let set = [cur, next];
                let addSet = hm[pair];
                addSet.push(set);
                hm[pair] = addSet;
                // hm[pair] = hm[pair].concat([cur, next]);   
            }
        }
    }

    //Shows all pairs
    // console.log(hm); 
    //Return only pairs in an array
    for (obj in hm) {
        if (hm[obj].length > 1) {
            result.push(hm[obj]);
        }
    }
    
    return result.length > 0 ? result : "No Pairs";
}

console.log("1)", findPairs([3, 4, 7, 1, 2, 9, 8]));
console.log("2)",findPairs([3, 4, 7, 1, 12, 9]));
console.log("3)",findPairs([65, 30, 7, 90, 1, 9, 8]));
console.log("4)",findPairs([1,3,4,0]));
