/**
 * Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes jumps while the second takes .

Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
 * 
 */


function jumpingOnClouds(c) {
    //Loop until end of array
    //1 find all 1s in the array, then create alg to avoid them
    //2 Jump 2, if it isn't 1, if it is then jump only one. ****How will i get to the end of the array. (Use While Loop)
    let step = 0; 
    let count = 0; 

    while (true){        
       //Jump 2 steps, Edge case: end of array is 0, 0
        if(c[step + 2] !== 1 && c[step + 2] !== undefined){
            step += 2;
        }
        else{ //Jump 1 step
            step +=1; 
        }        
        count++;

        if(step === c.length - 1){
            break;
        }
    }

    return count;
}
console.log(jumpingOnClouds([0,1,0,0,0,1,0])); //Return 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); //Return 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])); //Return 3
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0])); //Return 3

