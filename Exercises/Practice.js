const array = [1, 2, 3];
let double = array.map((nums) => nums * 2);
console.log(double);
//How do you find the missing number in a given integer array of 1 to 100?
const array1 = [1, 2, 3, 5, 6, 7, 8, 10];
//for(let i = 1; i <= 100; i++){array1.push(i)};

function findMissing(array) {
    //sort the array
    const sorted = array.sort();
    for (let i = 1; i <= 10; i++) {
        if (sorted.indexOf(i) === -1) {
            console.log("missing: ", i);
        }
    };

}

findMissing(array1);

//How do you find the duplicate number on a given integer array?
const array2 = [1, 1, 2, 3, 4, 4, 5, 6, 7];

//Use a map object

function findDup(array) {
    let map = {};
    let dup = [];

    for (let i = 0; i < array.length; i++) {
        if (!map[array[i]]) {
            map[array[i]] = array[i];
        }
        else {
            dup.push(array[i]);
        }
    }
    console.log("duplicates: ", dup);

}
findDup(array2);


//How do you find the largest and smallest number in an unsorted integer array?
const array3 = [10, 1, 24, 3, 5, 2, 190, 4];

//Notes: 1) sort list use first and last index, 2) Loop through list, track small and large variables 

function findMinMax(array) {
    let min = null;
    let max = null;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        //max
        if (max === null && min === null) {
            max = current;
            min = current;
        }

        if (current > max) {
            max = current;
        }
        if (current < min) {
            min = current;
        }

    }

    console.log("min: ", min, "max: ", max);

}

findMinMax(array3);

//How do you find all pairs of an integer array whose sum is equal to a given number?
const array4 = [10, 1, 24, 3, 5, 2, 190, 4];
const target = 34;

//Notes: 1) Use map to check for complements 2) use the value to check in the index of the value exists

function twoSum(array, target) {
    let hm = {};

    for (let i = 0; i < array.length; i++) {

        let comp = target - array[i];

        //if DNE, then add it
        if (!hm[array[i]]) {
            hm[array[i]] = comp;//doesnt matter value
        }

        if (hm[comp]) {
            console.log("Two Sum: ", hm[comp], hm[array[i]]);
        }

    }

}

twoSum(array4, target);


//Remove an item in an array using splice
const array5 = [10, 1, 24, 3, 5, 2, 190, 4];
const removeItem = 5;

const findIndex = array5.indexOf(removeItem);
array5.splice(findIndex, 1);
console.log("Remove element: ", array5);


//How do you reverse an array?
const array6 = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(array) {
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    console.log("reverse array: ", newArray);
}
reverseArray(array6);


//Removing duplicates in an array without library function
let array7 = [1, 1, 2, 3, 4, 4, 5, 6, 7];
function removeDupArrayMap(array) {

    let hm = {};
    let retArray = [];
    for (let i = 0; i < array.length; i++) {

        if (!hm[array[i]]) {
            hm[array[i]] = array[i];
        }
    }

    for (let obj in hm) {
        retArray.push(hm[obj]);
    }

    console.log("removed Dup in array Map: ", retArray);
}

removeDupArrayMap(array7);

function removeDupArraySplice(array) {
    //Have to sort the list******
    //Check if the next element is the same
    let current = 0;
    let next = 0;
    for (let i = 0; i < array.length; i++) {
        current = array[i];
        next = array[i + 1];

        if (current === next) {
            array.splice(i + 1, 1)
        }

    }

    console.log("removed Dup in array Splice: ", array);
}
removeDupArraySplice(array7);


//Check if string is a palindrome
let string = "racecar";
console.log("palindrome: ", string, string === string.split("").reverse().join("") ? true : false);


//2) Write a method which will remove any given character from a String? (solution)
let string2 = "racecar";
let remove = "r";

function removeChar(string, char) {

    //Create new string but dont add the char to remove
    let array = string.split("");
    let returnString = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== char) {
            returnString.push(array[i]);
        }
    }

    return returnString.join("");

}

console.log("remove char: ", removeChar(string2, remove));

//How to count the occurrence of a given character in a String? 

let string3 = "chchchararacterr";

function countChars(string) {

    let hm = {};
    for (let i = 0; i < string.length; i++) {
        if (!hm[string[i]]) {
            hm[string[i]] = 1;
        }
        else {
            let count = hm[string[i]] + 1;
            hm[string[i]] = count;
        }
    }
    console.log("count chars: ", hm);

}
countChars(string3);

//How do you find the second highest number in an integer array? 

let array8 = [1, 4, 2, 3, 1, 7, 8, 5];
let sortedArray = [];
let SH = null;
//Notes: sort array then find the second to last index
sortedArray = array8.sort();
SH = sortedArray[sortedArray.length - 2];

console.log("Second Higehest: ", SH);

function secondHigh(array) {
    let highest = null;
    let sh = null;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (highest === null && sh === null) {
            highest = current;
            sh = current;
        }

        if (current > highest) {
            sh = highest;
            highest = current;
        }
    }

    console.log("SH: ", sh);
}
secondHigh(array8);

// Rotate clockwise a 2D array. 
let array9 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];


//Output
/*
[7,4,1]
[8,5,2]
[9,6,3]

-start off with the last index, then grab the first index of the last element. 
*/

function rotate(array) {
    let row1 = [];
    let row2 = [];
    let row3 = [];
    let rotated = [];

    for (let i = array.length - 1; i >= 0; i--) {

        for (let j = 0; j < array[i].length; j++) {

            if (j === 2) {
                row3.push(array[i][j]);
            }

            if (j === 1) {
                row2.push(array[i][j]);
            }

            if (j === 0) {
                row1.push(array[i][j]);
            }

        }

    }
    rotated.push(row1, row2, row3);
    console.log("rotate: ", rotated);

}
rotate(array9);

//Find How many smaller numbers to the right
let array10 = [3, 6, 2, 7, 3, 9, 3, 1];

function findSmaller(array) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {
                count++;
            }
        }
        result.push(count);
    }
    console.log("Find Smaller: ", result);

}
findSmaller(array10);

//10. There is an array with every element repeated twice except one. Find that element? (solution)
let array11 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8];

//Notes: 1) using a map with value as the count 2) is array sorted, if not then sort then check if cur element and next are the same. 

function findSingle(array) {
    let single = null;
    let hm = {};
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        if (!hm[array[i]]) {
            hm[array[i]] = count + 1;
        }
        else {
            hm[array[i]] = hm[array[i]] + 1
        }
    }

    for (let obj in hm) {
        if (hm[obj] === 1) {
            single = obj;
        }
    }
    console.log("findSingle:", hm);
    console.log("findSingle:", single);

}
findSingle(array11);

//How to find kth smallest element in unsorted array? (solution)
//For example if given array is {1, 2, 3, 9, 4} and k=2 then you need to find the 2nd smallest number in the array, which is 2. 
//1,2,3,4,5,6,7,8,11
let array12 = [3, 6, 4, 7, 8, 2, 11, 1, 5];
let kth = 2;

//Notes: sort the array, the use the kth as the 4th index to start, make sure the kth is <= than the length of array

function kSmallest(array, k) {

    let ksmall = null;
    let result = array;

    result.sort((a, b) => a - b);

    ksmall = result[k - 1];
    console.log("ksmall:", ksmall);

}
kSmallest(array12, kth);

//Random number array 1 to 200
//eggsInNest = eggsInNest.map(() => (Math.floor(Math.random() * 200) + 1));
// https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html

let eggsInNest = new Array(10).fill(null);
eggsInNest = eggsInNest.map(() => (Math.floor(Math.random() * 200) + 1));
// console.log(eggsInNest)


//Sorting algorithm
let arraySort = [3, 6, 4, 7, 8, 2, 11, 1, 5];

//MERGE SORT (Divide and Conquer) O(nlogn)
//Selection Sort (Swap) (O(n^2))
//Note: find min then add to result array, then remove it
//1. find min in array, 2. delete that from array 3. add to result array
function findMin(array) {
    let min = null;
    // console.log("findminarray",array);

    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        // console.log("ccurrr",cur);
        
        if (min === null) {
            min = cur;
        }
        if (cur < min) {
            min = cur;
        }
    }
    return min;
}

function sort(array) {
    let result = [];
    let min = null;

    while (array.length > 0) {
        
        min = findMin(array);
        // console.log("min:", min);

        // min = Math.min(...array); //works as well
        result.push(min);
        let minIndx = array.indexOf(min);
        array.splice(minIndx, 1);
    }

    console.log("sorted:", result);

}
sort(arraySort);

//Remove Duplicates in Array IN PLACE? 
//Given sorted input array A = [1,1,2], Your function should return length = 2, and A is now [1,2]. 
let array14 = [1, 1, 2, 2, 2, 3, 3, 3, 3, 5];

// function removeDubIP(array) {
//     let cur = null;
//     let next = null;
//     for (let i = 0; i < array.length; i++) {
//         cur = array[i];
//         next = array[i + 1];
//         if (next !== undefined && next === cur) {
//             array.splice(i + 1, 1);
//         }
//     }
//     console.log("removeDPIN:", array);
// }

// removeDubIP(array14);


function removeDubIP2(array) {
    let cur = null;
    let next = null;
    for (let i = 0; i < array.length; i++) {
        cur = array[i];
        let count = 0;
        for (let j = i + 1; j < array.length; j++) {
            next = array[j];
            if (next === cur) {
                count++;
                // console.log("count:", count, "cur", cur, "next", next);
            }
        }
        if (count > 0) {
            array.splice(cur, count);
        }
    }
    console.log("removeDPIN2:", array);

}

removeDubIP2(array14);

//Merge two sorted arrays
let array15 = [1, 3, 5, 7];
let array16 = [2, 4, 6, 8];

function mergeSortedArrays(a, b) {

    let result = [];
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < b.length; j++) {
            if (a[i] < b[j]) {
                result.push(a[i]);
            }
            else {
                result.push(b[j]);
            }
        }
    }
    console.log('mergeSortedArrays: ---DNW', result);

}
mergeSortedArrays(array15, array16);

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
let array17 = [100, 4, 200, 1, 3, 2, 5, 6, 7, 20, 8, 201, 202, 203, 204, 9, 10, 205, 206, 207, 208, 209];

//Problem is that it pushes all sequences to the same array
function findLongestSeq(array) {
    let tempArray = [];

    for (let i = 0; i < array.length; i++) {
        let indexUp = array.indexOf(array[i] + 1);
        let indexDown = array.indexOf(array[i] - 1);

        if (indexUp !== -1 || indexDown !== -1) {
            tempArray.push(array[i]);
        }

    }
    // console.log("sequences:", tempArray.sort());
    console.log("longestSeq:", tempArray.length);
}

findLongestSeq(array17);

function findLongestSeq2(array) {
    let sorted = array.sort((a, b) => a - b);
    let highCount = 1;
    let curCount = 1;
    for (let i = 0; i < sorted.length; i++) {
        let cur = sorted[i];
        let next = sorted[i + 1];

        if ((cur + 1) === next) {
            curCount++;
        }
        else {
            curCount = 0;
        }

        if (curCount > highCount) {
            highCount = curCount;
        }

    }
    // console.log("sequences2:", sorted);
    console.log("longestSeq2:", highCount);
}

findLongestSeq2(array17);

//Find minimum element in unsorted array
let array18 = [4, 5, 6, 7, 1, 2];

function findMin(array) {
    let min = null;
    let cur = null;
    for (let index = 0; index < array.length; index++) {
        cur = array[index];

        if (min === null) {
            min = cur;
        }

        if (cur < min) {
            min = cur;
        }
    }
    // console.log("min: ", min);
}
findMin(array18);

/**
 * 
 * Given an array of of size n and a number k, find all elements that appear more than n/k times? (solution)
Another tough array based coding questions from Interviews. You are given an array of size n,
 find all elements in array that appear more than n/k times. For example, 
 if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4, then the output should be [2, 3]. 
 Note that size of array is 8 (or n = 8), so we need to find all elements that appear more than 2 (or 8/4) times. 
 There are two elements that appear more than two times, 2 and 3.

Notes:
1. Function takes in array, k. Use HM to count occurences in all of array o(n). check if Object.values > 2. then return the keys. 
 */

let array19 = [3, 1, 2, 2, 1, 2, 3, 3];
let kTimes = 4;
function findNK(array, k) {
    let hm = {};
    let div = Math.floor(array.length / k);
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = 1;
        }
        else {
            hm[array[i]] = hm[array[i]] + 1;
        }
    }

    for (let obj in hm) {
        if (hm[obj] > div) {
            result.push(obj);
        }
    }
    console.log("findHK: ", result);

}
findNK(array19, kTimes);


//Will this work
const profile = {
    name: 'daniel',
    getName: () => {
        console.log(this.name);
    }
}
profile.getName();

//Find the count of maximum numbers
let x = [1, 2, 2, 4, 2, 4]
//Qs: is it sorted? c

function findMaxCount(array) {
    let maxCount = 1;
    let maxNum = null;
    let curNum = null;
    let hm = {};

    for (let index = 0; index < array.length; index++) {
        curNum = array[index];

        //find the max number
        if (maxNum === null) {
            maxNum = curNum;
        }

        if (curNum > maxNum) {
            maxNum = curNum;
        }

        //find count of each number
        if (!hm[array[index]]) {
            hm[array[index]] = 1;
        }
        else {
            hm[array[index]] = hm[array[index]] + 1
        }

    }
    //find max count by using the maxnum as the key and return value of count. 
    maxCount = hm[maxNum];
    console.log("maxNum:", maxNum, "maxCount:", maxCount);
}

findMaxCount(x);

//Convert time to military time
let time = '12:03AM';

/**
 * 12:00AM -> 11:59 AM = 00:00 -> 12:00 AM
 * 12:01PM -> 11:59 PM = 12:01 -> 23:59 PM
 * 
 * 1:32PM --> 13:32 
 * 12:00AM --> 00:00
 * 12:01AM --> 00:01
 * 
 * 12:00PM --> 12:00
 */

function convertTime(time) {

    let hour = parseInt(time.substring(0, 2));
    let min = time.substring(3, 5);
    let tod = time.substring(5, 7);
    let result = "";


    if (tod == 'AM') {
        if (hour === 12) {
            let newHour = hour - 12;
            result = newHour + ":" + min;
        }
        else {
            result = hour + ":" + min;
        }
    }
    //This would be PM
    else {
        if (hour === 12) {
            let newHour = hour;
            result = newHour + ":" + min;
        }
        else {
            let newHour = parseInt(hour);
            newHour = newHour + 12;
            result = newHour.toString() + ":" + min;
        }
    }

    console.log("militaryTime: ", result);

}

convertTime(time);

let y = {
    a() { console.log("hello lauren"); return this },
    b() { console.log("hello daniel"); return this }
};
y.a().b().a().a();

//What is scope. 

//Arrow Functions
let el = ["hello", "this", "is", "daniel"];
let newEl = el.map(element => { return element.length })
console.log(newEl);
/*
Arrrow Function is like this:
var a = function(b){
    console.log(b);
}
 */
var a = function (b) {
    console.log(b);
}
let b = (c) => {
    console.log(c);
}
a("hello");
b("daniel");

//Fibonacci Seq

let num = 6;

function fib(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return fib(num - 1) + fib(num - 2);
    }
}
console.log("fib", fib(num));

//Factorial. Times all the numbers before it.

function fact(num) {
    if (num === 0) {
        return 1;

    } else {
        return num * fact(num - 1);
    }
}
console.log("fact:", fact(10));

//KSum
//Return two integers that equal sum of target
let klist = [1, 2, 3, 4, 5];
let ktarget = 5;

function ksum(list, k) {

    let hm = {};
    let result = [];

    for (let i = 0; i < list.length; i++) {
        let comp = k - list[i];

        if (!hm[list[i]]) {
            hm[list[i]] = list[i];
        }

        if (hm[comp]) {
            result.push([hm[list[i]], comp]);
        }

    }
    return result;

}
console.log("ksum: ", ksum(klist, ktarget));


//ReverseString
let revString = "helloDaniel";

//using libarary functions
console.log("lib:", revString.split("").reverse().join(""));

//using a loop
function revLoop(string) {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result += string.charAt(i);
    }
    console.log("loop:", result);
}

revLoop(revString);

//Remove Duplicates from array
let dupArray = [1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7, 8, 88];

function remDub2(array) {
    let hm = {};
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = array[i];
        }
    }

    for (let num in hm) {
        result.push(hm[num]);
    }
    console.log("remDub2:", result);

}
remDub2(dupArray);

//Using Splice and in place.
//Questions, is it sorted?
function remDupIP(array) {

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let count = 0;
        for (let j = i + 1; j < array.length; j++) {
            if (current === array[j]) {
                count++;
            }
        }
        if (count > 0) {
            array.splice(i, count);

        }
    }

    return array;
}
console.log("remdupip:", remDupIP(dupArray));

//Using ES6 functions
console.log("ES6: ", [...new Set(dupArray)]);

//Using Splice In Place with one loop

function remDupSlice2(array) {

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let next = array[i + 1];

        if (current === next) {
            array.splice(i, 1);
        }
    }
    console.log("remDupSlice2", array);

}

remDupSlice2(dupArray);

//Given String, split into as few strings
// as possible such as each string is a pallindrome. For example, given the input racecarannakayak, return ['racecar','anna', 'kayak']
//string abc should return ["a", "b", "c"]
/**
 * Notes: Checking what is a valid palindrome. 
 * Edge Cases: nothing returns
 * 
 * Tries:
 * 1. Loop, check if element has another element, if it does then check palindrome between those two indexes
 * 2. Helper function to check if valid
 * 3. Use two loops to check first int until it finds another char that is the same then check if its a palindrome
 * 
 * What I actually did:
 * 1. Created a Helper function to check if its a valid palindrome
 * 2. Two For Loops. First loop: check the first value, Second loop: will check each value preceding it 
 * 3. During Second loop I will check if the preceding value equals to the first value. If it does, check if valid palindrome using substring to get the value. 
 */
function isPalindrome(string) {
    let reverse = string.split("").reverse().join("")
    // console.log("isP:", string);
    return reverse === string;

}

function splitPalindrome(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        let current = string.charAt(i);
        for (let j = i + 1; j < string.length; j++) {
            let next = string.charAt(j);
            if (current === next) {
                let checkString = string.substring(i, j + 1);
                if (isPalindrome(checkString)) {
                    result.push(checkString);
                }
            }
        }
    }
    //Case where single is a palindrome
    if (result.length === 0) {
        result = (string.split(""));
    }
    console.log("splitPalindrome: ", result, "count:", result.length);
}
let pString = "racecarannakayakabc";
splitPalindrome(pString);

/**
 * This problem was asked by Dropbox.

Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.

The order of the indices does not matter.


Notes:
1. Helper function to check if valid --> Use Join into a string by "" for first, then reverse then join for second. 
    -- Does it normally have more than two words? or the combo of the more than two?
2. Check the first index string length (3). so you increment by three to check if valid
3. You need two loops to check by three
 */

function isValidConcat(array, string) {
    let first = array.join("");
    let sec = array.reverse().join("");

    if (string === first || string === sec) {
        console.log("compare: ", string);

        return true;
    }
    else {
        return false;
    }
}

function checkStringConcat(array, string) {
    let result = [];

    for (let i = 0; i < string.length; i += 3) {
        let cur = string.substring(i, i + 3);
        // console.log("stopi", i);

        for (let j = i + 3; j < string.length; j += 3) {
            // console.log("stopj", j);

            let next = string.substring(j, j + 3)
            // console.log("next", next);

            let concat = cur + next;
            // console.log(" concat", concat);

            if (isValidConcat(array, concat)) {
                // console.log("valid");
                result.push(i);
                // console.log("result push", result);
            }
        }
    }
    console.log("checkStringConcat:", result);
}
let string4 = "dogcatcatcodecatdog";
let words = ["cat", "dog"];
// console.log("--------------------------");

checkStringConcat(words, string4);


console.log(string4.split("").filter(char => char === 'g'));

/**
 * 
 * 1. Create Checks for words in array to concat them and reverse concat
 * 2. LooP: check if the first word(length of combo) is a valid combo for 1st or 2nd, if so then push index
 * 
 */
function checkDogCat(array, string) {
    let result = [];

    //get word combos
    let combo1 = array.join("");
    let combo2 = array.reverse().join("");
    let comboLength = combo1.length;

    for (let i = 0; i < string.length; i++) {
        let checkString = string.substring(i, i + comboLength);
        if (checkString === combo1 || checkString === combo2) {
            result.push(i);
        }
    }

    console.log("checkDogCat:", result);

}
checkDogCat(["hello","danny"], "hellodannydannyhellojasdkhelloasdfadsfdannyhello")

//FInd N/K
let arrayNK = [3, 1, 2, 2, 1, 2, 3, 3];
let kTimess = 4;

function nk(array, kTimes){
    let result = [];
    let div = array.length/kTimes;

    for(let i = 0; i < array.length; i++){

        if(array[i] > div){
            result.push(array[i]);
        }
    }

    console.log(result);
    

}

nk(arrayNK, kTimess);