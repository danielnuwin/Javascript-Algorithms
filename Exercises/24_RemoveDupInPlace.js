//Remove Duplicates from array
/**
 * Notes:
 * 1. Is it sorted? 
 * 2. 
 * Tasks:
 * 
 */
let array = [1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 88];

//Using HashMap, Two For Loops, o(n)
function removeDup(array){
    let hm = {};
    let result = [];

    for(let i = 0; i < array.length; i++){
        hm[array[i]] = array[i];
    }

    for(obj in hm){
        result.push(hm[obj]);
    }

    return result;
}

console.log(removeDup(array));

//Ordered Array
function removeDupIP(array){
//Use two loops, the first for the first element, second for the rest of the list, keep track of the count to remove
  
for(let i = 0; i < array.length; i++){
        let cur = array[i]
        let count = 0;
        for(let j = i + 1; j < array.length; j++){
            let next = array[j];

            if(next === cur){
                count++;
            }
        }

        if (count > 0){
            array.splice(i, count);
        }
    }

    return array;
}

console.log(removeDupIP(array));

//Using ES6
console.log([...new Set(array)]);

//Using Splice In Place with one loop
let array2 = [1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 88];

function remDupSlice2(array) {

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let next = array[i + 1];

        if (current === next) {
            array.splice(next, 2);//Not sure why its 2???
        }
    }
    console.log("remDupSlice2", array);

}

remDupSlice2(array2);