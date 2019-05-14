/**
 * Counting Triplets 
 * Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given  as an integer.
 * input: [1,4,16,64], r=4
 * output: 2
 * explain: indices (0,1,2), (1,2,3) where [1,4,16], [4,16,64] are multiples of 4
 * 
 * note:
 * if value === 1, then that is an index
 * if value % ratio === 0, then index
 * do for the first three (do with count, or set array length(while array.length <= 3)
 * Two for loops, compare first with rest
 * recursion 
 * 
 * questions:
 * 1. is it in order? 
 * 
 * Issues: still continue on the same loop but skipping over
 */

function countTriplets(array, r) {
    let count = 0;
    let finalCount = 0;
    let result = new Array(3);

    for (let i = 0; i < array.length; i++) {
        // console.log("break here START?????", i);

        let cur = array[i]
        if (cur === 1) {
            result.push(cur);
            // console.log("cur:", cur);
            count++
        }
        for (let j = i + 1; j < array.length; j++) {
            let next = array[j];
            let checkRatio = next % r;
            // console.log("break here EDDDDD?????", next, j);

            if (checkRatio === 0) {
                // console.log("checkRatio", next);
                count++;
                // console.log("count:",count);

            }
            if (count === 3) {
                finalCount++;
                // console.log("Final ++++");
                count = 0;
                break;
            }
        }
    }

    console.log("final:", finalCount);

}
countTriplets([1, 4, 16, 64], 4); //2
countTriplets([1, 2, 2, 4], 2); //2
countTriplets([1, 3, 9, 9, 27, 81], 3); //6

//Hashmap 
function cthm(array, r) {
    //single pass of array to create combos 
    let hm = {};
    for (let i = 0; i < array.length; i++) {

        if (!hm[array[i]]) {
            let newArray = [array[i]];
            hm[array[i]] = newArray;
        }

    }
    console.log("cthm", hm);

}

cthm([1, 4, 16, 64], 4);

function countTriplets2(arr, r) {
    let dict = {};
    let count = 0;
    arr.forEach(val => {
        if (!dict[val]) { dict[val] = { s1: 0, s2: 0, s3: 0 }; }
        if (!dict[val * r]) { dict[val * r] = { s1: 0, s2: 0, s3: 0 }; }        
        count += dict[val].s3;
        // r === 1 ? dict[val].s1 = 1 : dict[val].s1 += 1;
        dict[val * r].s3 += dict[val].s2;
        dict[val * r].s2 += 1;
    });
    console.log(dict);
    
    console.log("ct2", count);
}

countTriplets2([1, 3, 9, 9, 27, 81], 3); //6
