/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is 17 - 15 = 2. 

 */

//Thoughts 
//1st Diagnal = 0, 1, 2; 2nd Diagnal = 2, 1, 0 --> Similar first row[0, 2] second row [1] x2, third row[2, 0]
//two for loops, first loop grab 0, 2, second 1, third 2,0

function diagonalDifference(arr) {
    //variables: Result, leftDiag, rightDiag
    let ld = 0;
    let rd = 0;

    // //Hard Coded
    let leftDiag = arr[0][0] + arr[1][1] + arr[2][2];
    let rightDiag = arr[0][2] + arr[1][1] + arr[2][0];

    let dd = Math.abs(leftDiag - rightDiag);
    console.log("dd:", dd);


    //double loop 
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            //First Row
            if (i === 0) {
                if (j === 0) {
                    ld = ld + arr[i][j];
                }
                else if (j === 2) {
                    rd = rd + arr[i][j];
                }
            }
            //Second Row
            if (i === 1) {
                if (j === 1) {
                    ld = ld + arr[i][j];
                    rd = rd + arr[i][j];
                }
            }
            //Third Row
            if (i === 2) {
                if (j === 0) {
                    rd = rd + arr[i][j];
                }
                else if (j === 2) {
                    ld = ld + arr[i][j];
                }
            }
        }
    }

    return Math.abs(ld - rd);
}

function diagnalDifference2(arr) {
    let primaryDiag = 0
    let secondDiag = 0
    let length = arr.length
    
    for (var i = 0, indexLength = length - 1; i < length; i++) {
        primaryDiag += arr[i][i]
        console.log("pd:",i,i);
        
        secondDiag += arr[i][indexLength]
        console.log("sd:",i, indexLength);

        indexLength -= 1
    }

    return Math.abs(primaryDiag - secondDiag)
}
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let array2 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

// console.log(diagonalDifference(array2));
console.log(diagnalDifference2(array2));