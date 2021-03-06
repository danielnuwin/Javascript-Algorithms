//Given String, split into as few strings
// as possible such as each string is a pallindrome. For example, given the input racecarannakayak, return ['racecar','anna', 'kayak']
//string abc should return ["a", "b", "c"]

/**
 * Thoughts:
 * 1. Take string, find if there are palindromes that exist in it. 
 * 2. Read char by char if the reverse of that string equals to that palindrome. 
 * 3. Loop until the next has the same char, if it does then compare
 */

let string = "racecarannakayak";

checkPalindrome = (string) => {
    const result = [];

    for (let i = 0; i < string.length; i++) {
        let cur = string.charAt(i);

        for (let j = i + 1; j < string.length; j++) {
            let next = string.charAt(j);
            // console.log("next", next, "cur", cur);

            if (cur === next) {
                let word1 = string.substring(i, j + 1);
                let word2 = word1.split("").reverse().join("");

                // console.log("word1", word1, "word2:",word2);

                if (word1 === word2 && word1.length > 2) {
                    result.push(word1);
                }
            }
        }
    }
    console.log(result);
}
checkPalindrome(string);

/**
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


//Use HM because it handles duplicates, when you try to add to a hm with an existing key, you return it. 

function first_repeat(string) {

    const hm = {};
    if (string.length <= 1 || string === "") {
        console.log("1None");
        return;
    }

    for (let i = 0; i < string.length; i++) {

        if (!hm[string.charAt(i)]) {
            hm[string.charAt(i)] = 'hello';
        }
        else if (hm[string.charAt(i)]) {
            //if exists
            console.log(string.charAt(i));
            return;
        }
        else {
            console.log("2None");
            return;
        }
    }

    console.log("3None");
    return;

}

first_repeat("");
first_repeat("A")
first_repeat("ABC")
first_repeat("AA")
first_repeat("ABA")
first_repeat("ABBA")
first_repeat("BACDEFGHIJBQWERUAAAA")

//Merget two arrays

const a = [

    { id: "Nidhi", company: "SIS" },

    { id: "Aman", company: "Apple" }

];

const b = [

    { id: "Nidhi", position: "UI" }, { id: "Ram", position: "FE" }

];

console.log(a.concat(b));
console.log([...a, ...b]);

//Rotate Array in Place and new array
let array = [1, 2, 3, 4];
let k = 2;

function rotate(array, k) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        //move k to the right, check if the last index 3 + 2 = 5 - 4 = 1
        let move = i + k;

        if (move >= array.length) {
            let index = move - array.length;
            result[index] = array[i];
        }
        else {
            result[move] = array[i];
        }
    }
    console.log(result)
}
rotate(array, k);

function rotateIP(array, k) {
    //Rotate in place meaning you have to swap the values
    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < array.length; j++) {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
    console.log("hello");
}
rotateIP(array, k);