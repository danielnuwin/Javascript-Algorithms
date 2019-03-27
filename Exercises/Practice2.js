//Rotate array

/*
*Thoughts: 
1. Create new array
2. Rotate in place

thoughts:
take array, loop then add new position of the array
*/

let array = [1, 2, 3, 4, 5]
let n = 4;

function rotate(array, n) {
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

    console.log(result);
}
rotate(array, n);

/**
 * 
 */

let s = "abracadabra";
let pat = "abr";

//Return the indices of the start of the pattern if exists

function findPat(s, pat) {
    //Variables
    let result = [];
    //Loop by substring of 3 chars and if it matches the pattern, then add index to array. 

    for (let i = 0; i < s.length; i++) {
        let cur = s.substring(i, i + 3);
        if (cur !== undefined && cur === pat) {
            result.push(i);
        }
    }

    return result;
}

console.log(findPat(s, pat));


let toys = [1, 12, 5, 111, 200, 1000, 10];
let money = 100;
function maxToys(toys, money) {

    //maximize the amount of toys you can buy with the money you have
    //Would order the list of toys. Then subtract each amount from the total amount, increment the count if it still greater than 0.
    //Keep going until the next item greater than what is left
    let sorted = toys.sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < sorted.length; i++) {
        let cur = sorted[i];

        if (cur < money) {
            count++;
            money = money - cur;
        }
    }
    return count;
}

// console.log("toy count: ", maxToys(toys, money));
console.log("toy count: ", maxToys([3, 7, 2, 9, 4], 15));



/**
 * Birthday Cake Candles
 * 
 * Thoughts: 
 * Find the tallest (biggest value) and return count of it. 
 */

let candles = [3, 2, 1, 3];

function countCandles(array) {

    let hm = {};
    let high = null;

    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        if (high === null) {
            high = cur;
        }
        //find high
        if (cur > high) {
            high = cur;
        }

        //find count
        if (!hm[cur]) {
            hm[cur] = 1;
        }
        else {
            hm[cur] = hm[cur] + 1;
        }
    }
    return hm[high];
}

console.log("candles:", countCandles(candles));//2


/**
 * Convert to Military Time: 
 * 
 * Thoughts:
 * case 1: if 12pm, return self
 * case 3: if 12am, -12
 * case 4: if 1 -> 11am, return self
 * case 2: if 1 -> 11pm, + 12
 */

function conveterMilitary(string) {
    let hour = string.substring(0, 2);
    let min = string.substring(3, 5);
    let sec = string.substring(6, 8);
    let tod = string.substring(8, 11);

    if (tod === 'PM') {

        //case 1
        if (parseInt(hour) === 12) {
            return string.substring(0, string.length - 2);
        }
        else { //case 2
            return parseInt(hour) + 12 + ':' + min + ":" + sec;
        }
    }
    else {
        if (parseInt(hour) === 12) {
            return parseInt(hour) - 12 + ':' + min + ":" + sec;
        }
        else {
            if (parseInt(hour) < 10) {
                return '0' + (parseInt(hour) + 12) + ':' + min + ":" + sec;
            }

            return string.substring(0, string.length - 2);
        }
    }

}

console.log(conveterMilitary("12:00:10AM"));

