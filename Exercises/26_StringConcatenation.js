
/**
 * This problem was asked by Dropbox.

Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.

The order of the indices does not matter.


Notes:
1. Concat the words array, with all the combos. 
2. Two Loops, Check if the first length of the concat is equal to the string, if so the add the starting index to the result array. 
 */
let string = "dogcatcatcodecatdog";
let words = ["cat", "dog"];

function findConcat(string, words) {
    let firstWord = words.join("");
    let secWord = words.reverse().join("");
    let result = [];
    for (let i = 0; i < string.length; i++) {

        let getSubstring = string.substring(i, i + firstWord.length);

        if (getSubstring === firstWord || getSubstring === secWord) {
            result.push(i);
        }
    }

    return result;
}

console.log(findConcat(string, words));
console.log(findConcat("barfoobazbitbyte", words));
