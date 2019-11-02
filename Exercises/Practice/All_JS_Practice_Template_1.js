//1) FindMissingNumberInArray -- How do you find the missing number in a given integer array of 1 to 100?
const one = [1, 2, 3, 5, 6, 7, 8, 10];

//Loop an array from 1 to N and check if it exists in the array, if it doesn't return it. 

function findMissingNum(array) {
    for (let i = 1; i <= 10; i++) {
        if (array.indexOf(i) === -1) {
            console.log("1)", i);
        }
    }
}
findMissingNum(one)


//2) FindDuplicatesInArray -- How do you find the duplicate number on a given integer array?
const two = [1, 1, 2, 3, 4, 4, 5, 6, 7];

/**
 * thoughts: 
 * 1) sort, check if the next is same as current if so then return it or add to result array
 * 2) use HM, add to HM if already exists then return it or add to result array 
 *  */

function FindDuplicatesInArray(array) {
    let hm = {};
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = array[i];
        }
        else {
            //if exist
            result.push(array[i])
        }
    }
    console.log("2)", result);
}

FindDuplicatesInArray(two);

//3) FindLargestInSmallestArray -- How do you find the largest and smallest number in an unsorted integer array?
const three = [10, 1, 24, 3, 5, 2, 190, 4];

/**
 * Thoughts: 
 * 1) Sort array then return first and last index
 * 2) Loop and do two comparissons for smallest and largest
 */

function FindLargestInSmallestArray(array) {
    let sorted = array.sort((a, b) => a - b);
    console.log(`3) Smallest = ${sorted[0]} , Largest = ${sorted[sorted.length - 1]}`);

    let small = null;
    let large = null;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (small === null && large === null) {
            small = current;
            large = current;
        }
        if (current < small) {
            small = current;
        }
        else if (current > large) {
            large = current;
        }
    }
    console.log(`3) Smallest = ${small} , Largest = ${large}`);
}
FindLargestInSmallestArray(three)

//4) TwoSum -- How do you find all pairs of an integer array whose sum is equal to a given number?
const four = [10, 1, 24, 3, 5, 2, 190, 4];
const four_target = 34;

/**
 * Thoughts:
 * 1) if no pairs, return none
 * 2) Complement or difference between target and current value and check if any other values exist in the array 
 * 3) Use HM or Loop through array with indexof
 */

function twoSum(four, four_target) {
    let hm = {};
    let result = [];

    for (let i = 0; i < four.length; i++) {
        let current = four[i];
        let comp = four_target - current;

        if (!hm[current]) {
            hm[current] = current;
        }
        if (hm[comp]) {
            result.push([current, comp])
        }
    }
    console.log("4)", result);

    result = [];

    for (let i = 0; i < four.length; i++) {
        let comp = four_target - four[i];

        if (four.indexOf(comp) !== -1) {
            result.push([four[i], comp])
        }
    }
    console.log("4)", result); //will do two of the same pair

}

twoSum(four, four_target);

//5) RemoveUsingSplice -- Remove an item in an array using splice
const five = [10, 1, 24, 3, 5, 2, 190, 4];
const five_removeItem = 5;

/**
 * Thoughts:
 * 1) 
 */
function removeUsingSplice(five, five_removeItem) {

    for (let i = 0; i < five.length; i++) {
        if (five[i] === five_removeItem) {
            five.splice(i, 1);
        }
    }
    console.log("5)", five);

    //Using filter or reduce**
    let result = five.filter(obj => obj !== five_removeItem);
    console.log("5)", result);

}
removeUsingSplice(five, five_removeItem);

//6) ReverseArray --  How do you reverse an array?
const six = [1, 2, 3, 4, 5, 6, 7];

/**
 * Thoughts:
 * 1) Reverse lib function 
 * 2) loop but in reverse
 */
function reverseArray(array) {
    console.log("6)", array.reverse());
    let result = [];

    array.reverse(); //reverse back

    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    console.log("6)", result);

}

reverseArray(six);

//7) RemoveDuplicatesInArray -- Removing duplicates in an array without library function
const seven = [1, 1, 2, 3, 4, 4, 5, 6, 7];

/**
 * Thoughts: 
 * 1) es6 --> create new set
 * 2) Sort, Loop, Check if next is same, if so then splice it. 
 * 3) HM
 */

function RemoveDuplicatesInArray(seven) {
    let hm = {};
    let result = [];
    for (let i = 0; i < seven.length; i++) {
        hm[seven[i]] = seven[i];
    }
    for (let obj in hm) {
        result.push(hm[obj])
    }
    let res = result.map(obj => obj);
    console.log("7)", res);

    //ES6 Set
    let set = new Set(seven);
    console.log("7)", set);

    //Sort + check Next + splice
    let sort = seven.sort();
    for (let i = 0; i < sort.length; i++) {
        let cur = sort[i];
        if (sort[i + 1] && cur === sort[i + 1]) {
            sort.splice(i + 1, 1);
        }
    }
    console.log("7)", sort);
}
RemoveDuplicatesInArray(seven);

//8) Palindrome -- Check if string is a palindrome
let eight = "racecar";

/**
 * Thoughts:
 * 1) reverse string and check if equals 
 */
function palindrome(eight) {
    let reverse = eight.split("").reverse().join("");
    console.log(`8) ${reverse === eight ? true : false} `);
}
palindrome(eight);

/*9) Minimum Distance
Given an array of integers, find and print the minimum absolute difference between any two elements in the array.
*/

let nine = [3, -7, 0]; //3 (0, 3)
let nine_2 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]; //1 (-54 , -53)

/**
 * THoughts:
 * 1) sort array and use the first two indexes as min distance
 * 2) Two Loops check distance on second loop then increment 
 */

function minDistance(array) {
    let sorted = array.sort((a, b) => a - b);
    // console.log(`9) ${sorted[0]} , ${sorted[1]}`);

    let min = null;
    let hm = {};

    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let next = array[j];
            let dist = Math.abs(cur - next);

            if (!min) {
                min = dist;
            }
            else if (dist < min) {
                min = dist;
            }
            if (!hm[dist]) {
                hm[dist] = [cur, next];
            }
        }
    }
    console.log("9)", hm[min]);

}
minDistance(nine)
minDistance(nine_2)

//10) RemoveCharFromString
//Write a method which will remove any given character from a String? (solution)
let ten_string = "racecar";
let ten_char = "r";

/**
 * thoughts:
 * 1) es6 filter
 * 2) splice when r shows up
 */
function RemoveCharFromString(string, r) {
    //es6 filter
    let stringArray = string.split("");
    let result = stringArray.filter(char => char !== r);
    console.log("10)", result.join(""));

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === r) {
            stringArray.splice(i, 1);
        }
    }
    console.log("10)", stringArray.join(""));


}
RemoveCharFromString(ten_string, ten_char);

//11) CountOccourencesOfChar -- How to count the occurrence of a given character in a String? 
let eleven_string = "chchchararacterr";

/**
 * thoughts: 
 * 1) hm with incremented count for each occurence 
 */
function CountOccourencesOfChar(string) {
    let hm = {};
    for (let i = 0; i < string.length; i++) {
        if (!hm[string[i]]) {
            hm[string[i]] = 1;
        }
        else {
            hm[string[i]] = hm[string[i]] + 1;
        }
    }
    console.log("11)", hm);

}
CountOccourencesOfChar(eleven_string)

//12) SecondHighest -- How do you find the second highest number in an integer array? 
let twelve = [1, 4, 2, 3, 1, 7, 8, 5];

/**
 * Thoughts:
 * 1) sort the return second to last index
 * 2) es6 sort function
 * 3) track two counts, first and second highest
 */

function SecondHighest(array) {
    //es6
    let result = array.sort((a, b) => a - b);
    console.log("12)", result[result.length - 2]);

    //Track values
    let max = null;
    let smax = null;
    for (let i = 0; i < array.length; i++) {
        if (!max && !smax) {
            max = array[i];
            smax = array[i];
        }
        else if (array[i] > max) {
            smax = max;
            max = array[i];
        }
    }
    console.log("12)", smax);
}
SecondHighest(twelve)

//13) Rotate2DArray --  Rotate clockwise a 2D array. 
let array_13 =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
/**
 * Thoughts:
 * 1) Return new 2D array
 * 2) Start at the end of the array, take 0 index and place in 0,0, 
 */

function Rotate2DArray(array) {
    let result = [];
    let first = [];
    let second = [];
    let third = [];

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < array[i].length; j++) {
            //first row
            if (j === 0) {
                first.push(array[i][j]);
            }
            //secnd row
            if (j === 1) {
                second.push(array[i][j]);
            }
            //third row
            if (j === 2) {
                third.push(array[i][j]);
            }
        }
    }
    result.push(first, second, third);
    // console.log("rotate", result);
    return result;
}
Rotate2DArray(array_13);
function rotate2DArrayNtimes(array, n) {
    if (n % 4 === 0) {
        return array;
    }
    else if (n === 0) {
        return Rotate2DArray(array);
    }
    else {
        return rotate2DArrayNtimes(Rotate2DArray(array), n - 1);
    }
}
console.log("13)", rotate2DArrayNtimes(array_13, 3));


//14) SmallestRight -- Find How many smaller numbers to the right of each number of array
let fourteen = [3, 6, 2, 7, 3, 9, 3, 1];

/**
 * thoughts: 
 * 1. Brute force -- 2 loops every time ( O( n ^ n) ) 
 * 2. 
 */
function SmallestRight(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        let count = 0;
        for (let j = i + 1; j < array.length; j++) {
            let next = array[j];
            if (next < cur) {
                count++;
            }
        }
        result.push(count);
    }
    console.log("14)", result);
}

SmallestRight(fourteen)

//15) FindSingleNum --  There is an array with every element repeated twice except one.
// Find that element? (solution)
let fifteen = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8];

/**
 * thoughts:
 * 1. hm with count and return the key with the count value of 1
 * 2. sort, the loop and hope for the next is not the same
 */
function FindSingleNum(array) {
    let hm = {};
    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = 1;
        }
        else {
            hm[array[i]] = array[i] + 1;
        }
    }
    for (let obj in hm) {
        if (hm[obj] === 1) {
            console.log("15)", obj);
        }
    }

}
FindSingleNum(fifteen);

//16) FindMinSort  -- Sort the list using min
//MERGE SORT (Divide and Conquer) O(nlogn)
//Selection Sort (Swap) (O(n^2))
let sixteen = [3, 6, 4, 7, 8, 2, 11, 1, 5];

/**
 * Thoughts:
 * 1. Merge Sort
 * 2. Brute force -- find min of array, then splice it out
 */

function FindMinSort(array) {
    let result = [];
    while (array.length > 0) {
        let min = getMin(array);
        result.push(getMin(array));
        array.splice(array.indexOf(min), 1);
    }
    console.log("16", result);
}

function getMin(array) {
    let min = null;
    for (let i = 0; i < array.length; i++) {
        if (!min) {
            min = array[i];
        }
        else if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

FindMinSort(sixteen);

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

}
function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

const list = [3, 6, 4, 7, 8, 2, 11, 1, 5]
console.log("16)", mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

/*17) FindLongestSequence --  Write a program to find length of longest consecutive sequence in array of integers? (solution)
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
*/
let seventeen = [100, 4, 200, 1, 3, 2, 5, 6, 7, 20, 8, 201, 202, 203, 204, 9, 10, 205, 206, 207, 208, 209];
/**
 * Thoughts:
 * 1. Sort list, then track a longest count if the next value is the current + 1
 */
function FindLongestSequence(array) {
    const sort = array.sort((a, b) => a - b);
    let count = 1;
    let maxcount = 1;
    for (let i = 0; i < sort.length; i++) {
        let cur = sort[i];
        let next = sort[i + 1];

        if (cur + 1 === next) {
            count++;
        }
        else {
            count = 1;
        }

        if (count > maxcount) {
            maxcount = count;
        }
    }
    console.log("17", maxcount);

}
FindLongestSequence([1, 2, 3, 4, 6]);
FindLongestSequence(seventeen);

/* 18) NKTimes --
 * Given an array of of size n and a number k, find all elements that appear more than n/k times? (solution)
Another tough array based coding questions from Interviews. You are given an array of size n,
 find all elements in array that appear more than n/k times. For example, 
 if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4, then the output should be [2, 3]. 
 Note that size of array is 8 (or n = 8), so we need to find all elements that appear more than 2 (or 8/4) times. 
 There are two elements that appear more than two times, 2 and 3.
 */

/**
 * Thoughts:
 * 1. Hash Map of occurences of nums
 * 2. filter out all the entries > 2
 */

let seventeen_array = [3, 1, 2, 2, 1, 2, 3, 3];
let seventeen_k = 4;

function NKTimes(array, k) {
    let hm = {};
    let div = array.length / k;
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
    console.log("18)", result);
}
NKTimes(seventeen_array, seventeen_k);

//19) MaxCount -- Find the count of maximum numbers
let nineteen = [1, 2, 2, 4, 2, 4]; //2
let nineteen_2 = [1, 2, 2, 4, 2, 4, 4, 4, 4]//4

/**
 * Thoughts:
 * 2. HM of all the num counts also checking the max count too then index return max value.
 */
function MaxCount(array) {
    let hm = {};
    let maxCount = 1;
    for (let i = 0; i < array.length; i++) {
        if (!hm[array[i]]) {
            hm[array[i]] = 1;
            maxCount = 1;
        }
        else {
            hm[array[i]] = hm[array[i]] + 1;
            if (hm[array[i]] > maxCount) {
                maxCount = hm[array[i]];
            }
        }
    }
    for (let obj in hm) {
        if (hm[obj] === maxCount) {
            console.log("19)", obj);
        }
    }
}
MaxCount(nineteen);
MaxCount(nineteen_2);

//20) Fibonacci -- the Sum of all the numbers previous is the sum of the previous two
// fib 6 = 13
/**
 * thoughts:
 * 1. fib(){if n === 1 return n}
 */
function fib(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}
console.log("20)", fib(6));

/* 21) Rotate Array
 * Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.
 * Ex:
 * input: 1,2,3,4, k=2
 * output: 3,4,1,2
 */
let twenty_array = [1, 2, 3, 4, 5];
let twenty_k = 2;

/**
 * THoughts:
 * 1. Rotate one by one with the k to be the length of outer loop
 * 2. Start backwards
 */
function rotateArray(array, k) {
    for (let i = 0; i < k; i++) {
        for (let j = array.length - 1; j > 0; j--) {
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            // console.log("check:", array);
        }
    }
    console.log("21)", array);

}

rotateArray(twenty_array, twenty_k);
//22) PowerNum -- Function to do exponents (Try Recursion also)
/**Thoughts
 * 1. base case: if power to 0 return 1, if power to 1 retun N
 * 2. else return n * power(num, n - 1)
 */
function PowerNum(n, exp) {
    if (exp === 0) {
        return 1;
    }
    else if (exp === 1) {
        return n;
    }
    else {
        return n * PowerNum(n, exp - 1);
    }
}
console.log("22)", PowerNum(2, 2));
console.log("22)", PowerNum(2, 3));
console.log("22)", PowerNum(2, 1));
console.log("22)", PowerNum(2, 0));

//23) Factorial -- Function to calc factorial 
/**
 * THoughts:
 * 1. Recursion to multiply all the numbers preceding N
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else if (n === 1 || n === 2) {
        return n;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log("23)", factorial(1));
console.log("23)", factorial(2));
console.log("23)", factorial(3));
console.log("23)", factorial(4));


//24) PalindromeVariation -- Given String, split into as few strings
// as possible such as each string is a pallindrome. For example, given the input racecarannakayak, return ['racecar','anna', 'kayak']
//string abc should return ["a", "b", "c"]
let twoFour = "racecarannakayakabc";
/**
 * Thoughts:
 * 1. Two loops, first loop is first char, second loop checks if char exists, then check if palindrome, if so then add to result array.
 * 2. if string < 3 return individual char in array or if no matching then split array. 
 */
function PalindromeVariation(string) {
    const result = [];
    for (let i = 0; i < string.length; i++) {
        let curChar = string.charAt(i);
        for (let j = i + 1; j < string.length; j++) {
            let nextChar = string.charAt(j);

            if (curChar === nextChar) {
                let substring = string.substring(i, j + 1);
                // console.log("SS:", substring);
                if (substring.length > 3 && substring === substring.split("").reverse().join("")) {
                    result.push(substring);
                }
            }
        }
    }
    if (result.length === 0) {
        console.log("24)", string.split(""));
    }
    else {
        console.log("24)", result);
    }
}

PalindromeVariation(twoFour);
PalindromeVariation("abcdefg");

/* 25) StringConcatenation -- 
Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.
For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.
Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.
The order of the indices does not matter.
 */
let twoFive_string = "dogcatcatcodecatdog";
let twoFive_words = ["cat", "dog"];

/**
 * THoughts: 
 * 1. one loop, check if the first 6 chars match dogcat or catdog if so then add indices to result array
 */
function StringConcatenation(string, words) {
    let concat = words.join("");
    let concat2 = words.reverse().join("");
    let result = [];

    for (let i = 0; i < string.length; i++) {
        let substring = string.substring(i, i + concat.length);
        if (substring === concat || substring === concat2) {
            result.push(i);
        }
    }
    console.log("25)", result);
}
StringConcatenation(twoFive_string, twoFive_words);
StringConcatenation("barfoobazbitbyte", twoFive_words);

/** 26) FirstOccuringChar -- 
 * Find the first recurring Character in a string
 * 
 * Create a function that returns the first repeated character in a string 
(Strict definition: return the first character where that same character
exists to the left in the string).
first_repeat("") -> None
first_repeat("A") -> None
first_repeat("ABC") -> None
first_repeat("AA") -> "A"
first_repeat("ABA") -> "A"
first_repeat("ABBA") -> "B"
first_repeat("BACDEFGHIJBQWERUAAAA") -> "B"
 */

/**
 * thoughts:
 * 1. use hm, if already exists then return the string
 */
function first_repeat(string) {
    if (string.length < 2) {
        console.log("26)", "None");
        return;
    }

    let hm = {};

    for (let i = 0; i < string.length; i++) {
        if (!hm[string.charAt(i)]) {
            hm[string.charAt(i)] = string.charAt(i);
        }
        else {
            console.log("26)", string.charAt(i));
            return;
        }
    }
    console.log("26)", "None");
}
first_repeat("");
first_repeat("A");
first_repeat("ABC");
first_repeat("AA");
first_repeat("ABA");
first_repeat("ABBA");
first_repeat("BACDEFGHIJBQWERUAAAA");

/*27) FourElementSum --
* Find four elements a, b, c and d in an array such that a+b = c+d
Given an array of distinct integers, find if there are two pairs (a, b) and (c, d) such that a+b = c+d, and a, b, c and d are distinct elements. 
If there are multiple answers, then print any of them.

Example:
Input:   {3, 4, 7, 1, 2, 9, 8}
Output:  (3, 8) and (4, 7)
Explanation: 3+8 = 4+7

Input:   {3, 4, 7, 1, 12, 9};
Output:  (4, 12) and (7, 9)
Explanation: 4+12 = 7+9

Input:  {65, 30, 7, 90, 1, 9, 8};
Output:  No pairs found
Expected Time Complexity: O(n2)

console.log("1)", findPairs([3, 4, 7, 1, 2, 9, 8]));
console.log("2)",findPairs([3, 4, 7, 1, 12, 9]));
console.log("3)",findPairs([65, 30, 7, 90, 1, 9, 8]));
console.log("4)",findPairs([1,3,4,0]));
*/

/**
 * Thoughts:
 * 1. Use Hm like two some, key is complement, val is each pair
 * 2. if we find a key that exists, then return both pairs in a result. 
 */

function findPairs(array) {
    let hm = {};
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let first = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let second = array[j];
            let sum = first + second;
            if (!hm[sum]) {
                hm[sum] = [first, second];
            }
            else if (hm[sum]) {
                result.push([[first, second], hm[sum]]);
            }
        }
    }
    return result;
}
console.log("27)", findPairs([3, 4, 7, 1, 2, 9, 8]));
console.log("27)", findPairs([65, 30, 7, 90, 1, 9, 8]));

/* 28) PairsDivisible --
 * Check if an array can be divided into pairs whose sum is divisible by k
Given an array of integers and a number k, write a function that returns true if given array can be divided into pairs such that sum of every pair is divisible by k.
Examples:

Input: arr[] = {9, 7, 5, 3}, 
           k = 6
Output: True
We can divide array into (9, 3) and
(7, 5). Sum of both of these pairs 
is a multiple of 6.

Input: arr[] = {92, 75, 65, 48, 45, 35}, 
           k = 10
Output: True
We can divide array into (92, 48), (75, 65) 
and (45, 35). Sum of all these pairs is a
multiple of 10.

Input: arr[] = {91, 74, 66, 48}, k = 10
Output: True

Input: arr[] = {91, 74, 66, 48}, k = 13
Output: False
console.log("1)",pairsDivisible([9, 7, 5, 3], 6));
console.log("2)",pairsDivisible([92, 75, 65, 48, 45, 35], 10));
console.log("3)",pairsDivisible([91, 74, 66, 48], 13));
 */

/**
 * Thoughts:
 * 1. 2 loops, create pairs, if the pairs are % k === 0 then return true. 
 */
function pairsDivisible(array, k) {
    for (let i = 0; i < array.length; i++) {
        const cur = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const next = array[j];
            let sum = next + cur;
            if (sum % k === 0) {
                return true;
            }
        }
    }
    return false;
}
console.log("28)", pairsDivisible([9, 7, 5, 3], 6));
console.log("28)", pairsDivisible([92, 75, 65, 48, 45, 35], 10));
console.log("28)", pairsDivisible([91, 74, 66, 48], 13));

/* 29) MissingRange --
Find missing elements of a range
Given an array arr[0..n-1] of distinct elements and a range [low, high], find all numbers that are in range, but not in array. The missing elements should be printed in sorted order.

Examples:
Input: arr[] = {10, 12, 11, 15}, 
       low = 10, hight = 15
Output: 13, 14

Input: arr[] = {1, 14, 11, 51, 15}, 
       low = 50, hight = 55
Output: 50, 52, 53, 54
console.log(missingRange([10, 12, 11, 15], 10, 15));
console.log(missingRange([1, 14, 11, 51, 15], 50, 55));
 */
/**
 * Thoughts:
 * 1. 1 loop, from low to high range and indexOf or contains in array
 */
function missingRange(array, low, high) {
    let result = [];
    for (let i = low; i < high; i++) {
        if (array.indexOf(i) === -1) {
            result.push(i);
        }
    }
    return result;
}
console.log("29)", missingRange([10, 12, 11, 15], 10, 15));
console.log("29)", missingRange([1, 14, 11, 51, 15], 50, 55));


/* 30) 3rdBiggest Find the 3rd biggest number in the array.*/
let thirty = [0, 8, 6, 3, 66, 42, 3, 6, 3, 1, 8];

/**
 * thoughts:
 * 1. Sort then get index of length - 4;
 * 2. compare three values 
 */
function thirdBiggest(array) {
    let sort = array.sort((a, b) => b - a);
    console.log("30)", sort[2]);
}
thirdBiggest(thirty);


/* 31) CircleChars --
Given a list of words, determine whether the words can be chained to form a circle. A word X can be placed in front of another word Y in a circle if the 
last character of X is same as the first character of Y.
For example, the words ['chair', 'height', 'racket', touch', 'tunic'] can form the following circle: chair --> racket --> touch --> height --> tunic --> chair.
*/
const threeOne = ['chair', 'height', 'racket', 'touch', 'tunic'];
/**
 * thoughts:
 * 1. Two buckets: first chars and last char buckets
 * 2. first_char_bucket: C --> chair, h --> height, r--> racket, t --> touch, t --> tunic
 * 3. last_char_bucket: R --> char, t--> height, t--> racket, h---> touch, c --> tunic
 */

/* 32) Pyramid
given array, print 
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5 
*/

/**
 * Thoughts:
 * 1. Backwards array > print all of array, then next loop subtract the last index (should reverse)
 */
function pyramid(array) {
    let reverse = array.reverse();
    let length = array.length;
    console.log("31)");

    for (let i = 0; i < length; i++) {
        console.log(reverse.join(""));
        // reverse.splice(reverse.length - 1, 1); //works too
        reverse.pop();
    }
}
pyramid([1, 2, 3, 4, 5]);

/* 33) Frequency
 * write a program to find the most frequent item of an array.
 *  example: let x = [8,3,8,4,9,2,8,9,8,5] and expected output 8(4 times)
 * const x = [8,3,8,4,9,2,8,9,8,5,5,5,5,5];
   const y = [1,2,3,4,5,6];
   console.log(freq(x));
 */

/**
 * Thoughts:
 * 1. Use HM with count for each number and track the high count, at the end return the key.
 */
function freq(array) {
    let hm = {};
    let hc = 1;
    let maxNum = null;
    for (let i = 0; i < array.length; i++) {

        if (!hm[array[i]]) {
            hm[array[i]] = 1;
        }
        else {
            hm[array[i]] = hm[array[i]] + 1;
        }

        if (hm[array[i]] > hc) {
            hc = hm[array[i]];
            maxNum = array[i];
        }
    }
    console.log("33)", maxNum);

}
freq([8, 3, 8, 4, 9, 2, 8, 9, 8, 5]);
freq([8, 3, 8, 4, 9, 2, 8, 9, 8, 5, 5, 5, 5, 5]);

/* 34) LetterChanges -- 
* @param {For the input "beautiful^" your output was incorrect. The correct answer is cfbvUjgvm^.
2. For the input "this long cake@&" your output was incorrect. The correct answer is UIjt mpOh dblf@&.
3. For the input "a confusing /:sentence:/[ this is not!!!!!!!~" your output was incorrect. The correct answer is b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~.} str 
console.log(checkTest(LetterChanges("beautiful^"), "cfbvUjgvm^"));
console.log(checkTest(LetterChanges("this long cake@&"), "UIjt mpOh dblf@&"));
console.log(checkTest(LetterChanges("a confusing /:sentence:/[ this is not!!!!!!!~"), "b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~"));
*/


//35) NonRepeatingChars -- Remove repeating chars
//“Geeks Quiz” -> ‘GksQuiz’;  
/**
 * Thoughts:
 * 1. 1 loop, if next char is same then splice it
 */
function NonRepeatingChars(string){
    let stringarr = string.split(" ").join("").split("");
    for (let i = 0; i < stringarr.length; i++) {
        let cur = stringarr[i];
        let next = stringarr[i+1];
        if(cur === next){
            stringarr.splice(i, 1);
        }        
    }
    console.log(stringarr.join(""));
}
NonRepeatingChars("Geeks Quiz")

//36) Merge Two Arrays

/** 37)
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

 //38) Kognity Qs

//Datastructures:

//1) PrintLinkedList (use Recursion)
const SinglyLinkedListNode = {
    data: 17,
    next:
    {
        data: 19,
        next:
        {
            data: 5, next: null
        }
    }
}


//)Doubly Linked List

//)Stack

//)Queue

//)HashMap