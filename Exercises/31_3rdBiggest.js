/**
 * Find the 3rd biggest number in the array.
 * Questions: 
 * 1. Sorted?
 * 
 * Tasks: Loop through array, create 3 vars to track largest, second, third. 
 * 
 */

let array = [0, 8, 6, 3, 66, 42, 3, 6, 3, 1, 8];

function thirdLarge(array) {

    let first = null;
    let second = null;
    let third = null;
    if (array.length >= 3) {
        for (let i = 0; i < array.length; i++) {
            let cur = array[i];

            if (first === null || second === null || third === null) {
                first = cur;
                second = cur;
                third = cur;
            }
            else if (cur > first) {
                second = first;
                first = cur;
            }
            else if (cur > second) {
                third = second;
                second = cur;
            }
            else {
                third = cur;
            }

        }
    }

    return third;

}

console.log(thirdLarge(array)); //8
console.log(thirdLarge([4, 30, 2])); //1
console.log(thirdLarge([4, 30])); //null

function thirdBiggest(array){
    let sort = array.sort((a,b) => b - a);
    console.log(sort[2]);
}