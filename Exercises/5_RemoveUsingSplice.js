//Remove an item in an array using splice
const array = [10, 1, 24, 3, 5, 2, 190, 4];
const removeItem = 5;

/**
 * Notes: (5min) -- Passed
 * 1. find the index of the array where 5 exits, then splicing it.
 */
function removeSplce(array, item){
    let index = array.indexOf(item);

    if(index !== -1){
        array.splice(index, 1);
        console.log("removeSplice: ", array); 
    }
    else{
        console.log("DNE");   
    }
}
removeSplce(array, removeItem);