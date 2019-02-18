/*25. Write a program to find length of longest consecutive sequence in array of integers? (solution)
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Challenging part of this question is that your algorithm should run in O(n) complexity. 
Note:
1. Take element, check if there is an integer +-1 of it. If true, then add it to an array. Check if its the indexOf or contains if show then add it
--> add it to a 2D array
2. Sort the list, then check for next occurences 

Qs: are there any duplicates?
*/
let array = [100, 4, 200, 1, 3, 2, 5, 6, 7, 20, 8, 201, 202, 203, 204, 9, 10, 205, 206, 207, 208, 209];

/**
 * Notes: 2:15-
 * 1. Order the list, either with library function or creating own sort method. 
 * 2. Loop the first element find if there a num one less than or one more than using indexOf, if so find it,
 * and add it to the count. 
 * 3. Sort the array, check if the next is follows the sequence, if so then increment the count, if not then count 
 * back to 1. Keep track of the high count and replace it when the current count is higher.
 */

function findLongestSeq(array) {
    let sorted = array.sort((a, b) => a - b);
    let highcount = 1;
    let curcount = 1;

    for (let i = 0; i < sorted.length; i++) {
        let cur = sorted[i];
        let next = sorted[i + 1]

        if (cur + 1 === next) {
            curcount++;
        }
        else {
            curcount = 1;
        }

        if (curcount > highcount) {
            highcount = curcount;
        }
    }
    return highcount;

}
console.log("longest Sequnce: ", findLongestSeq(array));


