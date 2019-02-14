//10. There is an array with every element repeated twice except one.
// Find that element? (solution)
let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8];

/**
 * Notes (9:25-)
 * 
 * 1. using HM with count to check what is the single count.
 * 2. Sort List if not, the if next element not equal then return it
 * 3. Anything on Index?
 */

//HM
function findSingle(array) {
    let single = null;
    let hm = {};
    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = 1;
        }
        else {
            hm[array[i]] = hm[array[i]] + 1;
        }
    }
    //Not needed
    let values = Object.values(hm);
    let index = values.filter(val => val === 1);
    console.log(index);
        
    //i is the key not the index
    for(let i in hm){
        if(hm[i] === 1){
            single = i;
        }
    }
    return single;
}
console.log("findSingle", findSingle(array));
