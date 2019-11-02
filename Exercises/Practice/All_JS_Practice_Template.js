//1) FindMissingNumberInArray -- How do you find the missing number in a given integer array of 1 to N?
const one = [1, 2, 3, 5, 6, 7, 8, 10];

//2) FindDuplicatesInArray -- How do you find the duplicate number on a given integer array?
const two = [1, 1, 2, 3, 4, 4, 5, 6, 7];

//3) FindLargestInSmallestArray -- How do you find the largest and smallest number in an unsorted integer array?
const three = [10, 1, 24, 3, 5, 2, 190, 4];

//4) TwoSum -- How do you find all pairs of an integer array whose sum is equal to a given number?
const four = [10, 1, 24, 3, 5, 2, 190, 4];
const four_target = 34;

//5) RemoveUsingSplice -- Remove an item in an array using splice
const five = [10, 1, 24, 3, 5, 2, 190, 4];
const five_removeItem = 5;

//6) ReverseArray --  How do you reverse an array?
const six = [1, 2, 3, 4, 5, 6, 7];

//7) RemoveDuplicatesInArray -- Removing duplicates in an array without library function
const seven = [1, 1, 2, 3, 4, 4, 5, 6, 7];

//8) Palindrome -- Check if string is a palindrome
let eight = "racecar";

/*9) Minimum Distance
Given an array of integers, find and print the minimum absolute difference between any two elements in the array.
*/

let nine = [3, -7, 0]; //3 (0, 3)
let nine_2 = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]; //1 (-54 , -53)

//10) RemoveCharFromString
//Write a method which will remove any given character from a String? (solution)
let ten_string = "racecar";
let ten_char = "r";

//11) CountOccourencesOfChar -- How to count the occurrence of a given character in a String? 
let eleven_string = "chchchararacterr";

//12) SecondHighest -- How do you find the second highest number in an integer array? 
let twelve = [1, 4, 2, 3, 1, 7, 8, 5];

//13) Rotate2DArray --  Rotate clockwise a 2D array. Also with rotate N Times
let array_13 =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

//14) SmallestRight -- Find How many smaller numbers to the right of each number in the array
//Challenge --> USE a BST
let fourteen = [3, 6, 2, 7, 3, 9, 3, 1];

//15) FindSingleNum --  There is an array with every element repeated twice except one.
// Find that element? (solution)
let fifteen = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8];

//16) FindMinSort  -- Sort the list using min
//MERGE SORT (Divide and Conquer) O(nlogn)
//Selection Sort (Swap) (O(n^2))
let sixteen = [3, 6, 4, 7, 8, 2, 11, 1, 5];

/*17) FindLongestSequence --  Write a program to find length of longest consecutive sequence in array of integers? (solution)
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
*/
let seventeen = [100, 4, 200, 1, 3, 2, 5, 6, 7, 20, 8, 201, 202, 203, 204, 9, 10, 205, 206, 207, 208, 209];

/* 18) NKTimes --
 * Given an array of of size n and a number k, find all elements that appear more than n/k times? (solution)
Another tough array based coding questions from Interviews. You are given an array of size n,
 find all elements in array that appear more than n/k times. For example, 
 if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4, then the output should be [2, 3]. 
 Note that size of array is 8 (or n = 8), so we need to find all elements that appear more than 2 (or 8/4) times. 
 There are two elements that appear more than two times, 2 and 3.
 */

let seventeen_array = [3, 1, 2, 2, 1, 2, 3, 3];
let seventeen_k = 4;


//19) MaxCount -- Find the count of maximum numbers
let nineteen = [1, 2, 2, 4, 2, 4]; //2

//20) Fibonacci -- the Sum of all the numbers previous is the sum of the previous two
// fib 6 = 13 The next number is found by adding up the two numbers before it

/* 21) Rotate Array
 * Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.
 * Ex:
 * input: 1,2,3,4, k=2
 * output: 3,4,1,2
 */
let twenty_array = [1, 2, 3, 4];
let twenty_k = 2;

//22) PowerNum -- Function to do exponents (Try Recursion also)

//23) Factorial -- Function to calc factorial 

//24) PalindromeVariation -- Given String, split into as few strings
// as possible such as each string is a pallindrome. For example, given the input racecarannakayak, return ['racecar','anna', 'kayak']
//string abc should return ["a", "b", "c"]
let twoFour = "racecarannakayakabc";


/* 25) StringConcatenation -- 
Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.
For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.
Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.
The order of the indices does not matter.
 */
let twoFive_string = "dogcatcatcodecatdog";
let twoFive_words = ["cat", "dog"];

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

/* 30) 3rdBiggest Find the 3rd biggest number in the array.*/
let thirty = [0, 8, 6, 3, 66, 42, 3, 6, 3, 1, 8];


/* 31) CircleChars --
Given a list of words, determine whether the words can be chained to form a circle. A word X can be placed in front of another word Y in a circle if the last character of X is same as the first character of Y.
For example, the words ['chair', 'height', 'racket', touch', 'tunic'] can form the following circle: chair --> racket --> touch --> height --> tunic --> chair.
*/
const threeOne = ['chair', 'height', 'racket', 'touch', 'tunic'];

/* 32) Pyramid
given array, print 
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5 
*/

/* 33) Frequency
 * write a program to find the most frequent item of an array.
 *  example: let x = [8,3,8,4,9,2,8,9,8,5] and expected output 8(4 times)
 * const x = [8,3,8,4,9,2,8,9,8,5,5,5,5,5];
   const y = [1,2,3,4,5,6];
   console.log(freq(x));
 */

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

//Longer exercises:
//1) ConvertMilitaryTime
//2) Kognitiy Qs

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