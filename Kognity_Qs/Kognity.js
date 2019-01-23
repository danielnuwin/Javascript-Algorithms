/**
Create a function that returns the first repeated character in a string 
(Strict definition: return the first character where that same character
exists to the left in the string).
first_repeat("") -> None
first_repeat("A") -> None
first_repeat("ABC") -> None
first_repeat("AA") -> "A"
first_repeat("ABA") -> "A"
first_repeat("ABBA") -> "B"
first_repeat("BACDEFGHIJBQWERUAAAA") -> "B"

Note that the examples are written in python, 
please translate None to a similar value in your 
language (e.g. nil for ruby, undefined for javascript) 
 */

let string = 'BACDEFGHIJBQWERUAAAA';

function retFirst(string) {

    let retString = "";

    let hm = {};

    for (let i = 0; i < string.length; i++) {

        if (string === "" || string.length === 1) {
            return "None";
        }
        else if (!hm[string.charAt(i)]) {
            hm[string.charAt(i)] = string.charAt(i);
        }
        else {
            retString = string.charAt(i);
            return retString;
        }
    }

}

console.log("return First Char:", retFirst(string));
