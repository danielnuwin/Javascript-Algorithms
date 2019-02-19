//Rotate array

/*
*Thoughts: 
1. Create new array
2. Rotate in place

thoughts:
take array, loop then add new position of the array
*/

let array = [1,2,3,4,5]
let n = 4; 

function rotate(array, n){
    let result = [];

    for(let i = 0; i < array.length; i++){
        if(i + n >= array.length){
            let newIndex = (i + n - array.length) % array.length;
            result[newIndex] = array[i];
        }
        else{
            result[i+n] = array[i];
        }
    }    

    console.log(result);
}
rotate(array, n);

function rotateIP(array, n){



}