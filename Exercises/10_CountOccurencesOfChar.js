//How to count the occurrence of a given character in a String? 

let string = "chchchararacterr";

/**
 * Notes: 8:16-8:20(4min)
 * 1. Use a HM, use the char as Key, value as count. Return as an object
 */

function findOccurences(string) {
    let hm = {};

    for (let i = 0; i < string.length; i++) {
        if (!hm[string.charAt(i)]) {
            hm[string.charAt(i)] = 1;
        }
        else {
            hm[string.charAt(i)] = hm[string.charAt(i)] + 1;
        }
    }

    return hm;
}
console.log("findOccurences", findOccurences(string));

