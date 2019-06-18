/**
 * write a program to find the most frequent item of an array.
 *  example: let x = [8,3,8,4,9,2,8,9,8,5] and expected output 8(4 times)
 */

function freq(array) {
    //do it one pass 
    let hm = {};
    let hcount = 1; 
    let num = "All values";

    for (let i = 0; i < array.length; i++) {
        if(!hm[array[i]]){
            hm[array[i]] = 1; 
        }
        else{
            hm[array[i]] = hm[array[i]] + 1; 
            if( hm[array[i]] > hcount){
                hcount = hm[array[i]];
                num = array[i];
            }
        }
    }
    return `${num} with count: ${hcount}`;
}
const x = [8,3,8,4,9,2,8,9,8,5,5,5,5,5];
const y = [1,2,3,4,5,6];
console.log(freq(x));

// console.log(String.fromCharCode("z"));
console.log("*".charCodeAt(0));
