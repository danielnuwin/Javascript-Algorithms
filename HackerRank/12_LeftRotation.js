/**
 * A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, 
 * if  left rotations are performed on array , then the array would become .

Given an array  of  integers and a number, , perform  left rotations on the array.
 Return the updated array to be printed as a single line of space-separated integers.

 Notes:
 1. Switch In place or create new array?
 2. Multiple of N % array.size = 0, then return array. 


 */

 function rotateLeft(rot, array){

    let result = [];
    let rotate = rot % array.length;
    
    if(rotate === 0){
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        //index i 
        let newIndex = i - rotate;

        if(newIndex < 0){
            newIndex = array.length + newIndex;
        }
        result[newIndex] = array[i];
    }

    return result;
 }
 const array = [1,2,3,4,5];

 console.log(rotateLeft(1, array));
 console.log(rotateLeft(2, array));
 console.log(rotateLeft(3, array));
 console.log(rotateLeft(10, array));
 console.log(rotateLeft(11, array));

//DOES NOT WORK
 function rotateLeft2(array, n) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (i + n >= array.length) {
            let newIndex = (i + n - array.length) % array.length;
            result[newIndex] = array[i];
        }
        else {
            result[i + n] = array[i];
        }
    }    

    return result;
}

//  console.log(rotateLeft2(array, 1));
//  console.log(rotateLeft2(array, 2));
