/**
 * This problem was asked by Dropbox.

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".
Thoughts:
1. Define mapping to Letter 1 -> 26
2. 1-26, 27-52, 53-78, etc...
3. 

Input          Output
 26             Z
 51             AY
 52             AZ
 80             CB
 676            YZ
 702            ZZ
 705            AAC

Questions: would a good direction be creating a dictionary mapping the first letters to numbers manually? 
 */

//Dictionary of Num and Letters
// let hm = {
//     1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H", 9: "I", 10: "J", 11: "K",
//     12: "L", 13: "M", 14: "N", 15: "O", 16: "P", 17: "Q", 18: "R", 19: "S", 20: "T", 21: "U", 22: "V",
//     23: "W", 24: "X", 25: "Y", 26: "Z"
// };

let letters = "abcdefghijklmnopqrstuvwxyz";
let dic = {};
for (let i = 0; i < letters.length; i++) {
    dic[i + 1] = letters.charAt(i);
}

function toColumnRec(num) {
    //Base Case < 26
    if (num <= 26) {
        if (num === 0) {
            return 'Not Valid';
        }
        else {
            return dic[num];
        }
    }
    else { // > 26
        let div = Math.floor(num / 26);
        let mod = num % 26;
        if (mod === 0) {
            return toColumnRec(div - 1) + dic[26];
        }
        else {
            return toColumnRec(div) + dic[mod];
        }
    }
}

console.log(toColumnRec(78));//BZ
console.log(toColumnRec(79));//CA
console.log(toColumnRec(702));//ZZ
console.log(toColumnRec(705));//AAC

//******n */Issue with tripple Characters > Need Recursion 
function toColumn(num) {

    if (num <= 26) {
        if (num === 0) {
            return "Not Valid";
        }
        return dic[num];
    }
    else { // num > 26
        //div
        let div = Math.floor(num / 26);
        // console.log(div);

        //Mod
        let mod = num % 26;
        if (mod === 0) {
            //what if it is > 26 and div is a whole number like 78/26 === 3 which is BZ > Fixed
            div = div - 1;
            mod = 26;
        }
        // console.log(mod);

        return dic[div] + dic[mod];
    }

}

// console.log(toColumn(200));
