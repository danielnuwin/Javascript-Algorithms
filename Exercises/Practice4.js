/**
 * Find any numbers that match sum k
 * 
 * loop through list, get first value, check (indexof) if complement exists, 
 * if doesn't, then move on to next value. 
 * o(n) only need one loop 
 * 
 * Qs: does it have duplicates? 
 */

let array = [1, 2, 3, 4, 5];
let k = 10;

function findSum(array, k) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let comp = k - array[i];
        if (array.indexOf(comp) !== -1) {
            result.push([array[i], comp]);
        }
        else {
            for (let j = i + 1; j < array.length; j++) {
                comp = comp - array[i];
                if (array.indexOf(comp) !== -1) {
                    result.push([array[i], array[j], comp]);
                }
                else {
                    findSum(array.splice(i, j), comp);
                }
            }
        }
    }
    console.log(result);

}

// findSum(array, k)

/**
 * write a program to find the most frequent item of an array.
 *  example: let x = [8,3,8,4,9,2,8,9,8,5] and expected output 8(4 times)
 */

function freq(array) {
    //do it one pass 
    let hm = {};
    let hcount = 1;
    let num = "All values";

    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = 1;
        }
        else {
            hm[array[i]] = hm[array[i]] + 1;
            if (hm[array[i]] > hcount) {
                hcount = hm[array[i]];
                num = array[i];
            }
        }
    }
    return `${num} with count: ${hcount}`;
}
const x = [8, 3, 8, 4, 9, 2, 8, 9, 8, 5, 5, 5, 5, 5];
const y = [1, 2, 3, 4, 5, 6];
// console.log(freq(x));

/**
 * Async Away Practice
 */


asyncPractice = async () => {
    const waitP4 = new Promise((resolve, reject) => resolve('4'));
    let p4 = await waitP4;
    console.log(`Person ${p4}: Hello I am ${p4}`);
}
console.log("Person 1: Hello I am 1");
console.log("Person 2: Hello I am 2");
console.log("Person 3: Hello I am 3");
asyncPractice();
console.log("Person 5: Hello I am 5");


/**
 * CoderByte
 */

/**
    Input:"coderbyte"
    Output:bcdeeorty

    Input:"hooplah"
    Output:ahhloop
   */
//Order the string
function AlphabetSoup(str) {
    //Assumes all lowercase
    //Get the char codes, sort them and convert them back to strings
    let strArray = str.split("");
    let charNums = strArray.map((char, i) => str.charCodeAt(i));
    charNums.sort((a, b) => a - b);
    let result = charNums.map((item, i) => String.fromCharCode(item));
    return result.join("");
}

/**
 * Input:"fun&!! time"

Output:time


Input:"I love dogs"

Output:love
* */

function LongestWord(sen) {

    // code goes here  
    //Split the string into words
    //Check if they are actually words via regex 
    //Track longest word via variable
    let senArray = sen.split(" ");
    let highWord = ""
    for (let i = 0; i < senArray.length; i++) {
        if (/[^a-z0-9+]+/gi.test(senArray[i])) {
            if (highWord === "") {
                highWord = senArray[i];
            }
            else if (senArray[i].length > highWord.length) {
                console.log(highWord);
                highWord = senArray[i];
            }
        }
    }
    return highWord;

}

function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let highAmount = -1;
    //Two for loops to check each value
    for (let i = 0; i < keyboards.length; i++) {
        let kbVal = keyboards[i];

        for (let j = 0; j < drives.length; j++) {
            let drVal = drives[j];

            let total = kbVal + drVal;
            if (total <= b) {
                if (total > highAmount) {
                    highAmount = total;
                }
            }
        }
    }
    return highAmount;

}

let b = 10;
let dr = [3, 1];
let kb = [5, 2, 8];

console.log("getMoney:", getMoneySpent(kb, dr, b));

// Print This array

let printX = [1, 2, 3];

for (let i = 0; i < printX.length; i++) {
    for (let j = i; j < printX.length; j++) {
        console.log(`${printX[i]}-${printX[j]}`);
    }
}

// WALLMART INTERVIEW

//Find non repeating characters
//“Geeks Quiz” -> ‘GksQuiz’;  

function findMissing(str) {
    let hm = {};
    let string = "";
    for (let i = 0; i < str.length; i++) {

        if (!hm[str.charAt(i)]) {
            hm[str.charAt(i)] = 1;
        }
        else {
            hm[str.charAt(i)] = hm[str.charAt(i)] + 1;
        }
    }

    for (let i in hm) {
        // console.log("here",i);
        if (hm[i] === 1) {
            string = string + i;
        }
    }
    console.log(string.replace(/\s/, ""));

}

findMissing("Geeks Quiz");
findMissing("Geeks for Geeks");

/**
 * Copy from Leetcode, 322 Coin Change.
You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
Input: coins = [1, 2, 5], amount = 11;
Output: 3;
Explanation: 11 = 5 + 5 + 1; 
 
1. Sort Decending
2. Mod how many it would take then move on

*/

function coinChange(array, amt) {

    let sorted = array.sort((a, b) => b - a);
    let result = [];
    let lowCount = 0;
    console.log("coinChange:", sorted);
    for (let i = 0; i < sorted.length; i++) {
        let curCoin = sorted[i];

    }

}

coinChange([1, 2, 5], 11);

/**
 * Find Pivot Index
 *
We define the pivot index as the index where the sum of the numbers
to the left of the index is equal to the sum of the numbers to the right of the index.
If no such index exists, we should return -1.
If there are multiple pivot indexes, you should return the left-most pivot index.

Input: 
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: 
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
 */

function findPivot(array) {
    //Figure out how to get the left and right sums. recursion? 
    //start at 1 index
    let leftHM = {}; //key: index, value is all the values to the left
    let rightHM = {};
    //How to get all the ones preceding it? 
    for (let i = 1; i < array.length; i++) {
        leftHM[i] = addSum(0, i, array)
        rightHM[i] = addSum(i + 1, array.length - 1, array)
    }
    //  console.log(leftHM, rightHM);
    for (let i in leftHM) {
        for (let j in rightHM) {
            if (leftHM[i] === rightHM[j]) {
                return i;
            }
        }
    }
    return -1;
}

function addSum(start, end, array) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += array[i];
    }
    // console.log("addsum:",sum);
    return sum;
}

let sum = [1, 2, 3].reduce((a, b) => a + b);
console.log("sum:", sum);


console.log("findPivot:", findPivot([1, 7, 3, 6, 5, 6]));
console.log("findPivot:", findPivot([1, 2, 3]));

//BETTER PIVOT SOLUTION

function findPivot2(array) {
    let sum = array.reduce((a, b) => a + b);
    let left = 0;
    for (let i = 0; i < array.length; i++) {
        let right = sum - left - array[i];
        if (left === right) {
            return i;
        }
        left += array[i];
    }
    return -1;
}

console.log("findPivot2:", findPivot2([1, 7, 3, 6, 5, 6]));
console.log("findPivot2:", findPivot2([1, 2, 3]));


/**
 * Count Vowels in the word
 */

function countVowels(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (/[aeiou]/.test(string.charAt(i))) {
            count++;
        }
    }
    console.log("countvowels:", count);
}

countVowels("hello");

//With dictionary
function countVowels2(string) {
    let count = 0;
    let dict = "aeiou";
    for (let i = 0; i < string.length; i++) {
        if (dict.indexOf(string.charAt(i)) !== -1) {
            count++;
        }
    }
    console.log("countvowels2:", count);
}

countVowels2("hello");


/**
 * Define Two Classes and one class inherits from another. 
 */

class Vehicle {
    constructor(make, type, color) {
        this.make = make;
        this.type = type;
        this.color = color
    }

    getMake() {
        return this.make;
    }
    getType() {
        return this.type;
    }
}

class Sedan extends Vehicle {
    constructor(make, type, color) {
        super(make, type, color);
    }
    getType(){
        return `Sedan type is: ${super.getType()}`;
    }
}

const sed = new Sedan("honda","sed","red");
console.log(sed.getMake()); //honda
console.log(sed.getType()); //Sedan type is: sed

