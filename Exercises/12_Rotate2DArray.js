// Rotate clockwise a 2D array. 
let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

/**
 * Notes: 9:05-09:15(10min)
 * 1. return
 * 7,4,1 --> Last Index, first element
 * 8,5,2
 * 9,6,3
 * Create 3 new arrays
 * -first row the first of every index starting from back
 */

 function rotate(array){
    let row1 = [];
    let row2 = [];
    let row3 = [];
    let result = [];

    for(let i = array.length - 1; i >= 0; i--){
        
        
        //Loop into index array
        for(j = 0; j < array[i].length; j++){            
            if(j === 0){
                row1.push(array[i][j]);
            }
            if(j === 1){
                row2.push(array[i][j]);
            }
            if(j === 2){
                row3.push(array[i][j]);
            }
        }

    }
    result.push(row1,row2,row3);
    return result;

 }

 console.log("rotate: ", rotate(array));
 