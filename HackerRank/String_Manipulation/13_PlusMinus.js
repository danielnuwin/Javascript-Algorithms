/**
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
 *  Print the decimal value of each fraction on a new line.
3/6 positive, 2/6 negative, 1/6 0  
input: -4 3 -9 0 4 1         
output: 
0.500000 positive
0.333333 negative
0.166667 zero

notes:
1. 3 variables for each case / array size
2. loop and check for each case
 */

const array = [-4,3,-9,0,4,1];

function plusMinus(array) {
    let pos = 0;
    let neg = 0;
    let zer = 0;
    const size = array.length;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            pos++;
        }
        else if(array[i] < 0){
            neg++;
        }
        else{
            zer++
        }
    }
    console.log(`${pos/size}\n${neg/size}\n${zer/size}`);
}
plusMinus(array);