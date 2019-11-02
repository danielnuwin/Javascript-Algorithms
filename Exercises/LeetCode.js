/**
 * Given two words word1 and word2, 
 * find the minimum number of steps required to make word1 and word2 the same, 
 * where in each step you can delete one character in either string.
 * Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
 */

function minDistance(word1, word2) {
    let similarChars = 0;

    for (let i = 0; i < word1.length; i++) {
        let curChar = word1.charAt(i);
        if (word2.indexOf(curChar) !== -1) {
            // console.log(curChar);
            similarChars++;
        }
    }
    let result = (word1.length - similarChars) + (word2.length - similarChars);
    console.log(result);

}

// minDistance("sea","eat") //2
minDistance("sea", "ate") //4


function toLowerCase(string) {
    let array = string.split("");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
    }
    console.log(array.join(""));

}
toLowerCase("Hello");